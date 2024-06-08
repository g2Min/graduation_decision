// const express = require('express');
// const { DataFrame } = require('dataframe-js');
// const db = require('./db');

// const router = express.Router();

// // '/data' 경로에서 POST 요청을 처리
// router.post('/data', (req, res) => {
//     const query = req.body.query; // 클라이언트로부터 받은 쿼리

//     // 쿼리가 유효한지 확인 (기본적인 SQL 인젝션 방지)
//     if (!query || typeof query !== 'string') {
//         res.status(400).send('Invalid query');
//         return;
//     }

//     db.query(query, (err, results) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Internal Server Error');
//             return;
//         }

//         // 결과를 DataFrame으로 변환
//         const df = new DataFrame(results);

//         // DataFrame을 JSON으로 변환하여 응답
//         res.json(df.toJSON());
//     });
// });

// module.exports = router;

const express = require("express");
const { DataFrame } = require("dataframe-js");
const db = require("./db");

const router = express.Router();

const redisClient = redis.createClient({ url: 'redis://localhost:6379' });
const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);

redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.connect();

router.post("/data", async (req, res) => {
  // const { major, year, level } = req.query;
  const {major} = req.query;
  // const query = "SELECT * FROM {major}";  // 모든 데이터를 가져오는 쿼리
  if (!major) {
    res.status(400).send("Major is required");
    return;
  }

  // SQL 인젝션 방지를 위해 쿼리 파라미터 사용
  const query = "SELECT * FROM ??"; // '?' 또는 '??'를 사용하여 파라미터를 안전하게 삽입
  const queryParams = [major]; // 쿼리 파라미터

  db.query(query, queryParams,(err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      // 결과를 DataFrame으로 변환
      const df = new DataFrame(results);

      // '교양' 값이 있는 모든 행을 필터링
      const filteredDf = df.filter((row) => {
        // 모든 열에 대해 검사
        return row.toArray().some((value) => value === "교양");
      });

      // 필터링된 DataFrame을 JSON으로 변환하여 응답
      res.json(filteredDf.toJSON());
    } catch (filterError) {
      console.error(filterError);
      res.status(500).send("Error processing data");
    }
  });
});

module.exports = router;
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const fetch = require('node-fetch');
const redis = require('redis');
const { promisify } = require('util');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
}));


// public 디렉토리 아래에 파일을 두고 정적 파일로 제공
app.get('/download', (req, res) => {
  // 파일 경로 설정
  const filePath = path.join(__dirname, 'downloads', 'sample.xlsx');
  // 사용자에게 파일을 제공
  res.download(filePath);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

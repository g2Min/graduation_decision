import styled from "styled-components";

const Culture = () => {
  return (
    <Div>
      <Table>
        <tbody>
          <tr>
            <Td rowSpan={6}>교양</Td>
            <Td colSpan={3}>공통 교양</Td>
            <Td colSpan={1}>17학점</Td>
            {/* <Td>17학점</Td>
          <Td>a</Td> */}
          </tr>
          <tr>
            <Td rowSpan={5}>지정</Td>
            <Td colSpan={2}>기본소양</Td>
            <Td colSpan={1}>9학점</Td>
            {/* <Td>a</Td> */}
          </tr>
          <tr>
            <Td rowSpan={4}>BSM</Td>
            <Td>BSM</Td>
            <Td colSpan={1}>21학점</Td>
            {/* <Td colSpan={1}>21학점</Td> */}
            {/* <Td>전산학영역불인정</Td> */}
          </tr>
          <tr>
            <Td rowSpan={2}>수학</Td>
            <Td colSpan={1}>미적분학및연습1, 확률및통계학</Td>
            {/* <Td rowSpan={2}>필수</Td> */}
          </tr>
          <tr>
            <Td colSpan={1}>이산수학, 공학선형대수학, 이산수학</Td>
            {/* <Td>공학선형대수학</Td>
          <Td>공학선형대수학, 이산수학</Td> */}
          </tr>
          <tr>
            <Td>과학</Td>
            <Td colSpan={1}>과학영역 ‘실험’교과목 1개 과목 선택 이수</Td>
            {/* <Td>선택필수</Td> */}
          </tr>
        </tbody>
      </Table>
    </Div>
  );
};

export default Culture;

const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
`;
const Td = styled.td`
  color: black;
  border: 1px solid #595959;
`;

const Div = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;


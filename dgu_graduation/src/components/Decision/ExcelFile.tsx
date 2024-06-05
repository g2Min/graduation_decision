import * as XLSX from 'xlsx';

const ExcelFile = (data: any, fileName: any) => {
  // 워크북 생성
  const workbook = XLSX.utils.book_new();

  // JSON 데이터를 시트로 변환
  const worksheet = XLSX.utils.json_to_sheet(data);

  // 워크시트를 워크북에 추가
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // 파일 저장 (브라우저에서 바로 다운로드)
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
  return(
    <></>
  )
}

export default ExcelFile;

/*
import * as XLSX from 'xlsx';

function exportToExcel(data, fileName) {
  // 워크북 생성
  const workbook = XLSX.utils.book_new();

  // JSON 데이터를 시트로 변환
  const worksheet = XLSX.utils.json_to_sheet(data);

  // 워크시트를 워크북에 추가
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // 파일 저장 (브라우저에서 바로 다운로드)
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
}

// 사용 예
const data = [
  { name: "John", city: "New York", age: 30 },
  { name: "Jane", city: "Los Angeles", age: 28 },
];

exportToExcel(data, "sample");

*/
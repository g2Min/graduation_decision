import React, { useState } from 'react';
import * as XLSX from 'xlsx';

interface ExcelRow {
  [key: string]: any;
}

const ExcelReader: React.FC = () => {
  const [uploadedFileData, setUploadedFileData] = useState<ExcelRow[]>([]);

  const readExcel = (file: Blob) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e: ProgressEvent<FileReader>) => {
      if (!e.target) return;
      const bufferArray = e.target.result as ArrayBuffer;

      const fileInformation = XLSX.read(bufferArray, {
        type: 'buffer',
        cellText: false,
        cellDates: true,
      });

      const sheetName = fileInformation.SheetNames[0];
      const rawData = fileInformation.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json<ExcelRow>(rawData);

      setUploadedFileData(mappingDataToTable(data));
    };

    fileReader.onerror = (error) => {
      console.error('Error reading file:', error);
    };
  };

  const handleExcelFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    readExcel(file);
  };

  const mappingDataToTable = (data: ExcelRow[]): ExcelRow[] => {
    // 여기에 데이터를 테이블 형식으로 매핑하는 로직을 추가하세요.
    return data;
  };

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleExcelFileChange} />
      <div>
        {/* 업로드된 데이터를 화면에 표시하는 로직을 추가하세요. */}
        {uploadedFileData.length > 0 && (
          <table>
            <thead>
              <tr>
                {Object.keys(uploadedFileData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {uploadedFileData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ExcelReader;

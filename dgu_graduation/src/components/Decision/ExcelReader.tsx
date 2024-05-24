import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

interface ExcelRow {
  [key: string]: any;
}

interface ExcelReaderProps {
  file: Blob | null;
}

const ExcelReader: React.FC<ExcelReaderProps> = ({ file }) => {
  const [uploadedFileData, setUploadedFileData] = useState<ExcelRow[]>([]);

  useEffect(() => {
    if (file) {
      readExcel(file);
    }
  }, [file]);

  const readExcel = (file: Blob) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e: ProgressEvent<FileReader>) => {
      const bufferArray = e.target?.result as ArrayBuffer;
      const fileInformation = XLSX.read(bufferArray, {
        type: "buffer",
        cellText: false,
        cellDates: true,
      });
      const sheetName = fileInformation.SheetNames[0];
      const rawData = fileInformation.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json<ExcelRow>(rawData);
      setUploadedFileData(data);
    };

    fileReader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  };

  return (
    <div>
      {uploadedFileData.length > 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(uploadedFileData[0]).map(key => <th key={key}>{key}</th>)}
            </tr>
          </thead>
          <tbody>
            {uploadedFileData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => <td key={i}>{value}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExcelReader;

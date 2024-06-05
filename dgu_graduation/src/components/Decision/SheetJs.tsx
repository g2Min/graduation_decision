import { useCallback, useState, useRef } from "react";
import * as XLSX from "xlsx";
import { Icon, ModalButton, UploadContainer, UploadText } from "./style";
import fileIcon from "assets/icons/file_upload.svg";
import ExcelReader from "./ExcelReader";
import ExcelFile from "./ExcelFile";
type SheetRow = { [key: string]: any };

const SheetJs = () => {
  const [file, setFile] = useState<Blob | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExcelFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        console.log("File selected:", selectedFile.name);
      }
    },
    []
  );

  const handleUploadClick = () => {
    // fileInputRef.current가 null이 아니면 input 요소의 클릭 이벤트를 트리거
    fileInputRef.current?.click();
  };

  const [rows, setRows] = useState<SheetRow[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const ab = e.target.result;
      const wb = XLSX.read(ab, { type: "array" });
      const sheetName = wb.SheetNames[0];
      const ws = wb.Sheets[sheetName];
      const data: any[] = XLSX.utils.sheet_to_json(ws);
      setRows(data);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div style={{ marginTop: 44, height: "100%" }}>
      <UploadContainer>
        <UploadText onClick={handleUploadClick}>.excel 파일 업로드</UploadText>
        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx, .xls"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <Icon src={fileIcon} onClick={handleUploadClick} />
      </UploadContainer>
      {/* {file && <ExcelReader file={file}/>} */}
      <table>
        <thead>
          {rows.length > 0 && (
            <tr>
              {Object.keys(rows[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {rows && (
        <div
          style={{
            width: "100%",
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 20
          }}
        >
          <ModalButton>검사하기</ModalButton>
        </div>
      )}
    </div>
  );
};

export default SheetJs;

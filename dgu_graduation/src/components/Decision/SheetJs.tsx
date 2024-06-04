import { useCallback, useState, useRef } from "react";
import * as XLSX from "xlsx";
import { Icon, UploadContainer, UploadText } from "./style";
import fileIcon from "assets/icons/file_upload.svg";
import ExcelReader from "./ExcelReader";

const SheetJs = () => {
  const [file, setFile] = useState<Blob | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExcelFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      console.log("File selected:", selectedFile.name);
    }
  }, []);

  const handleUploadClick = () => {
    // fileInputRef.current가 null이 아니면 input 요소의 클릭 이벤트를 트리거
    fileInputRef.current?.click();
  };

  return (
    <div style={{ marginTop: 44, height: '100%' }}>
      <UploadContainer>
        <UploadText onClick={handleUploadClick}>.excel 파일 업로드</UploadText>
        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx, .xls"
          style={{ display: 'none' }}
          onChange={handleExcelFileChange}
        />
        <Icon src={fileIcon} onClick={handleUploadClick}/>
      </UploadContainer>
      {file && <ExcelReader file={file}/>}
    </div>
  );
};  

export default SheetJs;

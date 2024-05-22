import * as XLSX from "xlsx";
import { Icon, UploadContainer, UploadText } from "./style";
import fileIcon from "assets/icons/file_upload.svg";
import ExcelReader from "./ExcelReader";

type fileProps = {
  file?: Blob;
};
const SheetJs = () => {

  const handleExcelFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    // readExcel(file);
  };
  return (
    <div style={{ marginTop: 44, border: '1px solid black', height: '100%' }}>
      <UploadContainer onChange={handleExcelFileChange}>
        <UploadText>.excel 파일 업로드</UploadText>
        <Icon src={fileIcon} />
      </UploadContainer>
      {/* <ExcelReader /> */}
    </div>
  );
};

export default SheetJs;

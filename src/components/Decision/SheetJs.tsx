import * as XLSX from "xlsx";
import { Icon, UploadContainer, UploadText } from "./style";
import file from "assets/icons/file_upload.svg";

const SheetJs = () => {
  // const handleParsingFile = (e: any) => {
  //   let result = new Array();
  //   const reader = new FileReader();
  //   reader.onload = (e: any) => {
  //     let data = e.target.result;
  //     const wb = XLSX.read(data, { type: "binary" });
  //     const wsName = wb.SheetNames[0];
  //     let workSheet = wb.Sheets[wsName];
  //     let row = [];
  //     let rowNum = 0;
  //     let colNum = 0;
  //     let range = XLSX.utils.decode_range(workSheet["!ref"]);

  //     for(rowNum == range.s.r; rowNum <= range.e.r; rowNum ++){
  //       row = [];
  //       for(colNum == range.s.c; colNum <= range.e.c; )
  //     }
  //   };
  // };
  return (
    <div style={{ marginTop: 44 }}>
      <UploadContainer>
        <UploadText>.excel 파일 업로드</UploadText>
        <Icon src={file} />
      </UploadContainer>
    </div>
  );
};

export default SheetJs;

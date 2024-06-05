import { SelectLayer } from "../style";
import { major, year, classify } from "../optional.json";
import SelectBox from "components/EBook/SelectBox";
import { StylesConfig } from "react-select";
import SheetJs from "components/Decision/SheetJs";
import ExcelFile from "components/Decision/ExcelFile";
import {saveAs} from 'file-saver';

const data = [
  { name: "John" },
  { name: "Jane" },
];
const Decision = () => {
  const handleDownload = async () => {
    const response = await fetch('http://localhost:3000/sample.xlsx');
    const blob = await response.blob();
    saveAs(blob, 'sample.xlsx'); // 다운로드 파일 이름 지정
  };
  return (
    <div>
      <SelectLayer>
        <SelectBox
          options={major}
          placeHolder="AI융합대학 전공 이름"
          styles={colourStyles}
          width={435}
        />
        <SelectBox
          options={year}
          placeHolder="입학년도"
          styles={colourStyles}
          width={186}
        />
        <SelectBox
          options={classify}
          placeHolder="전공구분"
          styles={colourStyles}
          width={186}
        />
        <button onClick={handleDownload}>양식 다운로드받기</button>
      </SelectLayer>
      <SheetJs />
    </div>
  );
};

export default Decision;

type valueProp = {
  value: string;
  label: string;
};

const colourStyles: StylesConfig<valueProp> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    width: "auto",
    display: "block",
    // alignItems: "flex-start",
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "#FF9C28"
        : isFocused
        ? "#FF9C28"
        : undefined,
      color: isDisabled ? "#ccc" : isSelected ? "#fff" : "#595959",
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
      },
    };
  },
};

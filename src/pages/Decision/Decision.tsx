import { SelectLayer } from "../style";
import { major, year, classify } from "../optional.json";
import SelectBox from "components/EBook/SelectBox";
import { StylesConfig } from "react-select";

const Decision = () => {
  return(
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
      </SelectLayer>

    </div>
  );
}

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
    display: 'block',
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

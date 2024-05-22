import { useState } from "react";
import { SelectLayer, ButtonLayer, Container } from "../style";
import { major, year, classify } from "../optional.json";
import SelectBox from "components/EBook/SelectBox";
import { StylesConfig } from "react-select";
import MyButton from "components/EBook/MyButton";
import Culture from "./Culture";
import Major from "./Major";
import Grad from "./Grad";

type navProp = {
  name: string;
  id: number;
  focus?: boolean;
};
const Ebook = () => {
  const [focused, setFocused] = useState([true, false, false]);
  const tabItems = [
    { name: "교 양", id: 0 },
    { name: "전 공", id: 1 },
    { name: "졸업요건", id: 2 },
  ];

  const changeFocus = (item: navProp) => {
    setFocused(
      focused.map((value, index) => (index === item.id ? true : false))
    );
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
      </SelectLayer>
      <ButtonLayer>
        {tabItems.map((item, index) =>
          focused[item.id] ? (
            <div key={index} onClick={() => changeFocus(item)}>
              <MyButton name={item.name} style={[700, "#FF9315"]} />
            </div>
          ) : (
            <div key={index} onClick={() => changeFocus(item)}>
              <MyButton name={item.name} style={[400, "#FFB259"]} />
            </div>
          )
        )}
      </ButtonLayer>
      <Container>
        {focused[0] ? <Culture /> : focused[1] ? <Major /> : <Grad />}
      </Container>
    </div>
  );
};

export default Ebook;

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

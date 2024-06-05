import { atom } from "recoil";
import { Class } from "./class";

//분류표 id 
const classAtom = atom<Class>({
  key: 'class',
  default: {
    major: "",
    year: "",
    level: "",
  }
})

export default classAtom;
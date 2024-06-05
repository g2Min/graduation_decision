import { getEbook } from 'apis/ebook';
import {Button} from './style';

type ButtonProp = {
  name: string;
  style: any[];
};

const MyButton = (prop: ButtonProp) => {
  const {name, style} = prop;
  const fontWeight = style[0];
  const background = style[1];
  return (
    <Button style={{fontWeight: fontWeight, backgroundColor: background}} onClick={() => {
      getEbook();
    }}>
      {name}
    </Button>
  );
};

export default MyButton;

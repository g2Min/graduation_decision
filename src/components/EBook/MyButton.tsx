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
    <Button style={{fontWeight: fontWeight, backgroundColor: background}}>
      {name}
    </Button>
  );
};

export default MyButton;

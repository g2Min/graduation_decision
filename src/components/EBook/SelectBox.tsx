import React from 'react'
import { StylesConfig } from 'react-select';
import Select from 'react-select';

type valueProp = {
  value: string;
  label: string;
};
interface ComponentProps {
  options: valueProp[];
  placeHolder?: string;
  styles?: StylesConfig<valueProp>; 
  width?: number;
}
const SelectBox: React.FC<ComponentProps> = (prop) => {
  return(
    <Select
    isClearable
    options={prop?.options}
    placeholder={prop?.placeHolder}
    styles={{
      ...prop.styles,
      control: (provided) => ({
        ...provided,
        width: prop.width || '100%',
      }),
    }}
  />
  );
}

export default SelectBox; 
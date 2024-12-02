import React from 'react';
import { Input } from 'antd';

export const InputComponent = (props) => {
  {
    switch (props?.typeInput) {
      case 'password':
        return <Input.Password {...props}></Input.Password>;
      default:
        return <Input {...props}></Input>;
    }
  }
};
export default InputComponent;

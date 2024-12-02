import React from 'react';
import { Button } from 'antd';

export const ButtonComponent = (props) => {
  {
    switch (props?.typeButton) {
      default:
        return <Button {...props}> {props?.text}</Button>;
    }
  }
};

export default ButtonComponent;

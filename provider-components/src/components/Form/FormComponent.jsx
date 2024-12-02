import React from 'react';
import { Form } from 'antd';
const FormComponent = (props) => {
  return <Form {...props}></Form>;
};
FormComponent.Item = Form.Item;
FormComponent.List = Form.List;
FormComponent.ErrorList = Form.ErrorList;

export { FormComponent as Form };

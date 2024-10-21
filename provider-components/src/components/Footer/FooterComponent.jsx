import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content, Footer } = Layout;

export const FooterComponent = ({ texto = 'Footer' , styleProp}) => {
  return (
    <Footer
      style={styleProp}
    >
      {texto}
    </Footer>
  );
};

export default FooterComponent;

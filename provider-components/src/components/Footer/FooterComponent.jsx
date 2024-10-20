import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content, Footer } = Layout;

export const FooterComponent = ({ texto = 'Footer' }) => {
  return (
    <Footer
      style={{
        textAlign: 'center',
        height: '10vh',
        backgroundColor: '#fff',
      }}
    >
      {texto}
    </Footer>
  );
};

export default FooterComponent;

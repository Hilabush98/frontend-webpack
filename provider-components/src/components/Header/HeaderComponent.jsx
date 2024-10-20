import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content, Footer } = Layout;

export const HeaderComponent = ({ texto = 'Header' }) => {
  return (
    <Header
      style={{
        textAlign: 'center',
        height: '10vh',
        paddingInline: 48,
        backgroundColor: '#fff',
      }}
    >
      {texto}
    </Header>
  );
};

export default HeaderComponent;

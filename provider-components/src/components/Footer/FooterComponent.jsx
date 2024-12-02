import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content, Footer } = Layout;

export const FooterComponent = (props) => {
  return <Footer {...props}>{props.footerText}</Footer>;
};

export default FooterComponent;

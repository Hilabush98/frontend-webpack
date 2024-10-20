import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { FooterComponent } from '../Footer/FooterComponent.jsx';
import { HeaderComponent } from '../Header/HeaderComponent.jsx';
import { SiderComponent } from '../Sider/SiderComponent.jsx';
import { ContentComponent } from '../Content/ContentComponent.jsx';
import { CarouselComponent } from '../Carousel/CarouselComponent.jsx';

const ContenidoComponent = ({ Texto = 'Texto' }) => {
  return <h1>{Texto}</h1>;
};
export const Home = () => {
  return (
    <Layout>
      <SiderComponent />
      <Layout>
        <HeaderComponent texto="HEADER TEXT" />
        <ContentComponent ComponentItem={<CarouselComponent />} />
        <FooterComponent texto="Footer Text" />
      </Layout>
    </Layout>
  );
};
export default Home;

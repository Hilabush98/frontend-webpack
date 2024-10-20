import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content, Footer } = Layout;

export const SiderComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          height: '60px',
          backgroundColor: 'white',
          margin: '5px',
          opacity: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          display: 'flex',
        }}
      >
        Logotipo
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'Nomina',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'Retail',
          },
          {
            key: '3',
            icon: <VideoCameraOutlined />,
            label: 'Automic',
          },
        ]}
      />
    </Sider>
  );
};

export default SiderComponent;

import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  MergeOutlined,
  HddOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SolutionOutlined,
  HomeOutlined,
  DeploymentUnitOutlined
} from '@ant-design/icons';
const { Header, Sider, Content, Footer } = Layout;

export const SiderComponent = ({logotipoProps, SiderProps, MenuProps}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
       breakpoint="lg"
    >
      <div
        style={{
          height: '7.5vh',
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
            icon: <HomeOutlined />,
            label: 'Home',
          },
          {
            key: '2',
            icon: <UserOutlined />,
            label: 'Nomina',
          },
          {
            key: '3',
            icon: <MergeOutlined />,
            label: 'Integraciones',
            children:[
              {
                key: '3.1',
                icon: <DeploymentUnitOutlined />,
                label: 'Apache Hop',

              },
              {
                key: '3.2',
                icon: <HddOutlined />,
                label: 'ODI',
              }
            ]
          },
          {
            key: '4',
            icon: <SolutionOutlined />,
            label: 'Tickets',
          },
          
        ]}
      />
    </Sider>
  );
};

export default SiderComponent;

import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import {
  MergeOutlined,
  HddOutlined,
  UserOutlined,
  SolutionOutlined,
  HomeOutlined,
  DeploymentUnitOutlined
} from '@ant-design/icons';
import { getIcon } from '../../Utils/Icons/getIconFunction';

const { Header, Sider, Content, Footer } = Layout;


export const SiderComponent = ({logotipoProps, SiderProps, MenuProps}) => {
  const [collapsed, setCollapsed] = useState(false);
console.log(getIcon('HomeOutLined'))
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
       breakpoint="lg"
    >
      <div
      style={logotipoProps}
      >
        Logotipo
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={MenuProps?.defaultSelectedKeys||['1']}
        mode="inline"
        items={[
          {
            key: '1',
            icon: getIcon('HomeOutlined'),
            label: 'Home',
            onClick:(e)=>{ location.href = "http://localhost:2001/";}
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
            onClick:(e)=>{ location.href = "http://localhost:2002/";}
          },
          
        ]}
      />
    </Sider>
  );
};

export default SiderComponent;

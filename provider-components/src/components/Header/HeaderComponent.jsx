import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import UserSettingsComponent from '../UserSettings/UserSettingsComponent';
import { ConfigProvider } from 'antd';

const { Header,} = Layout;

export const HeaderComponent = ({ texto = 'Header', HeaderProps, avatarProps }) => {
  console.log(HeaderProps)
  return (
    <ConfigProvider theme={{ hashed: false }}>
    <Header props={ HeaderProps}>
        <div style={{height:'100%', display:'flex', justifyContent: 'flex-end', alignItems: 'center'}} >
            <div style={{margin:'0 10px 0 0'}}>
              <UserSettingsComponent avatarProps={avatarProps}/>
            </div>
        </div>
    </Header>
    </ConfigProvider>


  );
};

export default HeaderComponent;

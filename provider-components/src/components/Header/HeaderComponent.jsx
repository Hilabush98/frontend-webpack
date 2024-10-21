import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import UserSettingsComponent from '../UserSettings/UserSettingsComponent';
import { ConfigProvider } from 'antd';

const { Header,} = Layout;

export const HeaderComponent = ({ texto = 'Header', HeaderProps, avatarProps }) => {
  return (
    <Header props={ HeaderProps}>
        <div style={{height:'100%', display:'flex', justifyContent: 'flex-end', alignItems: 'center'}} >
          

            
            <div style={{margin:'0 15px 0 0'}}>
              <UserSettingsComponent avatarProps={avatarProps}/>
            </div>
        </div>
            </Header>

  );
};

export default HeaderComponent;

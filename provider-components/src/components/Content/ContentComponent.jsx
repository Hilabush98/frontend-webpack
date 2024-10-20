import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
export const ContentComponent = ({ ComponentItem = 'Contenido' }) => {
  return (
    <Content
      style={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        height: '80vh',
        backgroundColor: '#fff',
        margin: '0 ',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {ComponentItem}
      </div>
    </Content>
  );
};
export default ContentComponent;

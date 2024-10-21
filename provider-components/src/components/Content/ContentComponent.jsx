import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
export const ContentComponent = ({ ComponentItem = 'Contenido' ,styleProp }) => {
  return (
    <Content
      style={styleProp}
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

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

          height:'100%',
          width:'100%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <div style={{width:'100%', height:'100%'}}>
        {ComponentItem}
        </div>

      </div>
    </Content>
  );
};
export default ContentComponent;

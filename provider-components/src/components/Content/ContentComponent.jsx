import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
export const ContentComponent = (props) => {
  return (
    <Content {...props}>
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {props?.componentItem}
      </div>
    </Content>
  );
};
export default ContentComponent;

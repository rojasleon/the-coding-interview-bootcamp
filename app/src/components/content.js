import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

export default function MyContent({ children }) {
  return (
    <Content style={{ margin: '60px 0 0', overflow: 'initial' }}>
      <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
        {children}
      </div>
    </Content>
  );
}
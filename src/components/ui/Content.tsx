"use client"
import { Layout,Breadcrumb} from 'antd';

const { Content,  } = Layout;
const Contents = ({ children }: { children: React.ReactNode}) => {
  return (
    <Content style={{ margin: '0 16px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
    <div
      style={{
     
        minHeight: "100vh",
        color: "black",
    
      }}
    >
    {children}
    </div>
  </Content>
  );
};

export default Contents;
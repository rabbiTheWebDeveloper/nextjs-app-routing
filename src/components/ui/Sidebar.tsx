"use client"
import { Layout, Menu } from 'antd';

import { useState } from 'react';
import { sidebarItems } from '@/constants/SideberItem';
import { USER_ROLE } from '@/constants/role';

const { Sider } = Layout;




const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const roles =USER_ROLE.ADMIN
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
     
        <div style={{color : "white" ,  fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",}}>PH Unversity</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(roles)} />
      </Sider>
  );
};

export default Sidebar;
import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { MainHoc } from './MainHoc';
import { SideMenuHoc } from './SideMenuHoc';
import '../style.css';

const { Header, Content, Footer, Sider } = Layout;

export const LayoutHocView = () => {
  useEffect(() => {
    const permissions = ['management.headmasters', 'management.teachers', 'task.chinese', 'task.math', 'task.other', 'task.other.add', 'task.other.edit'];
    localStorage.setItem('permission_keys', JSON.stringify(permissions));
  }, []);

  return (
    <Layout style={{ minHeight: '100vh'}}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <SideMenuHoc />
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 560 }}>
            <MainHoc />
          </div>
        </Content>
          <Footer style={{ textAlign: 'center' }}>©2021 Created by 无骛</Footer>
        </Layout>
      </Layout>
  )
}
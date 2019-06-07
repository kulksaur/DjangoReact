import React from 'react';
import { Layout, Menu, Button, Affix } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;


const CustomLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}>
            </Menu>
            </Header>
            <br />
            <Content style={{ padding: '0 50px' }}>
            <Affix>
                <Button type="default">
                    <Link to="/">All Posts</Link>
                </Button>
            </Affix>
            <br />
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                {props.children}
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Django-React ©2019 Created by Saurabh</Footer>
        </Layout>
    );
}

export default CustomLayout;
  
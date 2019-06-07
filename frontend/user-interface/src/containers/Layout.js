import React from 'react';
import { Layout, Menu, Button, Affix } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;


// Creating a wrapping layout having the menu, children components and footer
const CustomLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}>
                <Affix>
                    <Button type="default">
                        <Link to="/">All Posts</Link>
                    </Button>
                </Affix>
            </Menu>
            </Header>
            <br />
            <Content style={{ padding: '0 50px' }}>
            
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
  
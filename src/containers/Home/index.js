import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
// import './style.css'
import './style.less'


const {
  Header, Sider, Content, Footer,
} = Layout

class Home extends Component {
  state = {
    collapsed: true,
  }
  componentWillMount() {
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  loadMenu = () => (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1">
        <Icon type="folder" />
        <span>Categories</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="tags" />
        <span>Tags</span>
      </Menu.Item>
    </Menu>
  )
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible>
          <div className="logo">
            {/* !this.state.collapsed && <div style={{
              float: 'right', fontSize: 20, marginRight: 20 }}> <span>Spanboard</span></div> */}
            <Icon spin type="aliwangwang-o" style={{ fontSize: 30, float: 'left' }} />
          </div>
          {this.loadMenu()}
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '16px', minHeight: '60vh' }}>
            <div style={{ padding: 24, background: '#fff' }}>
              Content goes here
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Home

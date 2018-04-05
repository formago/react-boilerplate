import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import LoginPage from 'containers/Default/LoginPage/Loadable';

const { Header, Content, Footer } = Layout;
const MenuItem = Menu.Item;

export default class Default extends React.Component {
  
  // constructor(props){
  //   console.log(props)
  // }

  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <MenuItem key="1">React-Bank-Starter-Kit</MenuItem>
            <MenuItem key="2">About</MenuItem>
            <MenuItem key="3">Credits</MenuItem>
          </Menu>
        </Header>
        <Content style={{ padding: '50px' }}>
          <div>
            <Switch>
              <Route exact path="/" component={LoginPage} />
            </Switch>
          </div>
        </Content>
        <Footer>
        </Footer>
      </Layout>
    );
  }
}

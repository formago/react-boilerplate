import React from "react";

import { Link, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Home from "containers/Cabinet/Home/Loadable";
import Documents from "containers/Cabinet/Documents/Loadable";
import Statements from "containers/Cabinet/Statements/Loadable";
import AntDPage from "containers/AntDPage/Loadable";
import Clients from "containers/Cabinet/Clients/Loadable";
import CabinetMenu from "containers/Menu";
import Logo from "components/Logo";
import H1 from "components/H1";

const { Header, Content, Footer, Sider } = Layout;

export default class Cabinet extends React.PureComponent {
  state = {
    collapsed: false
  };
  onCollapse = collapsed => {    
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {    
    return (
      <Layout style={{ minHeight: "100vh" }} className="cabinet">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          width="250"
        >
          <div className="bank-logo" style={{}}>
            <Logo />
            <H1
              style={{
                color: "white",
                float: "right",
                marginLeft: "10px",
                lineHeight: "80px",
                marginBottom: "0px"
              }}
            >
              Банк
            </H1>
          </div>
          <CabinetMenu {...this.state}/>
        </Sider>
        <Layout>
          <Header style={{ color: "white" }}>
            <div style={{ textAlign: "right" }}>
              <span>Username</span>
              <Link to="/" style={{ marginLeft: 20 }}>
                Logout
              </Link>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 24px 0px",
              height: "100%"         
            }}
          >
            <Switch>
              <Route exact path="/Cabinet" component={Home} />
              <Route path="/Cabinet/Documents" component={Documents} />
              <Route path="/Cabinet/Statements" component={Statements} />
              <Route path="/Cabinet/AntDPage" component={AntDPage} />
              <Route
                path="/Cabinet/clientcore/clients/clients"
                component={Clients}
              />
            </Switch>
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

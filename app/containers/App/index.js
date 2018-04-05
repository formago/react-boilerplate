/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AndtPage from 'containers/AntdPage/Loadable';
import Cabinet from 'containers/Cabinet/Loadable';
import Default from 'containers/Default/Loadable';


import reducer from "./reducer";
// import saga from "./saga";
import injectReducer from "utils/injectReducer";
// import injectSaga from "utils/injectSaga";
import { compose } from "redux";
import { connect } from "react-redux";
import auth from "../LoginForm/auth";

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

// export default function App() {
//   return (
//     <AppWrapper>
//       <Helmet
//         titleTemplate="%s - React.js Boilerplate"
//         defaultTitle="React.js Boilerplate"
//       >
//         <meta name="description" content="A React.js Boilerplate application" />
//       </Helmet>
//       <Switch>
//         <Route exact path="/" component={Default} />
//         <Route path="/Cabinet" component={Cabinet} />
//       </Switch>
//       {/* <Footer /> */}
//     </AppWrapper>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   setInterval(function () {
  //     auth.refreshAccessToken();
  //   }, 10000)
  // }
  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Default} />
          <Route path="/Cabinet" component={Cabinet} />
        </Switch>
        {/* <Footer /> */}
      </AppWrapper>
    );
  }
}

// const mapDispatchToProps = function (dispatch, props) {
//   return {};
// };
// const withConnect = connect(null, mapDispatchToProps);
// const withReducer = injectReducer({ key: "app", reducer });
// const withSaga = injectSaga({ key: "app", saga });

export default App;
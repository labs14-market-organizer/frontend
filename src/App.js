import React from "react";
//import "./sass/global.scss";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import { setLocalData, getUserData } from "./redux/actions/userData";
import "./App.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import MarketingPage from "./routes/MarketingPage";
import AuthenticatePage from "./routes/AuthenticatePage";
import LandingPage from "./routes/Landing";
import TokenCollect from "./routes/TokenCollect";
import MainPage from "./routes/MainPage";
import Navbar from "./components/Navbar";
import { StylesProvider } from "@material-ui/styles";

import UserList from "./routes/UserList";
import CreateMarket from "./routes/CreateMarket";
import AddBooths from "./routes/AddBooths";
import UserOnboarding from "./routes/UserOnboarding";
import ViewMyMarket from "./routes/ViewMyMarket";
import CreateVendor from "./routes/CreateVendor";
import BoothReduxForms from "./routes/Booths-Redux-forms";
import SearchMarkets from "./routes/SearchMarkets";
import MarketReduxForms from "./routes/Market-Redux-forms";

/* import LandingPage from './routes/LandingPage';
import DebugRouteBobby from './DebugRouteBobby';
import DebugRouteChase from './DebugRouteChase'; */

var user_type = localStorage.getItem("userType");
let token = null;
class App extends React.Component {
  componentWillMount() {
    this.props.getUserData(); //async check on second pass
  }

  componentWillUpdate() {
  }
  render() {
     token = this.props.token;
    let userData = this.props.userData;
    if (this.props.fetching)
      return <div className="App"> {"<LoadingScreen/>"} </div>;
    return (

      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <Navbar />

            <Route path="/landing" component={MarketingPage} />
            <PrivateRoute
              exact
              path="/"
              component={MainPage}
              props={this.props}
            />
            <Route
              path="/auth/token"
              render={() => <TokenCollect {...this.props} />}
            />
            <Route
              path="/signup"
              render={() => <AuthenticatePage signUp {...this.props} />}
            />
            <Route
              path="/login"
              render={() => (
                <div>
                  <AuthenticatePage logIn {...this.props} />
                </div>
              )}
            />
            <PrivateRoute path="/userslist" component={UserList} />
            {/* <Route
              path="/addbooths"
              render={props => <AddBooths {...this.props} currentBooth={undefined} />}
            /> */}
              <Route
              path="/useronboarding"
              render={props => <UserOnboarding />}
              />
              <Route
              path="/viewmymarket"
              render={props => <ViewMyMarket  />}
              />
               <Route
              path="/createvendor"
              render={props => <CreateVendor  />}
              />
               <Route
              path="/searchmarkets"
              render={props => <SearchMarkets />}
              />
              <Route
              path="/addbooths"
              render={props => <BoothReduxForms />}
              />
              <Route 
              path="/createmarket"
              render={props => <MarketReduxForms />}
              />
          </div>
        </MuiThemeProvider>
      </StylesProvider>

    );
  }
}

const mapStateToProps = state => {
  return {
    //states
    ...state.checkUserData
  };
};

export default connect(
  mapStateToProps,
  {
    //actions
    setLocalData,
    getUserData
  }
)(withRouter(App));

const InPrivateRoute = ({
  component: Component,
  props: userprops,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Redirect to="/" />;
        } else {
          return <Component {...props} {...userprops} />;
        }
      }}
    />
  );
};

const PrivateRoute = ({ component: Component, props: userprops, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} {...userprops} />;
        } else {
          return <Redirect to="/landing" />;
        }
      }}
    />

    // test
  );
};

function Public() {
  return <Redirect to="/match" />;
}

function Protected() {
  return <Redirect to="/match" />;
}

function LogOut(props) {
  return <button onClick={props.logout}>LOGOUT</button>;
}

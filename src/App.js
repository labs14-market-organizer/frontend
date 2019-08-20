import React from "react";
//import "./sass/global.scss";
import { connect } from "react-redux";
import {

  Route,

  Redirect,
  withRouter
} from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import { setLocalData, getUserData } from "./redux/actions/userData";
import "./App.scss";

import theme from "./theme";
import MarketingPage from "./routes/MarketingPage";
import AuthenticatePage from "./routes/AuthenticatePage";
import LandingPage from "./routes/Landing";
import TokenCollect from "./routes/TokenCollect";
import MainPage from "./routes/MainPage";

import { StylesProvider } from "@material-ui/styles";

import UserList from "./routes/UserList";


import UserOnboarding from "./routes/UserOnboarding";
import ViewMyMarket from "./routes/ViewMyMarket";

import BoothReduxForms from "./routes/Booths-Redux-forms";
import SearchMarkets from "./routes/SearchMarkets";
import MarketReduxForms from "./routes/Market-Redux-forms";
import MeetTheTeam from "./routes/MeetTheTeam";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import TermsAndConditions from "./routes/TermsAndConditions";
import MarketRules from "./routes/MarketRules";
import VendorReduxForms from "./routes/Vendor-Redux-forms";
import VendorPage from "./routes/VendorProfile";
/* import LandingPage from './routes/LandingPage';
import DebugRouteBobby from './DebugRouteBobby';
import DebugRouteChase from './DebugRouteChase'; */
import CreateVendor from "./routes/CreateVendor";
import LoadingScreen from "./components/LoadingScreen";

var user_type = localStorage.getItem("userType");
let token = null;
class App extends React.Component {
  componentWillMount() {
    //async check on second pass
    this.props.getUserData(null, true);
  
  }
  mount = true;
  componentWillUpdate() 
  {
    if(!this.props.token || !this.props.userData && !this.props.fetching)  this.props.getUserData(this.props.token, false);
  }
  componentDidMount()
  {
    setTimeout(()=>this.setState({...this.state}), 1);
  }
  componentWillUnmount()
  {
  }
  render() {
    var fetch = this.props.fetching
    var mount = this.mount;
    this.mount = false;
    console.log(mount);
    return (
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <div className="App">
          <div className="loader" style={{opacity: fetch ? mount ? "0.3" : "1.0" : "0", zIndex: 300, position: "fixed", top: "0", right: "0", transition: "opacity 0.75s linear", pointerEvents: fetch ? "auto" : "none" }}><LoadingScreen/></div>;
            <div style={{opacity: fetch ? 0.0 : 1.0, transition: "opacity 2s ease-in"}} >
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
              <Route path="/team"
              render={props => <MeetTheTeam />} 
              />
              <Route path="/privacy"
              render={props => <PrivacyPolicy />} 
              />
              <Route path="/terms"
              render={props => <TermsAndConditions />} 
              />
              </div>
                <Route 
              path="/createvendor"
              render={props => <VendorReduxForms />}
              />
              <Route 
              path="/vendorprofile"
              render={props => <VendorPage />}
              />
               <Route 
              path="/marketrules"
              render={props => <MarketRules />}
              />
               <Route 
              path="/testcreatevendor"
              render={props => <CreateVendor />}
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

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
import { setLocalData, getUserData } from "./redux/actions/userData";

import AuthenticatePage from "./routes/AuthenticatePage";
import MarketingPage from "./routes/MarketingPage";

/* import LandingPage from './routes/LandingPage';
import DebugRouteBobby from './DebugRouteBobby';
import DebugRouteChase from './DebugRouteChase'; */

var user_type = localStorage.getItem("userType");

class App extends React.Component {
  componentWillMount() {
    this.props.getUserData(); //async check on second pass
  }

  componentWillUpdate() {}
  render() {
    let token = this.props.token;
    if (this.props.fetching)
      return <div className="App"> {"<LoadingScreen/>"} </div>;
    console.log(token);
    return (
      <div className="App">
        {/* <AuthenticatePage signUp {...this.props} /> */}
        <MarketingPage />
        {/*       <NavBar/>
      <Route path="/landing" component={MarketingPage}/>
      <PrivateRoute path="/" component={MainPage}/>
      <Route path="/signup" render={()=> <AuthenticatePage signUp {...props}/>}/>
      <Route path="/login" render={()=> <AuthenticatePage logIn {...props}/>}/> */}
      </div>
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
)(App);

const InPrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("userToken")) {
          return <Redirect to="/" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("userToken")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/landing" />;
        }
      }}
    />
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

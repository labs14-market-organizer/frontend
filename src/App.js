import React from "react";
import "./sass/global.scss";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { login, getCurrentUser } from "./actions/index";


/* import LandingPage from './routes/LandingPage';
import DebugRouteBobby from './DebugRouteBobby';
import DebugRouteChase from './DebugRouteChase'; */

var user_type = localStorage.getItem('userType');

class App extends React.Component {
  componentWillMount() 
  {

  }

  componentWillUpdate()
  {
  }
  render() 
  {
  }
}

const mapStateToProps = state => {
  return {
    //stores
  };
};

export default connect(
  mapStateToProps,
  { login, getCurrentUser }
)(App);

const InPrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("userToken")) {
          return <Redirect to="/match" />;
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
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

function Public() {
    return <Redirect to="/match"/>;
}

function Protected() {
    return <Redirect to="/match"/>;
}

function LogOut(props)
{
    return <button onClick={props.logout}>LOGOUT</button>;
}
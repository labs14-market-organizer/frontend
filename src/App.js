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
import {getLocalData, setLocalData, getUserData} from "./redux/actions/userData";

/* import LandingPage from './routes/LandingPage';
import DebugRouteBobby from './DebugRouteBobby';
import DebugRouteChase from './DebugRouteChase'; */

var user_type = localStorage.getItem('userType');

class App extends React.Component {
  componentWillMount() 
  {
    this.setLocalData("token", "helloworld")
    this.props.getLocalData();
    console.log(this.state.token);
   /*  if(!token) console.log("not logged in");//force to login
    if(userData.error) userData.queryData */
  }

  componentWillUpdate()
  {
    
  }
  render() 
  {
    return (<strong>helloworld</strong>);
  }
}

const mapStateToProps = state => {
  return {
    //actions
    getLocalData, 
    setLocalData, 
    getUserData
  };
};

export default connect(
  mapStateToProps,
  { getLocalData, setLocalData, getUserData }
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
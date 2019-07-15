
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
import {setLocalData, getUserData} from "./redux/actions/userData";

import React from 'react';
import './App.scss';


import AuthenticatePage from "./routes/AuthenticatePage";
import LandingPage from "./routes/Landing";
import TokenCollect from "./routes/TokenCollect"

/* import LandingPage from './routes/LandingPage';
import DebugRouteBobby from './DebugRouteBobby';
import DebugRouteChase from './DebugRouteChase'; */

var user_type = localStorage.getItem('userType');

class App extends React.Component {
  componentWillMount() 
  {
    this.props.getUserData(); //async check on second pass
  }

  componentWillUpdate()
  {
  }
  render() 
  {
    console.log(this.props);
    let token = this.props.token;
    if(this.props.fetching) return  (<div className="App"> {"<LoadingScreen/>"} </div>)
    return (
    <div className="App">
      <AuthenticatePage signUp {...this.props}/>
      {/* <NavBar/> */}
      <Route path="/landing" component={LandingPage}/>
      <PrivateRoute exact path="/" component={LandingPage}/>
      <Route path="/auth/token" render={()=><TokenCollect {...this.props} />}/>
      <Route path="/signup" render={()=> <AuthenticatePage signUp {...this.props}/>}/>
      <Route path="/login" render={()=> <AuthenticatePage logIn {...this.props}/>}/>
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
  { //actions
    setLocalData, 
    getUserData 
  }
)(withRouter(App));

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

    // test

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
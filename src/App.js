
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
import './App.scss';


import AuthenticatePage from "./routes/AuthenticatePage";
import LandingPage from "./routes/Landing";
import TokenCollect from "./routes/TokenCollect"
import MainPage from "./routes/MainPage";
import UserList from "./routes/UserList";
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
      
      {/* <NavBar/> */}
      <Route path="/landing" component={LandingPage}/>
      <PrivateRoute exact path="/" component={MainPage} props={this.props} />
      <Route path="/auth/token" render={()=><TokenCollect {...this.props} />}/>
      <Route path="/signup" render={()=> <AuthenticatePage signUp {...this.props}/>}/>
      <Route path="/login" render={()=> <div><AuthenticatePage logIn {...this.props}/></div>}/>
      <Route path="/userslist" component={UserList} />
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

const InPrivateRoute = ({ component: Component, props: userprops, ...rest }) => {
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

const PrivateRoute = ({ component: Component,  props: userprops, ...rest }) => {
  console.log(userprops);
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          console.log(userprops);
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
    return <Redirect to="/match"/>;
}

function Protected() {
    return <Redirect to="/match"/>;
}

function LogOut(props)
{
    return <button onClick={props.logout}>LOGOUT</button>;
}
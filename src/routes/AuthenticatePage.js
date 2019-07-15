import React from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

class AuthenticatePage extends React.Component
{
  //  authenticate = (e) => {
  //    console.log(e);
  //   const authType = e.target.name;
  //   this.props.getUserData()
    
  //   axios.get("https://cloudstands-staging.herokuapp.com/auth/google").then(console.log("did it"))

  // }

  // this.props.getUserData()
    render()
    {

        return (<div>
          {/* <button onClick={this.authenticate} name="google">Google</button>
          <button onClick={this.authenticate} name="facebook">Facebook</button> */}
          {/* <Link to="//cloudstands-staging.herokuapp.com/auth/google"> */}
          <a href="https://cloudstands-staging.herokuapp.com/auth/google">
          <button  name="facebook">Facebook</button>
          </a>
          {/* </Link> */}
        </div>)
    }

    
}
/* const mapStateToProps = state => {
    return {
      //states
      ...state.checkUserData
    };
  };
  
  export default connect(
    mapStateToProps,
    { //actions
      setLocalData
     // getUserData 
    }
  )(App); */
  
export default AuthenticatePage
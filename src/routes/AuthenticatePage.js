import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

class AuthenticatePage extends React.Component
{
    render()
    {
        console.log(this.props)
        return (<div/>)
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
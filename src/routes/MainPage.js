import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

class LandingPage extends React.Component
{
    render()
    {
        return(
        <div>
          <div>Welcome Market Owner</div>
          <button onClick={()=> this.logout()}>Logout</button>
        </div>
        )
    }
    logout()
    {
        localStorage.clear();
        this.props.history.push("/");
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
  
export default LandingPage;
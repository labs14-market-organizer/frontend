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
          <div>LandingPage</div>
          <Link to="/signup">signup</Link>
          <br/>
          <Link to="/login">login</Link>
        </div>
        )
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
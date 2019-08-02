import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
  import {connect} from "react-redux";

class LandingPage extends React.Component
{
  componentWillMount()
  {
    this.props.getUserData();
  }
    render()
    {
      if(this.props.userType === "undefined") return <Redirect to="useronboarding"/>
      return this.props.userType === "Market Owner" ? <Redirect to="viewmymarket"/> : <Redirect to="searchmarkets"/>
        return(
        <div style={{paddingTop: "120px"}}>

          <div>Welcome {this.props.userType}</div>
          
        </div>
        )
    }
    logout()
    {
        localStorage.clear();
        this.props.history.push("/");
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
      //setLocalData
     // getUserData 
    }
  )(withRouter(LandingPage));
  
//export default LandingPage;


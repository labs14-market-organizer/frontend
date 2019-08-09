import React from "react";
import {
    withRouter
  } from "react-router-dom";
  import {connect} from "react-redux";
  import MarketPage from "./ViewMyMarket";
  import VendorPage from "./VendorProfile";
  import OnBoarding from "./UserOnboarding";

class LandingPage extends React.Component
{
  componentWillMount()
  {
    this.props.getUserData();
  }
    render()
    {
      if (this.props.fetching && !this.props.updated || !this.props.userData) return <div/>
      if(this.props.userType === "undefined") return <OnBoarding/>
      return this.props.userType === "Market Owner" ? <MarketPage/> : <VendorPage/>
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


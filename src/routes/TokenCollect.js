import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

class TokenCollect extends React.Component
{
  
  componentWillMount()
  {
    if(this.props.fetching)
      this.props.history.push("/")
    this.gettoken();
  }
  gettoken()
  {
    if(!this.props.location || !this.props.location.search) return this.props.history.push("/");
    console.log(this.props.location.search.split("?jwt="));
    try{ //add try so it fails gracefully
    var token = this.props.location.search.split("?jwt=")[1].split("&")[0];
    var expr = this.props.location.search.split("&exp=")[1];
    console.log(token);
    } catch { return this.props.history.push("/");}
    if(token && token.split(" ").join("") !== "" && expr && expr.split(" ").join("") !== "")
      this.props.setLocalData(token);
      //console.log("hello");
    else 
    {this.props.history.push("/")}
    console.log("error");
  }
  componentWillUpdate()
  {
    //after redux stored to local storage;
    this.fetch = false;
  }
    render()
    {
      console.log(this.props);
      if(this.props.fetching){return(<div>Loading</div>)}
      this.props.history.push("/");
      {/*nver should fire below*/}
      return <div>DONE</div>;
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
  
export default TokenCollect
import React from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
  import { Button, Box, Grid, Shadows } from '@material-ui/core';
  import '../scss/authenticationPage.scss';
  // import Box from '@material-ui/core/Box';

class AuthenticatePage extends React.Component
{
   authenticate = (e) => {
     console.log(e);
    const authType = e.target.name;
    this.props.getUserData()
    axios.get("https://cloudstands-staging.herokuapp.com/auth/google").then(console.log("did it"))

  }

  // this.props.getUserData()
    render()
    {

        return (
        <Grid container
        direction="column"
        justify="center"
        alignItems="center" >
          <h1><span className="cloud">Cloud</span> <span className="Stands">Stands</span></h1>
          <Box className="header-SignIn" display='flex'>
            
              <span className="meet-the-team"><p>Meet the Team</p></span>
            
              <Button color="deault" label="Google" onClick={this.authenticate} style={{ background: "white", Color: "white", textDecoration: "none" }} >Sign Up</Button>
              <Button color="deault" label="Google" onClick={this.authenticate} style={{ background: "white", Color: "white", textDecoration: "none" }} >Sign In</Button>
                
          </Box>
          

          <Box boxShadow={10} className='buttons' display='flex' flexDirection='column'>
              <p className="create-account">Create Account</p>
              <Button variant="contained"  label="Square" href="https://localhost:5000/auth/square" className='company-buttons' style={{backgroundColor: "white", border: "1px solid black"}}>Sign Up with Square</Button>
              <Button variant="contained" label="Google" onClick={this.authenticate} className="company-buttons" style={{backgroundColor: '#3b5998'}}>Sign Up With Facebook</Button>
              <Button variant="contained" label="Google" href="https://cloudstands-deploy.herokuapp.com/auth/google"  className="company-buttons" style={{ backgroundColor: " #d3d3d3" }} >Sign Up with Google</Button>
              
              <p className="terms-of-service">By continuing, you agree to Cloud Stands<span className="bold">Terms of Service</span> and<span className="bold">Privacy Policy</span> </p>
              <p className="have-account">Already have an account?<span style={{ color: "green" , fontWeight: "bold"}}>Sign in</span> </p>

           </Box>

        </Grid>)
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
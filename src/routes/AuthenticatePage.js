import React from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
  import { Button, Box, Grid } from '@material-ui/core';
  import '../scss/authenticationPage.scss';
  // import Box from '@material-ui/core/Box';

class AuthenticatePage extends React.Component {
    render()
    {
        return (
        <Grid container
        direction="column"
        justify="center"
        alignItems="center" >
          <h1>Cloud Stands</h1>
          <Box className="header-SignIn" display='flex'>
            
              <span className="meet-the-team"><p>Meet the Team</p></span>
            
                <p>Sign Up</p>
                <Button variant="outlined" color="white" label="Google" onClick={this.authenticate} style={{ background: "white", Color: "white", textDecoration: "none" }} >Sign In</Button>
                
          </Box>
          
          <Box className='buttons' display='flex' flexDirection='column'>
            <h1>Create Account</h1>
            <Button variant="contained" color="white" label="Google" onClick={this.authenticate} style={{ textDecoration: "none", marginTop: "5px", borderRadius: "10px",  height: "50px", color: "black", backgroundColor: "white", border: "1px solid black" }} >Sign Up with Square</Button>
              {/* using the deploy branmch here we will have to make this an env var in the future*/}
              <a href="https://cloudstands-deploy.herokuapp.com/auth/google"><Button variant="contained" color="white" label="Google" style={{ background: " #d3d3d3", textDecoration: "none", height: "30px", marginTop: "15px", borderRadius: "10px", height: "50px" }} >Sign Up with Google</Button></a>
              <Button variant="contained" color="white" label="Google" onClick={this.authenticate} style={{ background: "#3b5998", color: "white", textDecoration: "none", marginTop: "15px", borderRadius: "10px",  height: "50px"  }} >Sign Up With Facebook</Button>
              <p>By continuing, you agree to Cloud Stands Terms of Service and Privacy Policy</p>
              <p>Already have an account? Sign in</p>
           </Box>

        </Grid>)

    }

    
}

  
export default AuthenticatePage
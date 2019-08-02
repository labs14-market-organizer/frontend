import React from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
import { Button, Box, Grid, Shadows, Container } from '@material-ui/core';
import '../scss/authenticationPage.scss';
  // import Box from '@material-ui/core/Box';
import styled from "styled-components";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";

class AuthenticatePage extends React.Component
{
  //  authenticate = (e) => {
  //   const authType = e.target.name;
  //   this.props.getUserData()
  //   axios.get("https://cloudstands-staging.herokuapp.com/auth/google")

  // }

  // this.props.getUserData()

    render()
    {

        return (
        <>
          <Box className="header-SignIn" display='flex'>
            
              <span className="meet-the-team"><p>Meet the Team</p></span>
            
              <Button color="deault" label="Google" onClick={this.authenticate} style={{ background: "white", Color: "white", textDecoration: "none" }} >Sign Up</Button>
              <Button color="deault" label="Google" onClick={this.authenticate} style={{ background: "white", Color: "white", textDecoration: "none" }} >Sign In</Button>
                
          </Box>
          
          <StyledContainer>
            <StyledBox boxShadow={10} className='buttons' display='flex' flexDirection='column'>
                <p className="create-account">Create Account</p>
                {/* <Button variant="contained"  label="Square" onClick={this.authenticate} className='company-buttons' style={{backgroundColor: "white", border: "1px solid black"}}>Sign Up with Square</Button> */}
                <Link to="https://cloudstands-deploy.herokuapp.com/auth/facebook">
                  <StyledImg src={facebook}></StyledImg>
                </Link>
                <Link to="https://cloudstands-deploy.herokuapp.com/auth/google">
                  <StyledImg src={google}></StyledImg>
                </Link>
                {/* <Button variant="contained" label="Google"  href="https://cloudstands-staging.herokuapp.com/auth/facebook" className="company-buttons" style={{backgroundColor: '#3b5998'}}>Sign Up With Facebook</Button>
                <Button variant="contained" label="Google" href="https://cloudstands-deploy.herokuapp.com/auth/google"  className="company-buttons" style={{ backgroundColor: " #d3d3d3" }} >Sign Up with Google</Button>
                 */}
                <p className="terms-of-service">By continuing, you agree to Cloud Stands<span className="bold">Terms of Service</span> and <span className="bold">Privacy Policy</span> </p>
                <p className="have-account">Already have an account?<span style={{ color: "green" , fontWeight: "bold"}}>  Sign in</span> </p>
            </StyledBox>
           </StyledContainer>

        </>
        )
    }
}

const StyledContainer = styled(Container)`
  margin-top: 100px;
  max-width: 800px;
  margin-left: 3%;
`;

const StyledImg = styled.img`
  margin-top: 20px;
  width: 80%;
  @media (min-width: 600px) {
    width: 370px;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  felx-direction: column;
  text-align: center;
  min-height: 400px;
  height: auto;
`

export default AuthenticatePage
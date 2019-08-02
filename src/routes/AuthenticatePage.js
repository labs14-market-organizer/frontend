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

class AuthenticatePage extends React.Component{
    state = {
      toggle: true
    }


    signIn = (e) => {
      e.preventDefault();
      return (this.state.toggle) ? this.setState({ toggle: false }) : null
    }

    signIn = (e) => {
      e.preventDefault();
      return (!this.state.toggle) ? this.setState({ toggle: false }) : null
    }

    render()
    {

        return (
        <>
          <Box className="header-SignIn" display='flex'>
            
              <span className="meet-the-team"><p>Meet the Team</p></span>
            
              <Button color="deault" label="Google" onClick={this.authenticate} style={{ background: "white", Color: "white", textDecoration: "none" }} >Sign Up</Button>
              <Button color="deault" label="Google" onClick={this.authenticate} style={{ background: "white", Color: "white", textDecoration: "none" }} >Sign In</Button>
                
          </Box>
          <Flexing>
            {(this.state.toogle) ? <StyledP3 onClick={this.signUp}>Sign Up</StyledP3> : <StyledP4 onClick={this.signUp}>Sign Up</StyledP4>}
            {(this.state.toggle) ? <StyledP4 onClick={this.signIn}>Sign In</StyledP4> : <StyledP3 onClick={this.signIn}>Sign In</StyledP3>}
          </Flexing>
          <StyledContainer>
            <StyledBox boxShadow={10}  display='flex' flexDirection='column'>
                {(this.state.toggle) ? <StyledP>Create Account</StyledP> : <StyledP>Welcome Back</StyledP>}
      
                <Link to="https://cloudstands-deploy.herokuapp.com/auth/facebook">
                  <StyledImg src={facebook}></StyledImg>
                </Link>
                <Link to="https://cloudstands-deploy.herokuapp.com/auth/google">
                  <StyledImg src={google}></StyledImg>
                </Link>
                {/* <Button variant="contained" label="Google"  href="https://cloudstands-staging.herokuapp.com/auth/facebook" className="company-buttons" style={{backgroundColor: '#3b5998'}}>Sign Up With Facebook</Button>
                <Button variant="contained" label="Google" href="https://cloudstands-deploy.herokuapp.com/auth/google"  className="company-buttons" style={{ backgroundColor: " #d3d3d3" }} >Sign Up with Google</Button>
                 */}
                <StyledP1>By continuing, you agree to Cloud Stands<span className="bold">Terms of Service</span> and <span className="bold">Privacy Policy</span> </StyledP1>
                <StyledP2>Already have an account?<span style={{ color: "green" , fontWeight: "bold"}}>  Sign in</span> </StyledP2>
            </StyledBox>
           </StyledContainer>

        </>
        )
    }
}

const StyledContainer = styled(Container)`
  max-width: 800px;
  margin: 100px auto;
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
  margin-top: 20px;
  margin-left: 4%;
  width: 90%;
  height: 450px;
  border-radius: 15px;
`;

const StyledP = styled.p`
  font-size: 32px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
  font-family: Raleway;
  font-weight: bold;
    }
`;

const StyledP1 = styled.p`
  text-align: center;
  font-size: 14px;
  margin-left: 8%;
  margin-right: 8%;
`
const StyledP2 = styled.p`
  font-size: 14px;
  margin-left: 8%;
  margin-right: 8%;
`
const StyledP3 = styled.p`
  font-size: 18px;
  font-family: Raleway;
  font-weight: 600;
  line-height: 1.33;
  z-index: 5000;
`
const StyledP4 = styled.p`
  font-size: 18px;
  font-family: Raleway;
  font-weight: bold;
  line-height: 1.33;
  z-index: -20;
`
const Flexing = styled.p`
  display: flex;
  justify-content: space-between;
  margin-left: 25%;
  margin-right: 25%;
`

export default AuthenticatePage
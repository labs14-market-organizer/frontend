import React from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
import { Button, Box, Grid, Shadows, Container, Icon } from '@material-ui/core';
import '../scss/authenticationPage.scss';
  // import Box from '@material-ui/core/Box';
import styled from "styled-components";
import facebook from "../assets/facebook.png";
import google from "../assets/google.svg";
import Navbar from "../components/Navbar";


class AuthenticatePage extends React.Component{
    state = {
      toggle: true //displays create account //false displays welcome back.
    }

    signIn = (e) => {
      e.preventDefault();
      return (this.state.toggle) ? this.setState({ toggle: false }) : null;
    }

    signUp = (e) => {
      e.preventDefault();
      return (!this.state.toggle) ? this.setState({ toggle: true }) : null;
    }

    render(){
        return (
        <>
          <Navbar />
          {/* <Box className="header-SignIn" display='flex'>
            
              <span className="meet-the-team"><p>Meet the Team</p></span>
            
              <Button color="deault" label="Google" onClick={this.authenticate} style={{ background: "white", Color: "white", textDecoration: "none" }} >Sign Up</Button>
              <Button color="deault" label="Google" onClick={this.authenticate} style={{ background: "white", Color: "white", textDecoration: "none" }} >Sign In</Button>
                
          </Box> */}
          <MarginDiv>
          <Flexing>
            {(this.state.toggle) ? <StyledP4 onClick={this.signUp}>Sign Up</StyledP4> : <StyledP3 onClick={this.signUp}>Sign Up</StyledP3>}
            {(this.state.toggle) ? <StyledP3 onClick={this.signIn}>Sign In</StyledP3> : <StyledP4 onClick={this.signIn}>Sign In</StyledP4>}
          </Flexing>
          <StyledContainer>
            <StyledBox boxShadow={10}  display='flex' flexDirection='column'>
                {(this.state.toggle) ? <StyledP>Create Account</StyledP> : <StyledP>Welcome Back</StyledP>}
                <a href="https://cloudstands-staging.herokuapp.com/auth/facebook">
                  <StyledImg src={facebook}></StyledImg> 
                </a>
                <a href="https://cloudstands-staging.herokuapp.com/auth/google">
                  <StyledImg src={google}></StyledImg>
                </a>
               {/* <Button variant="contained" label="Google"  href="https://cloudstands-staging.herokuapp.com/auth/facebook" className="company-buttons" style={{backgroundColor: '#3b5998'}}><icon>"facebook"</icon>Sign Up With Facebook</Button> */}
                {/* <Button variant="contained" label="Google" href="https://cloudstands-deploy.herokuapp.com/auth/google"  className="company-buttons" style={{ backgroundColor: " #d3d3d3" }} >Sign Up with Google</Button>
                 */} 
                 <StyledD>
                <StyledP1>By continuing, you agree to Cloud Stands<StyledSpan> Terms of Service</StyledSpan> and <StyledSpan>Privacy Policy</StyledSpan> </StyledP1></StyledD>
             
                {(this.state.toggle) ? <StyledP2>Already have an account?<span style={{ color: "green" , fontWeight: "bold"}} onClick={this.signIn}>  Sign in</span> </StyledP2> : 
                <StyledP2>Don't have an account?<span style={{ color: "green" , fontWeight: "bold"}} onClick={this.signUp}>  Sign up</span> </StyledP2>
                }
               
            </StyledBox>
           </StyledContainer>
          </MarginDiv>
        </>
        )
    }
}

const StyledSpan = styled.span`
  font-weight: bold;
`;

const StyledContainer = styled(Container)`
  max-width: 800px;
  margin: 0 auto;
  margin-top: -10px;
`;

const StyledImg = styled.img`
  margin-top: 20px;
  width: 80%;
  @media (min-width: 500px) {
    width: 300px;
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
`;

const StyledP1 = styled.p`
  text-align: left;
  font-size: 14px;
  margin-left: 1%;
  margin-right: 1%;
`
const StyledP2 = styled.p`
  font-size: 14px;
  margin-left: 8%;
  margin-right: 8%;
`
const StyledP3 = styled.p`
  font-size: 18px;
  font-family: Raleway;
  line-height: 1.33;
`
const StyledP4 = styled.p`
  font-size: 18px;
  font-family: Raleway;
  font-weight: bold;
  line-height: 1.33;
`
const Flexing = styled.p`
  display: flex;
  justify-content: space-between;
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 60px;
  @media (min-width: 500px) {
    width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const MarginDiv = styled.div`
  padding-top: 40px;
`;

const StyledD = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10px;
  @media (min-width: 450px) {
    width: 280px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
  }
`

export default AuthenticatePage
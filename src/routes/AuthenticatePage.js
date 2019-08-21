import React from "react";
import {
    Link
  } from "react-router-dom";
import { Button, Box, Container } from '@material-ui/core';
import '../scss/authenticationPage.scss';
import styled from "styled-components";

import Navbar from "../components/Navbar";
import '../scss/authenticationPage.scss';
// import Box from '@material-ui/core/Box';
import googleIcon from "../assets/googleicon1.svg";
import icon from "../assets/cloudStands.svg"

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
          <div style={{display: "flex", justifyContent: "center", alignItems: "flex-end", paddingBottom: "20px"}}>
            <MarginDiv>
            <Flexing>
              {(this.state.toggle) ? <StyledP4 onClick={this.signUp}>Sign Up</StyledP4> : <StyledP3 onClick={this.signUp}>Sign Up</StyledP3>}
              {(this.state.toggle) ? <StyledP3 onClick={this.signIn}>Sign In</StyledP3> : <StyledP4 onClick={this.signIn}>Sign In</StyledP4>}
            </Flexing>
            <StyledContainer>
              <StyledBox boxShadow={10}  display='flex' flexDirection='column'>
                  {(this.state.toggle) ? <StyledP>Create Account</StyledP> : <StyledP>Welcome Back</StyledP>}
                 <StyledCompanyButtons variant="contained" label="Facebook"  href="https://cloudstands.herokuapp.com/auth/facebook" style={{backgroundColor: '#3b5998'}}><i class="fa fa-facebook-square" style={{color: "white", marginLeft: "0%", height: "18px", width: "16px", textAlign: "left"}} alt="facebook icon"></i><StyledSpan1>Sign In With Facebook</StyledSpan1></StyledCompanyButtons>
                 <StyledCompanyButtons variant="contained" style={{backgroundColor: 'white', color: "black"}} label="Facebook"  href="https://cloudstands.herokuapp.com/auth/google"><img src={googleIcon} style={{marginLeft: "-10px"}} alt="google icon" /><StyledSpan1>Sign In With Google</StyledSpan1></StyledCompanyButtons>
  
                   <StyledD>
                  <StyledP1>By continuing, you agree to Cloud Stands<Link to="/terms" style={{textDecoration: "none", color: "black"}}><StyledSpan> Terms of Service</StyledSpan></Link> and <Link to="/privacy" style={{textDecoration: "none", color: "black"}}><StyledSpan>Privacy Policy</StyledSpan></Link> </StyledP1></StyledD>
               
                  {(this.state.toggle) ? <StyledP2>Already have an account?<span style={{ color: "green" , fontWeight: "bold"}} onClick={this.signIn}>  Sign in</span> </StyledP2> : 
                  <StyledP2>Don't have an account?<span style={{ color: "green" , fontWeight: "bold"}} onClick={this.signUp}>  Sign up</span> </StyledP2>
                  }
                 
              </StyledBox>
             </StyledContainer>
            </MarginDiv>
            <ImageOverLay style={{zIndex: 1}}>
            <img src={icon}  />
            </ImageOverLay>
          </div>
         
        </>
        )
    }
}

const ImageOverLay = styled.div`
  margin-left: -100px;
  margin-top: 50px;
  object-fit: contain;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 8px 0 6px -6px rgba(0, 0, 0, 0.5);
  @media(max-width: 700px)
  {
    display: none
  }
  `

const StyledSpan = styled.span`
  font-weight: bold;
`;

const StyledContainer = styled(Container)`
  max-width: 800px;
  margin: 0 auto;
  margin-top: -10px;
`;

// const StyledImg = styled.img`
//   margin-top: 20px;
//   width: 80%;
//   @media (min-width: 500px) {
//     width: 300px;
//   }
// `;

const StyledBox = styled(Box)`
  display: flex;
  felx-direction: column;
  text-align: center;
  min-height: 400px;
  height: auto;
  margin-top: 20px;
  margin-left: 4%;
  width: 90%;
  height: 100%;
  max-height: 80vh;
  border-radius: 15px;
`;

const StyledP = styled.p`
  font-size: 32px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
  font-family: Raleway;
  font-weight: bold;
  @media (min-width: 400) {
    text-size: 10px;
  }
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
  margin-top: 10vw;
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
  justify-content: space-around;
  margin-top: 60px;
`;
const MarginDiv = styled.div`
  padding-top: 40px;
  width: 400px;
  max-width: 95vw
`;

const StyledD = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10px;
  
`


const StyledCompanyButtons = styled(Button)`
  margin-top: 5px;
  height: 9vh;
  width: 80%;
  margin-left: 10%;
  text-decoration: "none"; 
  margin-top: "4px";
  background-color: "white"; 
  border-radius: 10px;
  margin-bottom: 15px;
  color: white;
  text-transform: capitalize;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  font-family: Roboto;
  @media (min-width: 340px) {
    font-size: 15px;
  }
  @media (min-width: 360px) {
    font-size: 17px;
  }
  @media (min-width: 400px) {
    font-size: 19px;
    margin: 10px auto;
  }


`
const StyledSpan1 = styled.span`
  marginL-left: 100px;
  @media (min-width: 400) {
    text-size: 5px;
  }
`

export default AuthenticatePage
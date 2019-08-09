import React from "react";
import {
  Button,
  Box,
  Grid,
  ButtonBase,
  Typography,
  Container,
  CssBaseline,
  Paper
} from "@material-ui/core";
import {Link} from "react-router-dom";
import cloud from "../assets/cloud.svg";
import { ThemeProvider } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { createMuiTheme } from "@material-ui/core/styles";
import styled from "styled-components";
import { connect } from "react-redux";
import NavMarket from "./NavbarMarket";
import NavVendor from "./NavbarVendor";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      page: "HOME",
      usertype: this.props.checkUserData.usertype
      }
  }


 toggle = () => {
  if (this.state.menuOpen === true) {
    this.setState({
      menuOpen: false,
    })
  } else {
    this.setState({
      menuOpen: true
    })
  }
}

 Menu = () => {
  if (this.state.menuOpen === true) {
    switch(window.location.pathname) {
      case "/landing":
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li><Link to="landing"> <Button className="currentPage" >Home</Button></Link></li>
          <li><Link to="signup"> <Button>Sign Up / Sign In</Button></Link></li>
          <li><Link to="team"><Button>Meet the Team</Button></Link></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
            <li><Button>About</Button></li>
            <li><Button>Blog</Button></li>
            <li><Button>Careers</Button></li>
            <li><Button>Support</Button></li>
            <li><Button>Contact Us</Button></li>
            <li><Link to="privacy"><Button>Privacy Policy</Button></Link></li>
            <li><Link to="terms"><Button>Terms of Service</Button></Link></li>
          </ul>
        </StyledPaper> 
      );

      case "/signup": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li><Link to="landing"><Button>Home</Button></Link></li>
          <li><Link to="signup"><Button className="currentPage">Sign Up / Sign In</Button></Link></li>
          <li><Link to="team"><Button>Meet the Team</Button></Link></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
            <li><Button>About</Button></li>
            <li><Button>Blog</Button></li>
            <li><Button>Careers</Button></li>
            <li><Button>Support</Button></li>
            <li><Button>Contact Us</Button></li>
            <li><Link to="privacy"><Button>Privacy Policy</Button></Link></li>
            <li><Link to="terms"><Button>Terms of Service</Button></Link></li>
          </ul>
        </StyledPaper>
      );

      case "/signin": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li><Link to="landing"><Button>Home</Button></Link></li>
          <li><Link to="signup"><Button className="currentPage">Sign Up / Sign In</Button></Link></li>
          <li><Link to="team"><Button>Meet the Team</Button></Link></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
            <li><Button>About</Button></li>
            <li><Button>Blog</Button></li>
            <li><Button>Careers</Button></li>
            <li><Button>Support</Button></li>
            <li><Button>Contact Us</Button></li>
            <li><Link to="privacy"><Button>Privacy Policy</Button></Link></li>
            <li><Link to="terms"><Button>Terms of Service</Button></Link></li>
          </ul>
        </StyledPaper>
      );

      case "/team": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li><Link to="/landing"><Button>Home</Button></Link></li>
          <li><Link to="/signup"><Button >Sign Up / Sign In</Button></Link></li>
          <li><Link to="/team"><Button className="currentPage">Meet the Team</Button></Link></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
            <li><Button>About</Button></li>
            <li><Button>Blog</Button></li>
            <li><Button>Careers</Button></li>
            <li><Button>Support</Button></li>
            <li><Button>Contact Us</Button></li>
            <li><Link to="privacy"><Button>Privacy Policy</Button></Link></li>
            <li><Link to="terms"><Button>Terms of Service</Button></Link></li>
          </ul>
        </StyledPaper>  
      );

      case "ABOUT": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li><Link to="/landing"><Button>Home</Button></Link></li>
          <li><Link to="/signup"><Button >Sign Up / Sign In</Button></Link></li>
          <li><Link to="/team"><Button className="currentPage">Meet the Team</Button></Link></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
            <li><Button className="currentPage">About</Button></li>
            <li><Button>Blog</Button></li>
            <li><Button>Careers</Button></li>
            <li><Button>Support</Button></li>
            <li><Button>Contact Us</Button></li>
            <li><Link to="privacy"><Button>Privacy Policy</Button></Link></li>
            <li><Link to="terms"><Button>Terms of Service</Button></Link></li>
          </ul>
        </StyledPaper>
      );

      case "BLOG": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li><Link to="/landing"><Button>Home</Button></Link></li>
          <li><Link to="/signup"><Button >Sign Up / Sign In</Button></Link></li>
          <li><Link to="/team"><Button className="currentPage">Meet the Team</Button></Link></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
            <li><Button>About</Button></li>
            <li><Button className="currentPage">Blog</Button></li>
            <li><Button>Careers</Button></li>
            <li><Button>Support</Button></li>
            <li><Button>Contact Us</Button></li>
            <li><Link to="privacy"><Button>Privacy Policy</Button></Link></li>
            <li><Link to="terms"><Button>Terms of Service</Button></Link></li>
          </ul>
        </StyledPaper>
      );

      case "CAREERS": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li><Link to="/landing"><Button>Home</Button></Link></li>
          <li><Link to="/signup"><Button >Sign Up / Sign In</Button></Link></li>
          <li><Link to="/team"><Button className="currentPage">Meet the Team</Button></Link></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
            <li><Button>About</Button></li>
            <li><Button>Blog</Button></li>
            <li><Button className="currentPage">Careers</Button></li>
            <li><Button>Support</Button></li>
            <li><Button>Contact Us</Button></li>
            <li><Link to="privacy"><Button>Privacy Policy</Button></Link></li>
            <li><Link to="terms"><Button>Terms of Service</Button></Link></li>
          </ul>
        </StyledPaper>
      );

      case "SUPPORT": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li><Link to="/landing"><Button>Home</Button></Link></li>
          <li><Link to="/signup"><Button >Sign Up / Sign In</Button></Link></li>
          <li><Link to="/team"><Button className="currentPage">Meet the Team</Button></Link></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
            <li><Button>About</Button></li>
            <li><Button>Blog</Button></li>
            <li><Button>Careers</Button></li>
            <li><Button className="currentPage">Support</Button></li>
            <li><Button>Contact Us</Button></li>
            <li><Link to="privacy"><Button>Privacy Policy</Button></Link></li>
            <li><Link to="terms"><Button>Terms of Service</Button></Link></li>
          </ul>
        </StyledPaper>
      );

      case "CONTACT": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li><Link to="/landing"><Button>Home</Button></Link></li>
          <li><Link to="/signup"><Button >Sign Up / Sign In</Button></Link></li>
          <li><Link to="/team"><Button className="currentPage">Meet the Team</Button></Link></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
            <li><Button>About</Button></li>
            <li><Button>Blog</Button></li>
            <li><Button>Careers</Button></li>
            <li><Button>Support</Button></li>
            <li><Button className="currentPage">Contact Us</Button></li>
            <li><Link to="privacy"><Button>Privacy Policy</Button></Link></li>
            <li><Link to="terms"><Button>Terms of Service</Button></Link></li>
          </ul>
        </StyledPaper>
      );

      case "/privacy": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li><Link to="/landing"><Button>Home</Button></Link></li>
          <li><Link to="/signup"><Button >Sign Up / Sign In</Button></Link></li>
          <li><Link to="/team"><Button className="currentPage">Meet the Team</Button></Link></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
            <li><Button>About</Button></li>
            <li><Button>Blog</Button></li>
            <li><Button>Careers</Button></li>
            <li><Button>Support</Button></li>
            <li><Button>Contact Us</Button></li>
            <li><Link to="privacy"><Button className="currentPage">Privacy Policy</Button></Link></li>
            <li><Link to="terms"><Button>Terms of Service</Button></Link></li>
          </ul>
        </StyledPaper>
      );

      case "/terms": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li><Link to="/landing"><Button>Home</Button></Link></li>
          <li><Link to="/signup"><Button >Sign Up / Sign In</Button></Link></li>
          <li><Link to="/team"><Button className="currentPage">Meet the Team</Button></Link></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
            <li><Button>About</Button></li>
            <li><Button>Blog</Button></li>
            <li><Button>Careers</Button></li>
            <li><Button>Support</Button></li>
            <li><Button>Contact Us</Button></li>
            <li><Link to="privacy"><Button>Privacy Policy</Button></Link></li>
            <li><Link to="terms"><Button className="currentPage">Terms of Service</Button></Link></li>
          </ul>
        </StyledPaper>
      );
    }
    }
  } 
  
  
  render() { 
    let usertype = this.props.checkUserData.userType;
    let userName = this.props.checkUserData.userData ? this.props.checkUserData.userData.email : null;
    let objName = usertype === "Market Owner" ? this.props.checkMarketData.marketData.name : usertype === "Vendor" ? this.props.checkVendorData.vendorData.name : null;
    console.log(userName);
      
        
         
    if(usertype === "Market Owner")
      return <NavMarket userName={userName} marketName={objName}/>
    else if (usertype === "Vendor")
        return <NavVendor name={userName} vendorName={objName}/>
    return(
      <StyledDiv>
        <StyledImg src={cloud} width="100%" height="87px" />
          <StyledBox>
            <MenuIcon style={{pointerEvents: "auto"}} onClick={this.toggle} className="menuIcon" fontSize="large"/>
            <div style={{pointerEvents: "auto"}}>{this.Menu()}</div>
            <CloudText>CLOUD</CloudText>
            <StandsText>STANDS</StandsText>
            </StyledBox>
        </StyledDiv>
    )
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, {/* actions */})(Navbar);
      
const CloudText = styled(({ variant, ...otherProps}) => <Typography variant="h3" {...otherProps} />)`
    font-family: "Luckiest Guy";
    color: #7f817e;
    margin-right: 8px;
    @media (max-width: 410px) {
      font-size: 40px;
    }
    @media (max-width: 390px) {
      font-size: 40px; 
    }

    @media (max-width: 350px) {
      font-size: 30px;  
    }
`;

const StandsText = styled(({ variant, ...otherProps}) => <Typography variant="h3" {...otherProps} />)`
    font-family: "Raleway Dots";
    color: black;
    @media (max-width: 410px) {
      font-size: 40px;
    }
    @media (max-width: 390px) {
      font-size: 38px;
    }
    @media (max-width: 350px) {
      font-size: 30px;
    }
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  top: 0;
  margin-top: 2px;
  align-items: center;
  .menuIcon {
    padding: 0 16px;
    :hover {
      cursor: pointer;
    }
  }
`;

const BorderSpacer = styled.div`
margin-top: 16px;
margin-bottom: 16px;
margin-left: 16px;
margin-right: 26px;
height: 1px;
background-color: #484848;
`

const StyledImg = styled.img`
z-index: -100;
`

const StyledDiv = styled.div`
position: fixed;
z-index: 5000;
pointer-events: none;

img {
  margin-top: -25px;
  height: 140px;
  width: 100vw;
  opacity: .985;
  filter: blur(1px);
}

`

const StyledPaper = styled(Paper)`
/* background-color: black; */
height: 600px;
width: 80%;
z-index: -1;
position: absolute;
left: 0;
top: 0;
border-radius: 10px 10px 10px 0px;
text-align: left;
padding-top: 112px;
max-height: 99.8vh;
overflow-y: hidden;
overflow-x: hidden;

ul {
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin-left: 16px;
  margin-right: -16px;
}

 a {
  text-decoration: none;
  width: 100%;

   
 }

li:first-child {
  margin-top: 12.5px;
}

li {
  display: flex;
  align-items: center;
  width: 100%;
  list-style: none;
  font-family: "Raleway";
  font-weight: normal;
  font-size: 16px;
  height: 40px;
  border-radius: 5px; 
  padding-top: 0px;
  line-height: 1.5;
  margin-left: -41px;
  margin-bottom: 1px;
}
Button {
  display: flex;
  border-radius: 5px;
  justify-content: flex-start;
  width: 100%;
  text-align: left;
  text-transform: capitalize; 
  height: 36px;

  .MuiButton-root {
  display: flex;
  align-items: center;
  text-align: center
  }
}

.currentPage {
  background-color: rgba(71, 133, 41, 0.4);

  :hover {
    background-color: rgba(71, 133, 41, 0.5);
  }

}
`


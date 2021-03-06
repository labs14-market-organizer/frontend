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
import desktopCloud from "../assets/desktopNavCloud.svg";
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
            <li><Button className="inactive">About</Button></li>
            <li><Button className="inactive">Blog</Button></li>
            <li><Button className="inactive">Careers</Button></li>
            <li><Button className="inactive">Support</Button></li>
            <li><Button className="inactive">Contact Us</Button></li>
            <li><Link to="privacy"><Button>Privacy Policy</Button></Link></li>
            <li><Link to="terms"><Button>Terms of Service</Button></Link></li>
          </ul>
        </StyledPaper> 
      );
      case "/":
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li><Link to="landing"> <Button>Home</Button></Link></li>
          <li><Link to="signup"> <Button>Sign Up / Sign In</Button></Link></li>
          <li><Link to="team"><Button>Meet the Team</Button></Link></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
          <li><Button className="inactive">About</Button></li>
            <li><Button className="inactive">Blog</Button></li>
            <li><Button className="inactive">Careers</Button></li>
            <li><Button className="inactive">Support</Button></li>
            <li><Button className="inactive">Contact Us</Button></li>
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
          <li><Button className="inactive">About</Button></li>
            <li><Button className="inactive">Blog</Button></li>
            <li><Button className="inactive">Careers</Button></li>
            <li><Button className="inactive">Support</Button></li>
            <li><Button className="inactive">Contact Us</Button></li>
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
          <li><Button className="inactive">About</Button></li>
            <li><Button className="inactive">Blog</Button></li>
            <li><Button className="inactive">Careers</Button></li>
            <li><Button className="inactive">Support</Button></li>
            <li><Button className="inactive">Contact Us</Button></li>
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
          <li><Button className="inactive">About</Button></li>
            <li><Button className="inactive">Blog</Button></li>
            <li><Button className="inactive">Careers</Button></li>
            <li><Button className="inactive">Support</Button></li>
            <li><Button className="inactive">Contact Us</Button></li>
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
          <li><Link to="landing"><Button>Home</Button></Link></li>
          <li><Link to="signup"><Button >Sign Up / Sign In</Button></Link></li>
          <li><Link to="team"><Button>Meet the Team</Button></Link></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
          <li><Button className="inactive">About</Button></li>
            <li><Button className="inactive">Blog</Button></li>
            <li><Button className="inactive">Careers</Button></li>
            <li><Button className="inactive">Support</Button></li>
            <li><Button className="inactive">Contact Us</Button></li>
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
          <li><Link to="landing"><Button>Home</Button></Link></li>
          <li><Link to="signup"><Button >Sign Up / Sign In</Button></Link></li>
          <li><Link to="team"><Button>Meet the Team</Button></Link></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
          <li><Button className="inactive">About</Button></li>
            <li><Button className="inactive">Blog</Button></li>
            <li><Button className="inactive">Careers</Button></li>
            <li><Button className="inactive">Support</Button></li>
            <li><Button className="inactive">Contact Us</Button></li>
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
      
        
         
    if(usertype === "Market Owner")
      return <NavMarket userName={userName} marketName={objName}/>
    else if (usertype === "Vendor")
        return <NavVendor name={userName} vendorName={objName}/>
    return(
      <StyledDiv>
        <StyledImg className="mobile" src={cloud} width="100%" height="87px" />
        <StyledImg className="desktop" src={desktopCloud} width="100%" height="110px" />
          <StyledDiv2> 
          <StyledBox>
            <MenuIcon style={{pointerEvents: "auto"}} onClick={this.toggle} className="menuIcon" fontSize="large"/>
            <div>{this.Menu()}</div>
            <StyledLink to="/landing"> 
            <CloudText>CLOUD</CloudText>
            
            <StandsText>STANDS</StandsText>
            </StyledLink>
            </StyledBox>
            <StyledNav> 
            <Link to="/team">Meet the Team</Link>
            <Link to={{pathname: "/signup", state: {toggle: false} } } onClick={this.props.signIn}>Sign in</Link>
            <Link to={{pathname: "/signup", state: {toggle: true} }} onClick={this.props.signUp} ><Button variant="outlined" color="primary">Sign up </Button></Link>
            </StyledNav>
            </StyledDiv2>

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

// margin instead of padding to fix link bug
const padding = props => `
@media(min-width: 920px) {
  margin-left: 40px;

}



@media(min-width: 1100px) {
margin-left: 90px;

}

@media(min-width: 1300px) {
margin-left: 120px;

}
`;

const CloudText = styled(({ variant, ...otherProps}) => <Typography variant="h3" {...otherProps} />)`
    font-family: "Luckiest Guy";
    color: #7f817e;
    margin-right: 8px;
    line-height: 1.3;
    

    @media (max-width: 440px) {
      font-size: 40px;
    }
    @media (max-width: 390px) {
      font-size: 40px; 
    }

    @media (max-width: 350px) {
      font-size: 30px;  
    }



`;

const StandsText = styled(({ variant, ...otherProps}) => <Typography fontWeight={200} variant="h3" {...otherProps} />)`
    font-family: "Raleway";
    font-weight: 200;
    color: black;
    line-height: 1.3;

    @media   (min-resolution: 200dpi) {
      line-height: 1.2;
    } 
    @media (max-width: 440px) {
      font-size: 40px;
    }
    @media (max-width: 390px) {
      font-size: 38px;
    }
    @media (max-width: 350px) {
      font-size: 30px;
    }

    


`;

const StyledLink = styled(Link)`
@media (min-width: 692px) {
  margin-left: 28px;
}

${padding}
` 
const StyledDiv2 = styled.div`
display: flex;
justify-content: space-between;
position: absolute;
width: 100vw;
top: 0;

`

const StyledBox = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  /* position: absolute; */
  /* top: 0; */
  margin-top: 6px;
  -webkit-align-items:center;
  a {
    display: flex;
    text-decoration: none;
  }
  
  div {
    @media (min-width: 692px) {
      display: none;
    }
  }
  .menuIcon {
    padding: 0 16px;
    pointer-events: auto;
    @media (min-width: 692px) {
      display: none;
    }
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
z-index: -1;


`

const StyledDiv = styled.div`
position: fixed;
z-index: 10;
pointer-events: none;
display: flex;
flex-wrap: nowrap;

div {
  pointer-events: auto;
}

div {
  pointer-events: auto;
}

img {
  margin-top: -25px;
  height: 140px;
  width: 100vw;
  opacity: .985;
  filter: blur(1px);
  
}
.mobile {
  @media (min-width: 692px) {

  display: none;
  }
}
.desktop {
  height: 165px;
  display: none;
  width: 1440px;
  @media (min-width: 692px) {

display: inherit;
}
@media (min-width: 1440px) {
width: 1920px;

}
@media (min-width: 1890px) {
width: 2560px;
}
@media (min-width: 2561px) {
width: 3200px;
}

}

`

const StyledPaper = styled(Paper)`
/* background-color: black; */
height: 600px;
width: 80%;
z-index: -2;
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

.inactive {
 
 color: lightgrey;
}

`
const StyledNav = styled.div`
  display: none;
  @media (min-width: 692px) {
  display: flex;
  align-items: center;
  /* position: absolute; */
  /* right: 600px; */
  /* top: 10px; */
  z-index: 60000;
  /* margin-right: 0px; */
  }
  



  
a {
margin-right: 32px;
  text-decoration: none;
  color: black;
  font-family: "raleway";
  font-weight: 600;
  font-size: 18px;

}

.MuiButton-root {
  font-family: "raleway";
  font-weight: 600;
  border-radius: 10px;
  text-transform: capitalize;
  font-size: 18px;
  margin-right: 120px;

}
@media (max-width: 918px) {
a{

font-size: 16px;
margin-right: 16px;
}
.MuiButton-root {
  margin-right: 2px;
  font-size: 16px
}
}

.MuiButton-root {
  margin-right: 2px;
  font-size: 16px
}
`


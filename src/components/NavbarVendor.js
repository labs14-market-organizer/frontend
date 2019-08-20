import React from "react";
import {
  Button,
  Box,
  Grid,
  ButtonBase,
  Typography,
  Container,
  CssBaseline,
  Paper,
  Avatar
} from "@material-ui/core";
import {Link} from "react-router-dom";
import cloud from "../assets/cloud.svg";
import avatar from "../assets/avatar.jpg";
import { ThemeProvider } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { createMuiTheme } from "@material-ui/core/styles";
import styled from "styled-components";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      page: "HOME",
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
      case "/searchmarkets":
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li className="avatar-wrapper"><div></div>
          </li>
          <li className="username">{this.props.userName}</li>
          <li><Typography variant="caption">{this.props.marketName}</Typography></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
            <li><Link to="/searchmarkets"><Button className="currentPage">Home</Button></Link></li>
            <li><Link to="/vendorprofile"><Button>Vendor Profile</Button></Link></li>
            <li><Button>Market History</Button></li>
            <li><Button>Payment Methods</Button></li>
            <li><Button>Account Settings</Button></li>
            <li><Button>FAQ</Button></li> 
            <li><Button>Contact Us</Button></li> 
            <li className="bottom-padding"><Button>Sign Out</Button></li> 
          </ul>
        </StyledPaper> 
      );
      case "/":
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li className="avatar-wrapper"><div></div>
          </li>
          <li className="username">{this.props.userName}</li>
          <li><Typography variant="caption">{this.props.marketName}</Typography></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
            <li><Link to="/searchmarkets"><Button className="currentPage">Home</Button></Link></li>
            <li><Link to="/vendorprofile"><Button>Vendor Profile</Button></Link></li>
            <li><Button>Market History</Button></li>
            <li><Button>Payment Methods</Button></li>
            <li><Button>Account Settings</Button></li>
            <li><Button>FAQ</Button></li> 
            <li><Button>Contact Us</Button></li> 
            <li className="bottom-padding"><Button>Sign Out</Button></li> 
          </ul>
        </StyledPaper> 
      );


      case "/vendorprofile": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li className="avatar-wrapper"><div></div>
          </li>
          <li className="username">{this.props.userName}</li>
          <li><Typography variant="caption">{this.props.marketName}</Typography></li>
          </ul>
          </div>
      <BorderSpacer />
      <ul>
            <li><Link to="/searchmarkets"><Button>Home</Button></Link></li>
            <li><Link to="/vendorprofile"><Button className="currentPage">Vendor Profile</Button></Link></li>
            <li><Button>Market History</Button></li>
            <li><Button>Payment Methods</Button></li>
            <li><Button>Account Settings</Button></li>
            <li><Button>FAQ</Button></li> 
            <li><Button>Contact Us</Button></li> 
            <li className="bottom-padding"><Button onClick={localStorage.clear()}>Sign Out</Button></li> 
          </ul>
        </StyledPaper>
      );

      case "/signin": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>

          <li className="avatar-wrapper"><div></div>
          </li>
          <li className="username">{this.props.userName}</li>
          <li><Typography variant="caption">{this.props.marketName}</Typography></li>
          </ul>
          </div>
      <BorderSpacer />
      <ul>
            <li><Link to="/searchmarkets"><Button>Home</Button></Link></li>
            <li><Link to="/vendorprofile"><Button>Vendor Profile</Button></Link></li>
            <li><Button>Market History</Button></li>
            <li><Button>Payment Methods</Button></li>
            <li><Button>Account Settings</Button></li>
            <li><Button>FAQ</Button></li> 
            <li><Button>Contact Us</Button></li> 
            <li className="bottom-padding"><Button>Sign Out</Button></li> 
          </ul>
        </StyledPaper>
      );

      case "/team": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li className="avatar-wrapper"><div></div>
          </li>
          <li className="username">{this.props.userName}</li>
          <li><Typography variant="caption">{this.props.marketName}</Typography></li>
          </ul>
          </div>
      <BorderSpacer />
      <ul>
            <li><Link to="/searchmarkets"><Button>Home</Button></Link></li>
            <li><Link to="/vendorprofile"><Button>Vendor Profile</Button></Link></li>
            <li><Button>Market History</Button></li>
            <li><Button>Payment Methods</Button></li>
            <li><Button>Account Settings</Button></li>
            <li><Button>FAQ</Button></li> 
            <li><Button>Contact Us</Button></li> 
            <li className="bottom-padding"><Button>Sign Out</Button></li> 
          </ul>
        </StyledPaper>  
      );

      case "ABOUT": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li className="avatar-wrapper"><div></div>
          </li>
          <li className="username">{this.props.userName}</li>
          <li><Typography variant="caption">{this.props.marketName}</Typography></li>
          </ul>
          </div>
      <BorderSpacer />
      <ul>
            <li><Link to="/searchmarkets"><Button>Home</Button></Link></li>
            <li><Link to="/vendorprofile"><Button>Vendor Profile</Button></Link></li>
            <li><Button>Market History</Button></li>
            <li><Button>Payment Methods</Button></li>
            <li><Button>Account Settings</Button></li>
            <li><Button>FAQ</Button></li> 
            <li><Button>Contact Us</Button></li> 
            <li className="bottom-padding"><Button>Sign Out</Button></li> 
          </ul>
        </StyledPaper>
      );

      case "BLOG": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li className="avatar-wrapper"><div></div>
          </li>
          <li className="username">{this.props.userName}</li>
          <li><Typography variant="caption">{this.props.marketName}</Typography></li>
          </ul>
          </div>
      <BorderSpacer />
      <ul>
            <li><Link to="/searchmarkets"><Button>Home</Button></Link></li>
            <li><Link to="/vendorprofile"><Button>Vendor Profile</Button></Link></li>
            <li><Button>Market History</Button></li>
            <li><Button>Payment Methods</Button></li>
            <li><Button>Account Settings</Button></li>
            <li><Button>FAQ</Button></li> 
            <li><Button>Contact Us</Button></li> 
            <li className="bottom-padding"><Button>Sign Out</Button></li> 
          </ul>
        </StyledPaper>
      );

      case "CAREERS": 
        return (
          <StyledPaper elevation={10}>
           <div>
          <ul>
          <li className="avatar-wrapper"><div></div>
          </li>
          <li className="username">{this.props.userName}</li>
          <li><Typography variant="caption">{this.props.marketName}</Typography></li>
          </ul>
          </div>
      <BorderSpacer />
      <ul>
            <li><Link to="/searchmarkets"><Button>Home</Button></Link></li>
            <li><Link to="/vendorprofile"><Button>Vendor Profile</Button></Link></li>
            <li><Button>Market History</Button></li>
            <li><Button>Payment Methods</Button></li>
            <li><Button>Account Settings</Button></li>
            <li><Button>FAQ</Button></li> 
            <li><Button>Contact Us</Button></li> 
            <li className="bottom-padding"><Button>Sign Out</Button></li> 
          </ul>
        </StyledPaper>
      );

      case "SUPPORT": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li className="avatar-wrapper"><div></div>
          </li>
          <li className="username">{this.props.userName}</li>
          <li><Typography variant="caption">{this.props.marketName}</Typography></li>
          </ul>
          </div>
      <BorderSpacer />
      <ul>
            <li><Link to="/searchmarkets"><Button>Home</Button></Link></li>
            <li><Link to="/vendorprofile"><Button>Vendor Profile</Button></Link></li>
            <li><Button>Market History</Button></li>
            <li><Button>Payment Methods</Button></li>
            <li><Button>Account Settings</Button></li>
            <li><Button>FAQ</Button></li> 
            <li><Button>Contact Us</Button></li> 
            <li className="bottom-padding"><Button>Sign Out</Button></li> 
          </ul>
        </StyledPaper>
      );

      case "CONTACT": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li className="avatar-wrapper"><div></div>
          </li>
          <li className="username">{this.props.userName}</li>
          <li><Typography variant="caption">{this.props.marketName}</Typography></li>
          </ul>
          </div>
      <BorderSpacer />
      <ul>
            <li><Link to="/searchmarkets"><Button>Home</Button></Link></li>
            <li><Link to="/vendorprofile"><Button>Vendor Profile</Button></Link></li>
            <li><Button>Market History</Button></li>
            <li><Button>Payment Methods</Button></li>
            <li><Button>Account Settings</Button></li>
            <li><Button>FAQ</Button></li> 
            <li><Button>Contact Us</Button></li> 
            <li className="bottom-padding"><Button>Sign Out</Button></li> 
          </ul>
        </StyledPaper>
      );

      case "PRIVACY": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li className="avatar-wrapper"><div></div>
          </li>
          <li className="username">{this.props.userName}</li>
          <li><Typography variant="caption">{this.props.marketName}</Typography></li>
          </ul>
          </div>
      <BorderSpacer />
      <ul>
            <li><Link to="/searchmarkets"><Button>Home</Button></Link></li>
            <li><Link to="/vendorprofile"><Button>Vendor Profile</Button></Link></li>
            <li><Button>Market History</Button></li>
            <li><Button>Payment Methods</Button></li>
            <li><Button>Account Settings</Button></li>
            <li><Button>FAQ</Button></li> 
            <li><Button>Contact Us</Button></li> 
            <li className="bottom-padding"><Button>Sign Out</Button></li> 
          </ul>
        </StyledPaper>
      );

      case "TERMS": 
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li className="avatar-wrapper"><div></div>
          </li>
          <li className="username">{this.props.userName}</li>
          <li><Typography variant="caption">{this.props.marketName}</Typography></li>
          </ul>
          </div>
      <BorderSpacer />
      <ul>
            <li><Link to="/searchmarkets"><Button>Home</Button></Link></li>
            <li><Link to="/vendorprofile"><Button>Vendor Profile</Button></Link></li>
            <li><Button>Market History</Button></li>
            <li><Button>Payment Methods</Button></li>
            <li><Button>Account Settings</Button></li>
            <li><Button>FAQ</Button></li> 
            <li><Button>Contact Us</Button></li> 
            <li className="bottom-padding"><Button>Sign Out</Button></li> 
          </ul>
        </StyledPaper>
      );
    }
    }
  } 
  
  
  render() { 
    return ( 
      <StyledDiv>
        <StyledImg src={cloud}  width="100%" height="87px" />
        <StyledBox>
          <MenuIcon onClick={this.toggle} className="menuIcon" fontSize="large"/>
          {this.Menu()}      
          <CloudText>CLOUD</CloudText>
          <StandsText>STANDS</StandsText>
        </StyledBox>
      </StyledDiv>
     );
  }
}
 
export default Navbar;
      
const CloudText = styled(({ variant, ...otherProps}) => <Typography variant="h3" {...otherProps} />)`
    font-family: "Luckiest Guy";
    color: #7f817e;
    margin-right: 8px;
    @media   (min-resolution: 200dpi) {
      margin-top: 8px;
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
    @media (max-width: 390px) {
      font-size: 40px;
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
    pointer-events: auto;
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
z-index: -100
`

const StyledDiv = styled.div`
position: fixed;
z-index: 10;
pointer-events: none;
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
min-width:
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
  .MuiTypography-caption {
    color: #478529;
    font-size: 14px;
    line-height: 1.71;
    margin-top: -24px;

  }
}

  .avatar-wrapper {
    height: 60px;
    width: 60px;
    border-radius: 100%;
    overflow: hidden;

    div {
    /* background-color: red; */
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${avatar});
  }
}
.username {
  font-family: "Raleway";
  font-size: 16px;
  font-weight: bold;
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

ul{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.currentPage {
  background-color: rgba(71, 133, 41, 0.4);
  /* border: 2px solid red; */
{padding}
  :hover {
    background-color: rgba(71, 133, 41, 0.5);
  }
  

}
.bottom-padding {
  padding-top: 48px;
}
`


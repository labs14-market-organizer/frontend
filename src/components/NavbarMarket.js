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
import desktopCloud from "../assets/desktopNavCloud.svg";
import avatar from "../assets/apple.svg";
import avatar2 from "../assets/carrot.png";
import { ThemeProvider } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { createMuiTheme } from "@material-ui/core/styles";
import styled from "styled-components";
import { connect } from "react-redux";

class NavbarMarket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      page: "HOME"
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
  console.log(this.props.user.userType);
  let usertype = this.props.user.userType;
  let avySwitch = usertype === "Market Owner" ? "marketOwner" : usertype === "Vendor" ? "vendor" : null;
  if (this.state.menuOpen === true) {
    switch(window.location.pathname) {
      case "/":
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li className="avatar-wrapper"><div className={avySwitch}></div>
          </li>
          <li className="username">{this.props.user.userData.email}</li>
          <li><Typography variant="caption">{this.props.user.userData.markets[0].name}</Typography></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
            <li><Link to="/"><Button className="currentPage">Home</Button></Link></li>
            <li><Link to="/viewmymarket"> <Button >Market Profile</Button></Link></li>
            <li><Button>Payment Methods</Button></li>
            <li><Button>Account Settings</Button></li>
            <li><Button>FAQ</Button></li>
            <li><Button>Contact Us</Button></li> 
            <li className="bottom-padding"><a href="/"><Button onClick={()=> localStorage.clear()}>Sign Out</Button></a></li> 
          </ul>
        </StyledPaper> 
      );

      case "/landing":
        return (
          <StyledPaper elevation={10}>
          <div>
          <ul>
          <li className="avatar-wrapper"><div className={avySwitch}></div>
          </li>
          <li className="username">{this.props.userName}</li>
          <li><Typography variant="caption">{this.props.marketName}</Typography></li>
          </ul>
          </div>
      <BorderSpacer />
          <ul>
            <li><Link to="/"><Button>Home</Button></Link></li>
           <li><Link to="/viewmymarket"> <Button >Market Profile</Button></Link></li>
            <li><Button>Payment Methods</Button></li>
            <li><Button>Account Settings</Button></li>
            <li><Button>FAQ</Button></li>
            <li><Button>Contact Us</Button></li> 
            <li className="bottom-padding"><a href="/"><Button onClick={()=> localStorage.clear()}>Sign Out</Button></a></li> 
          </ul>
        </StyledPaper> 
      );

     
      case "/team": 
      return (
        <StyledPaper elevation={10}>
        <div>
        <ul>
        <li className="avatar-wrapper"><div className={avySwitch}></div>
        </li>
        <li className="username">{this.props.userName}</li>
        <li><Typography variant="caption">{this.props.marketName}</Typography></li>
        </ul>
        </div>
    <BorderSpacer />
        <ul>
          <li><Link to="/"><Button>Home</Button></Link></li>
         <li><Link to="/viewmymarket"> <Button >Market Profile</Button></Link></li>
          <li><Button>Payment Methods</Button></li>
          <li><Button>Account Settings</Button></li>
          <li><Button>FAQ</Button></li>
          <li><Button>Contact Us</Button></li> 
          <li className="bottom-padding"><a href="/"><Button onClick={()=> localStorage.clear()}>Sign Out</Button></a></li>        
           </ul>
      </StyledPaper> 
    );


      case "/privacy": 
      return (
        <StyledPaper elevation={10}>
        <div>
        <ul>
        <li className="avatar-wrapper"><div className={avySwitch}></div>
        </li>
        <li className="username">{this.props.userName}</li>
        <li><Typography variant="caption">{this.props.marketName}</Typography></li>
        </ul>
        </div>
    <BorderSpacer />
        <ul>
          <li><Link to="/"><Button>Home</Button></Link></li>
         <li><Link to="/viewmymarket"> <Button >Market Profile</Button></Link></li>
          <li><Button>Payment Methods</Button></li>
          <li><Button>Account Settings</Button></li>
          <li><Button>FAQ</Button></li>
          <li><Button>Contact Us</Button></li> 
          <li className="bottom-padding"><a href="/"><Button onClick={()=> localStorage.clear()}>Sign Out</Button></a></li> 
        </ul>
      </StyledPaper> 
    );

    case "/terms": 
    return (
      <StyledPaper elevation={10}>
      <div>
      <ul>
      <li className="avatar-wrapper"><div className={avySwitch}></div>
      </li>
      <li className="username">{this.props.userName}</li>
      <li><Typography variant="caption">{this.props.marketName}</Typography></li>
      </ul>
      </div>
  <BorderSpacer />
      <ul>
        <li><Link to="/"><Button>Home</Button></Link></li>
       <li><Link to="/viewmymarket"> <Button >Market Profile</Button></Link></li>
        <li><Button>Payment Methods</Button></li>
        <li><Button>Account Settings</Button></li>
        <li><Button>FAQ</Button></li>
        <li><Button>Contact Us</Button></li> 
        <li className="bottom-padding"><a href="/"><Button onClick={()=> localStorage.clear()}>Sign Out</Button></a></li> 
      </ul>
    </StyledPaper> 
  );
  }
  }
} 

  
  
  render() {
    if(this.props.user.fetching || !this.props.user.userData) return <div/>
 
    return ( 
      <StyledDiv>
        <StyledImg src={cloud}  className="mobile" width="100%" height="87px" />
        <StyledImg className="desktop" src={desktopCloud} width="100%" height="110px" />

        <StyledBox>
          <MenuIcon onClick={this.toggle} className="menuIcon" fontSize="large"/>
          <div>{this.Menu()}</div>      
          <CloudText>CLOUD</CloudText>
          <StandsText>STANDS</StandsText>
        </StyledBox>
      </StyledDiv>
     );
  }
}
 

const mapStateToProps = state => {
  return {
    user: {...state.checkUserData},
    market: {...state.checkMarketData},
  }
}

export default connect( mapStateToProps,
      { })(NavbarMarket);
  
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
  @media   (max-height: 720px) {
    margin-bottom: 8px;
    margin-top: 8px;
  
      }
      @media   (max-height: 600px) {
  /* display: none; */
  margin-top: -20px;
  margin-bottom: -20px;
      }
  `
  
  const StyledImg = styled.img`
  z-index: -1
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
  
  
  @media   (max-height: 720px) {
    /* background-color: red; */
    padding-top: 48px;
    margin-bottom: 8px;
    margin-top: 8px;
  
      }
  ul {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin-left: 16px;
    margin-right: -16px;
    @media   (max-height: 600px) {
      
      margin-top: 16px;
  
    :nth-child(3) {
      /* margin-top: 0px; */
      /* height: 20px; */
      .MuiButton-root {
  
        /* background-color: red; */
        height: 20px;
        margin-top: 0px;
        margin-bottom: 0px;
        
      }
  
  
  
  
  
    }
    
      .username {
  
        height: 20px;
      font-size: 12px;
      }
      .MuiTypography-caption {
        height: 16px;
        font-size: 12px;
        margin-top: -40px;  
      }
    .MuiButton-label {
    /* color: red; */
    font-size: 12px;
    line-height: 1;
    }
  
      }
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
    .MuiTypography-caption {
      color: #478529;
      font-size: 14px;
      line-height: 1.71;
      margin-top: -24px;
      @media   (max-height: 720px) {
  
  margin-bottom: -28px;    }
  
    
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
    /* background-size: cover; */
    background-position: center;
    background-repeat: no-repeat;
  }
  .vendor {

    background-image: url(${avatar2});
    background-size: 20px;
    background-color: #044d4c;
  }
  .marketOwner {
    background-color: #478529;
    background-size: 30px;

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
  
    :hover {
      background-color: rgba(71, 133, 41, 0.5);
    }
    
  
  }
  .bottom-padding {
    padding-top: 48px;
    @media   (max-height: 720px) {
    padding-top: 16px;
  
      }
      @media (max-height: 528px) {
        margin-top: -10px;
        padding-top: 0px;
  }
  }
  `
  
  

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
import cloud from "../assets/cloud.svg";
import { ThemeProvider } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { createMuiTheme } from "@material-ui/core/styles";
import styled from "styled-components";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      page: "Home"
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
  console.log(this.state.menuOpen)
  if (this.state.menuOpen === true) {
    console.log("we changed it@")
    // could conditinally render based off 
    // if data retreived from store to show
    // the avatar and name/market name
    
  return (
    
        <StyledPaper elevation={4}>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          {/* <img src={} /> */}
        </div>
        {/* props name */}
        {/* props market 15px/16px padding bottom then bottom border*/}

        <ul>
          <li><Button>Vendor History</Button></li>
          <li><Button>Payment Methods</Button></li>
          <li><Button>Account Settings</Button></li>
          <li><Button>FAQ</Button></li>
          <li><Button>Contact Us</Button></li>
          <br/>
          <br/>
          <li><Button>Sign Out</Button></li> 
        </ul>
    </StyledPaper>
      );
    } else {

      };
    }

  render() { 
    return ( 
      <StyledDiv>
        <StyledImg src={cloud}  width="100%" height="87px" />
    <StyledBox >
            <MenuIcon onClick={this.toggle} className="menuIcon" fontSize="large"/>
            {this.Menu()}
        
                <CloudText>
                  CLOUD
                </CloudText>


              <StandsText>
                STANDS
              </StandsText>

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
`;

const StandsText = styled(({ variant, ...otherProps}) => <Typography variant="h3" {...otherProps} />)`
    font-family: "Raleway Dots";
    color: black;
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

const StyledImg = styled.img`
z-index: -10
`

const StyledDiv = styled.div`
position: fixed;
z-index: 5000;

img {
  margin-top: -25px;
  height: 140px;
  width: 100vw;
  opacity: .985;
  filter: blur(1px);

  /* background-color: red; */
}

`

const StyledPaper = styled(Paper)`
height: 99.8vh;
width: 100%;
z-index: -1;
position: absolute;
left: 0;
top: 0;
border-radius: 10px;
text-align: left;
max-height: 99.8vh;
overflow-y: hidden;
overflow-x: hidden;
/* padding-right: */

ul {
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  text-align: center;
  margin-left: 16px;
  margin-right: -16px;
  border-top: 1px solid black;
  padding-top: 12.5px;
  
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
  /* background-color: rgba(71, 133, 41, 0.4); */
  margin-left: -41px;
  /* padding-left: 8px; */
  margin-bottom: 2px;
}
Button {
  display: flex;
  border-radius: 5px;
  justify-content: flex-start;
  background-color: rgba(71, 133, 41, 0.4);
  width: 100%;
  text-align: left;
  text-transform: capitalize; 
  height: 40px;

  .MuiButton-root {
  display: flex;
  align-items: center;
  text-align: center
  }
  

 

  :hover {
    background-color: rgba(71, 133, 41, 0.4);
  }

}
`


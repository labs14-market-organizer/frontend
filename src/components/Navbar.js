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
      }
  }

 toggle = () => {
  if (this.state.menuOpen === true) {
    this.setState({
      menuOpen: false
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
  return (
    
        <StyledPaper elevation={4}>
        <br/>
        <br/>
        <br/>
        <br/>
        hi
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

`


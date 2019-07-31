import React from "react";
import {
  Button,
  Box,
  Grid,
  ButtonBase,
  Typography,
  Container,
  CssBaseline
} from "@material-ui/core";
import cloud from "../assets/cloud.svg";
import { ThemeProvider } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { createMuiTheme } from "@material-ui/core/styles";
import styled from "styled-components";


const Navbar = () => {
  return (
    <StyledDiv>
        <StyledImg src={cloud}  width="100%" height="87px" />
    <StyledBox >
            <MenuIcon className="menuIcon" fontSize="large"/>
        
                <CloudText>
                  CLOUD
                </CloudText>


              <StandsText>
                STANDS
              </StandsText>

    </StyledBox>
    </StyledDiv>
  );
};


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

export default Navbar;

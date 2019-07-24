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

const CloudText = styled(({ variant, ...otherProps}) => <Typography variant="h3" {...otherProps} />)`
    font-family: "Luckiest Guy";
    color: #7f817e;
`;

const StandsText = styled(({ variant, ...otherProps}) => <Typography variant="h3" {...otherProps} />)`
    font-family: "Raleway Dots";
    color: black;
`;

const StyledBox = styled(({ m, p, ...otherProps}) => <Box m={0} p={0} {...otherProps} />)`

img {
}
`;






const Navbar = () => {
  return (
    <StyledBox m={0} p={0}>
        <img src={cloud} zIndex="bottom" width="100%" height="100%" />
      <Container>
        <Grid container justify="space-around">
          <Box mt={-13}>
            <MenuIcon />
          </Box>
            <Grid item xs={3}>
              <Box mt={-14}>
        
                <CloudText>
                  CLOUD
                </CloudText>

              </Box>
            </Grid>

            <Box mt={-14}>
              <StandsText>
                STANDS
              </StandsText>
            </Box>
        </Grid>
      </Container>
    </StyledBox>
  );
};

export default Navbar;

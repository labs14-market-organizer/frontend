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
import cloud from "../assets/topCloud.svg";
import { ThemeProvider } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { createMuiTheme } from "@material-ui/core/styles";

const cloudText = createMuiTheme({
  typography: {
    h3: {
      fontFamily: ["Luckiest Guy"]
    }
  },
  palette: {
    primary: {
      main: "#7f817e"
    }
  },
  button: {
    color: "#7f817e"
  }
});

const standsText = createMuiTheme({
  typography: {
    h3: {
      fontFamily: ["Raleway Dots"]
    }
  },
  palette: {
    primary: {
      main: "#000000"
    }
  }
});

const Navbar = () => {
  return (
    <Box m={0} p={0}>
    <Container>
        <img src={cloud} boxShadow={1} zIndex="bottom" width="100%" height="100%" />
        <Grid container justify="space-between">
          <ThemeProvider theme={cloudText}>
            <Box mt={-14}>
              <Typography color="primary" variant="h3">
                CLOUD
              </Typography>
            </Box>

            <ThemeProvider theme={standsText}>
              <Box mt={-14}>
                <Typography color="primary" variant="h3">
                  STANDS
                </Typography>
              </Box>
              <Box mt={-13}>
                <MenuIcon />
              </Box>
            </ThemeProvider>
          </ThemeProvider>
        </Grid>
      </Container>
      </Box>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Box,
  Grid,
  ButtonBase,
  Typography,
  Container,
  
} from "@material-ui/core";
import {spacing, positions } from "@material-ui/system"
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";

import logo from "../assets/standLogo.svg";
import cloud from "../assets/topCloud.svg";

import { Mixpanel } from '../redux/actions/mixpanel';

const theme = {
  spacing: 8,
}


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
    color: "#7f817e",
    
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

const MarketingPage = () => {
  return (
    <Container>
	<img src={cloud} zIndex="bottom"/>
      <Grid container justify="space-between">

        <ThemeProvider theme={cloudText}>
          <Typography color="primary" variant="h3" mt={30}>
            CLOUD
          </Typography>

          <ThemeProvider theme={standsText}>
            <Typography color="primary" variant="h3">
              STANDS
            </Typography>

            <MenuIcon />

            <Grid container justify="center">
              <Typography variant="subtitle1">Small Markets Made</Typography>
              <Typography component="span" variant="subtitle1">
                "Simple."
              </Typography>
            </Grid>
            <img src={logo} />
            <Grid container justify="center">
              <Typography variant="p">
                Cloud Markets is a the best way to promote organization and
                communication between vendors and small markets.
              </Typography>
              <Link to="/signup">
                <Button bg="primary" label="CTA" onClick={() => Mixpanel.track('joined button clicked')}> 
                  JOIN CLOUD STANDS
                </Button>
              </Link> 
              <Button variant="contained" onClick={() => Mixpanel.track('Test button for mixpanel')}>
                Mixpanel Test
              </Button>
            </Grid>
          </ThemeProvider>
        </ThemeProvider>
      </Grid>
    </Container>
  );
};

export default MarketingPage;

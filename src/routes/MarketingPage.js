import React from "react";
import { Link } from "react-router-dom";
import  styled  from "styled-components";
import {
  Button,
  Box,
  Grid,
  ButtonBase,
  Typography,
  Container,
  Paper
} from "@material-ui/core";

import lettuce from "../assets/lettuce.png";
import tomato from "../assets/tomato.png";
import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";
import testimonial1 from "../assets/testimonial1.png";

import Footer from "../components/Footer";



const MarketingPage = () => {
  return (
    <Container>
      <StyledPaper >
      <Grid container justify="center">
        <Typography variant="subtitle1">Small Markets Made </Typography>
        <Typography component="span" variant="subtitle1">
          Simple.
        </Typography>
      </Grid>
      <Grid container justify="center">
        <Typography variant="body1">
          Cloud Markets is a the best way to promote organization and
          communication between vendors and small markets.
        </Typography>
        <StyledLink to="/signup">
          <Button variant="contained" color="primary" label="CTA">
            JOIN CLOUD STANDS
          </Button>
        </StyledLink>
        
      </Grid>
</StyledPaper>
      <Box>
        <Typography variant="subtitle1">WHO IS IT FOR?</Typography>
      </Box>

      <Box>
        <Typography variant="subtitle1">Small Markets</Typography>
        <Typography variant="body1">
          Cloud Stands is on a mission to streamline the on-boarding process of
          joining a market. Enjoy all of your vendors being organized in one
          place.
        </Typography>
        <img src={lettuce} />
      </Box>

      <Box>
        <img src={tomato} />
        <Typography variant="subtitle1">Vendors</Typography>
        <Typography variant="body1">
          Cloud Stands is on a mission to streamline the on-boarding process of
          joining a market. Enjoy all of your vendors being organized in one
          place.
        </Typography>
      </Box>

      <Box>
        <Typography variant="subtitle1">HOW DOES IT WORK?</Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2">STEP 1</Typography>
      </Box>
      <Box>
        <img src={step1} />
        <Typography variant="body1">
          Sign up as a market owner or vendor
        </Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2">STEP 2</Typography>
      </Box>
      <Box>
        <img src={step2} />
        <Typography variant="body1">
          Allow Square to process all costs of joining a market
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2">STEP 3</Typography>
      </Box>
      <Box>
        <img src={step3} />
        <Typography variant="body1">
          As a market owner, streamline the on-boarding process for vendors. As
          a vendor, discover & join local markets.
        </Typography>
      </Box>

      <Box>
        <Typography variant="subtitle1">CLOUD STANDS & YOU</Typography>
      </Box>

      <Box>
        <img src={testimonial1} />
        <Typography variant="subtitle2">Dave Mustaine</Typography>
        <Typography variant="span">Austin, TX</Typography>
        <Typography variant="body1">
          “I finally know what’s going with all the vendors in my market. Cloud
          Stands helps keep everyone organized and informed”
        </Typography>
      </Box>
      <StyledLink to="/signup">
        <Button variant="contained" color="primary" label="CTA">
          JOIN CLOUD STANDS
        </Button>
      </StyledLink>
      <Footer />
    </Container>
  );
};

// STYLES
export default MarketingPage;


const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const StyledPaper = styled(Paper)`
 
  background: black; 
  color: white;
  width: 70%;
  padding: 2%;
  .MuiTypography-root {
    font-size: 30px; 
  }


  
`;

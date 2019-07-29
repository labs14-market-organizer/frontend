import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
    <>

      <StyledDiv>
      <StyledPaper>
        <Typography variant="subtitle1">Small Markets Made <span> Simple.</span></Typography>
        <Typography variant="body1">
          Cloud Stands is a the best way to promote organization and
          communication between vendors and small markets.
        </Typography>
        <StyledLink to="/signup">
          <Button fullWidth={true} variant="contained" color="primary" label="CTA">
            JOIN CLOUD STANDS
          </Button>
        </StyledLink>
      </StyledPaper>
      <BoxCol>
      <Box1></Box1>
      <Box2></Box2>
      </BoxCol>

        </StyledDiv>
      <TitleBox>
        <Typography variant="subtitle1">WHO IS IT FOR?</Typography>
      </TitleBox>

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
    </>
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
const StyledDiv = styled.div`
display: flex; 
max-width: 800px;
margin: 0 auto;

`

const BoxCol = styled.div`
display: flex;
flex-direction: column;
margin-top: 99px;
margin-left: 12px;
`

const StyledPaper = styled(Paper)`

  background: #edf3ea;
  width: 320px;
  padding: 2%;
  margin-top: 100px;
  height: 320px;
  padding-left: 16px;
  box-shadow: none;
  height: 450px;
 

  .MuiTypography-subtitle1 {

    font-size: 32px;
    font-family: "Raleway";
    font-weight: bold;
    width: 70%;
    text-align: left;
    line-height: 36px;
    margin-bottom: 31px;
    margin-top: 40px;
    
    span {
      font-weight: normal;
    }
  }
   .MuiTypography-body1 {
     width: 90%;
     font-size: 18px;
     font-family: "Roboto";
     font-weight: normal;
     margin-bottom: 41px;
     text-align: left;

   }
   .MuiButton-fullWidth {
     font-weight: bold;
     font-size: 18px;
     margin-left: -8px;
     height: 60px;
   }
`;

const Box1 = styled(Box)`
height: 207px;
width: 30px;
background-color: #044d4c;
margin-bottom: 12px;
border-radius: 10px 0px 0px 10px;


`
const Box2 = styled(Box)`
height: 250px;
width: 30px;
background-color: #478529;
border-radius: 10px 0px 0px 10px;

`

const TitleBox = styled(Box)`
height: 60px;
background-color: #ce8400;
color: white;
display: flex;
align-items: center;
margin-top: 12px;
padding-left: 28px;
.MuiTypography-subtitle1 {

font-size: 18px;
line-height: 1.33;
font-weight: 600;

}




`

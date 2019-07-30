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
        <Hero>
          <Typography variant="subtitle1">
            Small Markets Made <span> Simple.</span>
          </Typography>
          <Typography variant="body1">
            Cloud Stands is a the best way to promote organization and
            communication between vendors and small markets.
          </Typography>
          <StyledLink to="/signup">
            <Button
              fullWidth={true}
              variant="contained"
              color="primary"
              label="CTA"
            >
              JOIN CLOUD STANDS
            </Button>
          </StyledLink>
        </Hero>
        <BoxCol>
          <Box1 />
          <Box2 />
        </BoxCol>
      </StyledDiv>
      <TitleBox>
        <Typography variant="subtitle1">WHO IS IT FOR?</Typography>
      </TitleBox>
      <Box3 />

      <SmallMarkets>
        <div>
          <Typography variant="subtitle1">Small Markets</Typography>
          <Typography variant="body1">
            Cloud Stands is on a mission to streamline the on-boarding process
            of joining a market. Enjoy all of your vendors being organized in
            one place.
          </Typography>
        </div>
        <img src={lettuce} />
      </SmallMarkets>

      <VenderWrapper>
        <Vendors>
          <img src={tomato} />
          <div>
            <Typography variant="subtitle1">Vendors</Typography>
            <Typography variant="body1">
              Discover local markets across America and avoid the confusion of
              joining them. Cloud Stands allows you to focus on what’s most
              important; your business!
            </Typography>
          </div>
        </Vendors>
        <Box4 />
      </VenderWrapper>

      <TitleBox className="instructions">
        <Typography variant="subtitle1">HOW DOES IT WORK?</Typography>
      </TitleBox>
<Step1Container>
      <Step1Label>
        <Typography variant="subtitle2">STEP 1</Typography>
      </Step1Label>
      <Step1Paper>
        <img src={step1} />
        <Typography variant="body1">
          Sign up as a market owner or vendor
        </Typography>
      </Step1Paper>
      <Box5/>
</Step1Container>
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
  margin: 0 auto;
`;

const BoxCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 99px;
  margin-left: 12px;
`;

const Hero = styled(Paper)`
  background: #edf3ea;
  width: 100%;
  padding: 2%;
  margin-top: 0px;
  padding-left: 16px;
  box-shadow: none;
  height: 450px;
  max-height: 450px;
  box-sizing: border-box;
  text-align: left;
  .MuiButton-fullWidth {
    max-width: 400px;
  }

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
  margin-top: -98px;
  background-color: #044d4c;
  margin-bottom: 12px;
  border-radius: 10px 0px 0px 10px;
`;
const Box2 = styled(Box)`
  height: 230px;
  width: 30px;
  background-color: #478529;
  border-radius: 10px 0px 0px 10px;
`;

const Box3 = styled(Box)`
  position: absolute;
  height: 230px;
  width: 4px;
  background-color: #044d4c;
  border-radius: 0px 10px 10px 0px;
  margin-top: 12px;
`;

const Box4 = styled(Box)`
  height: 230px;
  min-width: 50px;
  background-color: #478529;
  border-radius: 10px 0px 0px 10px;
  margin-top: 12px;
`;

const Box5 = styled(Box)`
  height: 230px;
  min-width: 50px;
  background-color: #f6e7cc;
  border-radius: 10px 0px 0px 10px;
  margin-left: 12px;
`;

const Step1Label = styled(Box)`
  background-color: #044d4c;
  transform: rotate(270deg);
  width: 269px;
  margin-right: -78px;
  height: 45px;
  border-radius: 10px 10px 10px 10px;
  color: white;
  box-sizing: border-box;
  margin-left: -96px;
  display: flex;
  justify-content: center;
  align-items: center;

  .MuiTypography-subtitle2 {
    font-size: 22px;
    font-weight: 600;

    
  }




`

const Step1Container = styled(Box)`
display: flex;
margin-top: 86px;
align-items: center;
height: 230px;
  

`

const Step1Paper = styled(Paper)`
display: flex;
flex-direction: column;
background-color: #e6eded;
height: 100%;
box-shadow: none;
padding: 20px;
text-align: left;
box-sizing: border-box;
width: 100%;


.MuiTypography-body1 {
  margin-top: 24px;
  font-size: 16px;
  line-height: 24px;
  font-family: Roboto;
  font-weight: normal;
}


img {
  
}
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
  &&.instructions {
    justify-content: flex-end;
    background-color: #044d4c;
    text-align: right;
    padding-right: 24px;
  }
`;
const SmallMarkets = styled(Paper)`
  margin-left: 12px;
  background-color: #f6e7cc;
  height: 230px;
  display: flex;
  box-shadow: none;
  margin-top: 12px;
  && .MuiTypography-subtitle1 {
    font-size: 22px;
    line-height: 32px;
    font-weight: bold;
  }
  .MuiTypography-root {
    padding-left: 12px;
    padding-top: 23px;
    text-align: left;
  }
  .MuiTypography-body1 {
    font-size: 18px;
    line-height: 24px;
    width: 80%;
    font-family: Roboto;
    font-weight: normal;
    margin-top: -10px;
    margin-right: 0px;
    padding-right: 0px;
  }

  img {
    height: 100%;
  }
`;

const VenderWrapper = styled(Box)`
  display: flex;
`;

const Vendors = styled(Paper)`
  background-color: #f6e7cc;
  height: 230px;
  display: flex;
  box-shadow: none;
  margin-top: 12px;
  margin-right: 12px;
  padding-right: 14px;

  && .MuiTypography-subtitle1 {
    font-size: 22px;
    line-height: 32px;
    font-weight: bold;
  }
  .MuiTypography-root {
    padding-left: 12px;
    padding-top: 23px;
    text-align: right;
  }
  .MuiTypography-body1 {
    font-size: 18px;
    line-height: 24px;
    font-family: Roboto;
    font-weight: normal;
    margin-top: -10px;
    text-align: right;
    padding-left: 20px;
  }

  img {
    height: 100%;
  }
`;

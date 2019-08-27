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
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardAction
} from "@material-ui/core";

import carrot from "../assets/carrot.png";
import apple from "../assets/apple.svg";
import lettuce from "../assets/lettuce.png";
import lettuceDesktop from "../assets/lettuceDesktop.png";
import tomato from "../assets/tomato.png";
import tomatoDesktop from "../assets/tomatoDesktop.png";
import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";
import testimonial1 from "../assets/testimonial1.png";
import testimonialDesktop from "../assets/testimonialDesktop.png";
import Footer from "../components/Footer";

import { spacing, positions } from "@material-ui/system";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";

import logo from "../assets/standLogo.svg";

import { Mixpanel } from "../redux/actions/mixpanel";
import Navbar from "../components/Navbar";

const theme = {
  spacing: 8
};

const MarketingPage = () => {
  return (
    <>
      <Navbar />
      <NavbarFix>
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
                onClick={() => Mixpanel.track("joined button clicked")}
              >
                JOIN CLOUD STANDS
              </Button>
            </StyledLink>
          </Hero>
          <BoxCol>
            <Box1 />
            <Box2 />
          </BoxCol>
          <Box8 />
        </StyledDiv>
        <TitleBox>
          <Typography variant="subtitle1">WHO IS IT FOR?</Typography>
        </TitleBox>
        <WhoisitforWrap>
          <Box3 />

          <SmallMarkets>
            <div>
              <Typography variant="subtitle1">Small Markets</Typography>
              <Typography variant="body1">
                Cloud Stands is on a mission to streamline the on-boarding
                process of joining a market. Enjoy all of your vendors being
                organized in one place.
              </Typography>
            </div>
            <img src={lettuce} />
            <img className="lettuceDesktop" src={lettuceDesktop} />
          </SmallMarkets>

          <VenderWrapper>
            <Vendors>
              <img src={tomato} />
              <div>
                <Typography variant="subtitle1">Vendors</Typography>
                <Typography variant="body1">
                  Discover local markets across America and avoid the confusion
                  of joining them. Cloud Stands allows you to focus on what’s
                  most important; your business!
                </Typography>
              </div>
              <img className="tomatoDesktop" src={tomatoDesktop} />
            </Vendors>
            <Box4 />
          </VenderWrapper>
        </WhoisitforWrap>

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
          <Box5 />
          <Box9 />
        </Step1Container>

        <Step2Container>
          <Step2Label>
            <Typography variant="subtitle2">STEP 2</Typography>
          </Step2Label>
          <Step2Paper>
            <img src={step2} />
            <Typography variant="body1">
              Allow Square to process all costs of joining a market
            </Typography>
          </Step2Paper>
          <Box10 />
        </Step2Container>

        <Step3Container>
          <Step3Label>
            <Typography variant="subtitle2">STEP 3</Typography>
          </Step3Label>
          <Step3Paper>
            <img src={step3} />
            <Typography variant="body1">
              As a market owner, streamline the on-boarding process for vendors.
              As a vendor, discover & join local markets.
            </Typography>
          </Step3Paper>
          <Box11 />
        </Step3Container>

        <TitleBox className="testimonial">
          <Typography variant="subtitle1">CLOUD STANDS & YOU</Typography>
        </TitleBox>
        <TestimonialWrapper>
          <Box6 />
          <TestimonialCard>
            <CardContent>
              <CardMedia
                className="testimonialDesktop"
                image={testimonialDesktop}
                title="Dave Mustaine"
              />
              {/* <CardMedia image={testimonial1} title="Dave Mustaine" /> */}
              <img src={testimonial1} />

              <Typography variant="subtitle2">Dave Mustaine</Typography>
              <Typography variant="span">Austin, TX</Typography>
              <Typography variant="body1">
                “I finally know what’s going with all the vendors in my market.
                Cloud Stands helps keep everyone organized and informed”
              </Typography>
            </CardContent>
            <StyledLink2 to="/signup">
              <Button
                fullWidth="true"
                variant="contained"
                color="primary"
                label="CTA"
                onClick={() => Mixpanel.track("joined button clicked")}
              >
                JOIN CLOUD STANDS
              </Button>
            </StyledLink2>
          </TestimonialCard>
          <Box7 />
        </TestimonialWrapper>
        <Footer />
      </NavbarFix>
    </>
  );
};

// STYLES
export default MarketingPage;

const NavbarFix = styled.div`
  z-index: -100000000000;
`;

const padding = props => `
@media(min-width: 920px) {
  padding-left: 40px;

}



@media(min-width: 1100px) {
padding-left: 90px;

}

@media(min-width: 1300px) {
padding-left: 120px;

}
`;

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

const StyledLink2 = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    display: flex;
    justify-content: center;
  }
  .MuiButton-fullWidth {
    max-width: 424px;
    margin: 0 16px 16px 16px;
    /* margin-bottom: 16px; */

    height: 60px;
    /* margin-bottom:78px; */
    font-family: "Raleway";
    font-size: 18px;
    font-weight: bold;
    @media (max-width: 333px) {
      font-size: 16px;
    }
    @media (max-width: 311px) {
      font-size: 14px;
    }
    @media (max-width: 291px) {
      font-size: 10px;
    }

  }
`;
const StyledDiv = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 112px;
  z-index: -20;
`;

const BoxCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 99px;
  margin-left: 12px;
  @media (min-width: 692px) {
    margin-left: 24px;
  }
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
  padding-left: 5%;
  @media (min-width: 692px) {
    margin-top: 12px;
    width: 70vw;
  }
 
  @media (max-width: 380px) {
    height: 500px;
    max-height: 500px;
  }
  ${padding}
  .MuiButton-fullWidth {
    max-width: 400px;
  }

  .MuiTypography-subtitle1 {
    font-size: 32px;
    font-family: "Raleway";
    font-weight: bold;
    width: 100%;
    text-align: left;
    line-height: 36px;
    margin-bottom: 31px;
    margin-top: 40px;
    @media (min-width: 692px) {
      font-size: 26px;
      width: 100%;
    
    }

    @media (min-width: 750px) {
      font-size: 32px;
      width: 100%;
    }

    @media (min-width: 950px) {
      font-size: 36px;
      width: 100%;
    }

    @media (min-width: 1200px) {
      font-size: 48px;
      width: 100%;
    }

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
    @media (min-width: 692px) {
      max-width: 660px;
      line-height: 1.75;
      font-size: 20px;
    }
    @media (min-width: 900px) {
      max-width: 660px;
      line-height: 1.75;
      font-size: 24px;
    }
  }
  .MuiButton-fullWidth {
    font-weight: bold;
    font-size: 18px;
    margin-left: -8px;
    height: 60px;
    @media (max-width: 333px) {
      font-size: 16px;
    }
    @media (max-width: 311px) {
      font-size: 14px;
    }
    @media (max-width: 291px) {
      font-size: 10px;
    }
  }
`;

const Box1 = styled(Box)`
  height: 207px;
  width: 30px;
  margin-top: -98px;
  background-color: #044d4c;
  margin-bottom: 12px;
  border-radius: 10px 0px 0px 10px;
  @media (min-width: 692px) {
    margin-top: -86px;
    width: 25vw;
    background-size: 70px;
    background-image: url(${carrot});
    background-position: center; /* Center the image */
    background-repeat: no-repeat;
  }
`;
const Box2 = styled(Box)`
  height: 230px;
  width: 30px;
  background-color: #478529;
  border-radius: 10px 0px 0px 10px;
  @media (max-width: 380px) {
    height: 280px;
  }
  @media (min-width: 692px) {
    width: 25vw;
    background-image: url(${apple});
    background-position: center; /* Center the image */
    background-repeat: no-repeat;
  }
`;

const Box3 = styled(Box)`
  position: absolute;

  height: 230px;
  width: 4px;
  background-color: #044d4c;
  border-radius: 0px 10px 10px 0px;
  @media (max-width: 380px) {
    height: 250px;
  }
  @media (max-width: 367px) {
    height: 270px;
  }

  @media (max-width: 360px) {
    height: 300px;
  }

  @media (min-width: 692px) {
    position: static;
    background-color: #478529;
    height: 350px;
    width: 20vw;
    margin-left: 0px;
    margin-top: 12px;
  }
`;

const Box4 = styled(Box)`
  height: 230px;
  min-width: 50px;
  background-color: #478529;
  border-radius: 10px 0px 0px 10px;
  margin-top: 12px;

  @media (max-width: 380px) {
    height: 250px;
  }
  @media (max-width: 367px) {
    height: 270px;
  }

  @media (max-width: 360px) {
    height: 300px;
  }
  @media (min-width: 692px) {
    width: 20vw;
    height: 100%;
    flex-shrink: 2;
    background-color: #044d4c;
  }
`;

const Box5 = styled(Box)`
  height: 100%;
  width: 78px;
  background-color: #f6e7cc;
  border-radius: 10px 0px 0px 10px;
  margin-left: 12px;

  @media (min-width: 692px) {
    width: 25%;
    
  }
`;

const Box6 = styled(Box)`
  position: absolute;
  box-sizing: border-box;
  height: 416px;
  width: 10px;
  background-color: #ce8400;
  position: absolute;

  @media (min-width: 692px) {
    position: static;
    /* margin-right: -12px; */
    height: 100%;
    width: 36%;
    border-radius: 0px 10px 10px 0px;
  }

  /* margin-top: 12px; */
`;

const Box7 = styled(Box)`
  height: 100%;

  width: 10px;
  /* margin-left: -30px; */
  background-color: #044d4c;
  @media (min-width: 692px) {
    width: 36%;
    margin-left: 12px;
    border-radius: 10px 0px 0px 10px;
  }
`;

const Box8 = styled(Box)`
  @media (max-width: 691px) {
    display: none;
  }
  width: 100px;
  margin-top: 12px;

  border-radius: 10px 0px 0px 10px;
  display: flex;

  height: 452px;
  margin-left: 24px;
  width: 5vw;
  background-color: #f6e7cc;
`;

const Box9 = styled(Box)`
  /* display: flex; */
  width: 5%;
  border-radius: 10px 0px 0px 10px;
  height: 100%;
  margin-left: 24px;
  background-color: #478529;

  @media (max-width: 691px) {
    display: none;
  }
`;

const Box10 = styled(Box)`
  width: 27%;
  border-radius: 10px 0px 0px 10px;
  height: 100%;
  margin-left: 24px;
  background-color: #478529;
  @media (max-width: 691px) {
    display: none;
  }
`;
const Box11 = styled(Box)`
  width: 10%;
  border-radius: 10px 0px 0px 10px;
  height: 100%;
  margin-left: 24px;
  background-color: #f6e7cc;
  @media (max-width: 691px) {
    display: none;
  }
`;

const SmallMarkets = styled(Paper)`
  padding-left: 16px;
  background-color: #f6e7cc;
  height: 230px;
  display: flex;
  flex-grow: 2;
  box-shadow: none;
  margin-top: 12px;
  max-height: 692px;
  margin-left: 16px;

  @media (max-width: 380px) {
    height: 250px;
  }
  @media (max-width: 367px) {
    height: 270px;
  }

  @media (max-width: 360px) {
    height: 300px;
  }
  @media (max-width: 340px) {
    img {
      display: none;
    }
  }
  .lettuceDesktop {
    display: none;
  }

  @media (min-width: 692px) {
    height: 350px;
    padding-left: 16px;
    img {
      display: none;

      margin-left: 16px;
    }
  }

  @media (min-width: 1000px) {
    .lettuceDesktop {
      display: flex;
      width: 140px;
    }
  }

  @media (min-width: 1060px) {
    .lettuceDesktop {
      display: flex;
      width: 160px;
    }
  }

  @media (min-width: 1150px) {
    .lettuceDesktop {
      width: 200px;
    }
  }

  @media (min-width: 900px) {
  }

  && .MuiTypography-subtitle1 {
    font-size: 22px;
    line-height: 32px;
    font-weight: bold;
  }
  .MuiTypography-root {
    padding-left: 0px;
    padding-top: 23px;
    text-align: left;
  }
  .MuiTypography-body1 {
    font-size: 18px;
    line-height: 24px;
    width: 95%;
    font-family: Roboto;
    font-weight: normal;
    margin-top: -10px;
    margin-right: 0px;
    padding-right: 0px;
  }
  @media (min-width: 692px) {
    height: 100%;
    margin-left: 16px;
    .MuiTypography-root {
      padding-right: 32px;
      padding-left: -12px;
      line-height: 1.38;
    }
    .MuiTypography-body1 {
      text-align: left;
      font-size: 21px;
    }
    .MuiTypography-subtitle1 {
      text-align: left;
      font-size: 24px;
      padding-top: 40px;
    }
  }

  img {
    height: 100%;
  }
`;

const WhoisitforWrap = styled.div`
  @media (min-width: 692px) {
    display: flex;
    flex-flow: row nowrap;
    height: 350px;
    margin-bottom: 32px;
  }
`;

const VenderWrapper = styled(Box)`
  display: flex;
  padding-bottom: 16px;
  height: 100%;
`;

const Vendors = styled(Paper)`
  background-color: #f6e7cc;
  height: 230px;
  display: flex;
  box-shadow: none;
  margin-top: 12px;
  margin-right: 12px;
  padding-right: 14px;
  flex-shrink: 2;
  .tomatoDesktop {
    display: none;
  }
  @media (max-width: 380px) {
    height: 250px;
  }
  @media (max-width: 367px) {
    height: 270px;
  }

  @media (max-width: 360px) {
    height: 300px;
  }

  @media (max-width: 340px) {
    img {
      display: none;
    }
  }

  @media (min-width: 692px) {
    img {
      display: none;
    }
  }

  @media (min-width: 1000px) {
    img {
      display: none;
    }

    .tomatoDesktop {
      width: 140px;
      display: flex;
      margin-right: -15px;
      border-radius: 0px;
    }
  }

  @media (min-width: 1050px) {
    .tomatoDesktop {
      width: 160px;
    }
  }

  @media (min-width: 1160px) {
    .tomatoDesktop {
      display: flex;
      width: 200px;
    }
  }

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

  @media (min-width: 692px) {
    height: 100%;
    margin-left: 16px;
    .MuiTypography-root {
      padding-left: 32px;
      padding-right: 32px;
      line-height: 1.38;
    }
    .MuiTypography-body1 {
      text-align: left;
      font-size: 21px;
    }
    .MuiTypography-subtitle1 {
      text-align: left;
      font-size: 24px;
      padding-top: 40px;
    }
  }
  img {
    height: 100%;
  }
`;

const Step1Container = styled(Box)`
  display: flex;
  margin-top: 12px;
  align-items: center;
  height: 230px;
  @media (max-width: 321px) {
    margin-bottom: 22px;
  }
  @media (min-width:692px) {
    height: 350px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

const Step1Label = styled(Box)`
  background-color: #044d4c;
  height: 230px;
  margin-right: 12px;
  width: 60px;
  border-radius: 0px 10px 10px 0px;
  color: white;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  margin-right: 300px;
  flex-wrap: nowrap;
  flex: 1;

  .MuiTypography-subtitle2 {
    font-size: 22px;
    font-weight: 600;
    transform: rotate(270deg);
    margin-right: -12px;
    white-space: nowrap;
    padding-right: 16px;
    /* width: 700px; */
    @media (min-width: 692px) {
      padding-right: 32px;
    }
    @media (min-width: 1300px) {
      padding-right: 64px;
    }
  }

  @media (min-width: 692px) {
    width: 23%;
    margin: 0px;
    position: static;
    padding-left: 0px;
    justify-content: flex-start;
    height: 100%;
    .MuiTypography-subtitle2 {
      transform: rotate(0deg);
      font-size: 26px;
      margin-right: 0px;
      white-space: nowrap;
    }
  }

  @media (min-width: 710px) {
    padding-left: 10px;
  }
  ${padding}
`;

const Step1Paper = styled(Paper)`
  display: flex;
  flex-direction: column;
  background-color: #e6eded;
  height: 100%;
  box-shadow: none;
  text-align: left;
  box-sizing: border-box;
  width: 100%;
  margin-left: 72px;
  padding: 20px 12px;
  @media (min-width: 692px) {
    margin-left: 24px;
    display: flex;
    align-items: center;
    img {
        height: 208px;
        width: 350px;
      }
    text-align: center;
  }
  img {
    margin-top: 16px;

  }
  .MuiTypography-body1 {
    margin-top: 24px;
    font-size: 16px;
    line-height: 24px;
    font-family: Roboto;
    font-weight: normal;
    line-height: 1.5;

    @media (min-width: 692px) {
      font-size: 21px;
      
    }
  }
`;

const Step2Container = styled(Box)`
  display: flex;
  margin-top: 12px;
  align-items: center;
  height: 230px;
  @media (max-width: 321px) {
    margin-bottom: 22px;
  }
  @media (min-width:692px) {
    height: 350px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

const Step2Label = styled(Box)`
  background-color: #044d4c;
  height: 230px;
  margin-right: 12px;
  width: 92px;
  border-radius: 0px 10px 10px 0px;
  color: white;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  @media (max-width: 321px) {
    height: 250px;
  }
  .MuiTypography-subtitle2 {
    font-size: 22px;
    font-weight: 600;
    transform: rotate(270deg);
    margin-right: -12px;
  }

  @media (min-width: 692px) {
    width: 33%;
    margin: 0px;
    padding-left: 0px;
    position: static;
    height: 100%;
    justify-content: flex-start;
    .MuiTypography-subtitle2 {
      transform: rotate(0deg);
      font-size: 26px;
      margin-right: 0px;
      white-space: nowrap;
    }
  }

  @media (min-width: 710px) {
    padding-left: 10px;
  }
  ${padding}
`;

const Step2Paper = styled(Paper)`
  display: flex;
  flex-direction: column;
  background-color: #e6eded;
  height: 100%;
  box-shadow: none;
  padding: 20px 12px;
  text-align: left;
  box-sizing: border-box;
  width: 100%;
  margin-left: 104px;

  @media (max-width: 321px) {
    height: 250px;
  }

  @media (min-width: 692px) {
    margin-left: 24px;

    text-align: center;
    display: flex;
    align-items: center;
    img {
        height: 208px;
        width: 350px;
      }
  }
  .MuiTypography-body1 {
    margin-top: 24px;
    font-size: 16px;
    line-height: 24px;
    font-family: Roboto;
    font-weight: normal;
    line-height: 1.5;
    @media (min-width: 692px) {
      font-size: 21px;
    }
  }
`;

const Step3Container = styled(Box)`
  display: flex;
  margin-top: 12px;
  align-items: center;
  height: 230px;
  @media (max-width: 360px) {
    margin-top: 18px;

    margin-bottom: 20px;
  }

  @media (max-width: 321px) {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  @media (max-width: 340px) {
    img {
      display: none;
    }
  }
  @media (min-width: 692px) {
    height: 350px;

    margin-top: 24px;
    margin-bottom: 24px;
  
  }
`;

const Step3Label = styled(Box)`
  background-color: #044d4c;
  height: 230px;
  margin-right: 12px;
  width: 120px;
  border-radius: 0px 10px 10px 0px;
  color: white;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  @media (max-width: 368px) {
    height: 262px;
    margin-top: 8px;
  }
  @media (min-width: 692px) {
    width: 43%;
    margin: 0px;
    height: 100%;
    position: static;
  }


  .MuiTypography-subtitle2 {
    font-size: 22px;
    font-weight: 600;
    transform: rotate(270deg);
    margin-right: -12px;
  }
  @media (min-width: 692px) {
    justify-content: flex-start;
    padding-left: 0px;
    .MuiTypography-subtitle2 {
      transform: rotate(0deg);
      font-size: 26px;
      margin-right: 0px;
      white-space: nowrap;
    }
  }
  @media (min-width: 710px) {
    padding-left: 10px;
  }
  ${padding}
`;

const Step3Paper = styled(Paper)`
  display: flex;
  flex-direction: column;
  background-color: #e6eded;
  height: 100%;
  box-shadow: none;
  padding: 20px 12px;
  text-align: left;
  box-sizing: border-box;
  width: 100%;
  margin-left: 132px;
  img {
    margin-top: -12px;
  }

  @media (max-width: 368px) {
    height: 260px;
    margin-top: 16px;
  }

  @media (min-width: 692px) {
    margin-left: 24px;

    text-align: center;
    display: flex;
    align-items: center;
    img {
        height: 208px;
        width: 350px;
        margin-top: 8px;
        margin-bottom: 24px;
      }
  }

  .MuiTypography-body1 {
    margin-top: 2px;
    font-size: 16px;
    line-height: 24px;
    font-family: Roboto;
    font-weight: normal;
    line-height: 1.5;
    @media (min-width: 692px) {
      font-size: 21px;
    }
  }

`;

const TitleBox = styled(Box)`
  height: 60px;
  background-color: #ce8400;
  color: white;
  display: flex;
  align-items: center;
  margin-top: 12px;
  padding-left: 28px;
  @media (min-width: 692px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .MuiTypography-subtitle1 {
    font-size: 18px;
    line-height: 1.33;
    font-weight: 600;
  }
  &&.instructions {
    background-color: #044d4c;
    padding-right: 24px;
    margin-top: -5px;
      @media (min-width: 692px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  }

  &&.testimonial {
    background-color: #478529;
    margin-bottom: 12px;
    @media (max-width: 368px) {
      margin-top: 34px;
    }
  }
  @media (min-width: 692px) {
    height: 100px;
    .MuiTypography-subtitle1 {
      font-size: 36px;
    }
  }
  ${padding}
`;
const TestimonialWrapper = styled(Box)`
  display: flex;
  width: 100%;
  height: 416px;
  padding-bottom: 12px;
  @media (min-width: 692px) {
    height: 550px;
  }


`;

const TestimonialCard = styled(Card)`
  width: 100%;
  margin-left: 22px;
  margin-right: 12px;
  padding-top: -100px;
  box-shadow: none;
  background-color: #edf3ea;

  .MuiTypography-subtitle2 {
    font-size: 18px;
    font-family: "Raleway";
    font-weight: 600;
    @media (min-width: 692px) {
      font-size: 21px;
    }
  }
  .MuiCardContent-root {
    padding: 0;

    span {
      color: green;
      font-family: "Raleway";
      font-size: 16px;
      font-weight: normal;
      line-height: 1.5;
      @media (min-width: 692px) {
      font-size: 21px;
    }
    }

    .MuiTypography-body1 {
      padding: 0 20px 27px;
      font-family: "Roboto";
      @media (min-width: 692px) {
      font-size: 21px;
    }
    }
  }

  /* background-color: blue; */

  img {
    width: 100%;
    margin: 0;
    max-width: 424px;
    @media (min-width: 692px) {
      max-width: 600px;
    }
  }
`;

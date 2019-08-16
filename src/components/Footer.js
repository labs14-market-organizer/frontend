import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {
  Typography,
  Container,
  ListItem,
  GridList
} from "@material-ui/core";

import footerCloud from "../assets/footerCloud.svg"
import desktopFooterCloud from "../assets/desktopFooterCloud.svg"


const Footer = () => {
  return (
    <StyledContainer>
      <Typography variant="subtitle1">Cloud Stands</Typography>

<StyledGridList cellHeight={26}>
        <ListItem>  <Link to="team">Meet the Team</Link></ListItem>
        <ListItem Button>Support</ListItem>
        <ListItem Button>About</ListItem>
        <ListItem Button>Contact</ListItem>
        <ListItem Button>Careers</ListItem>
        <ListItem> <Link to="terms">Terms of Service</Link></ListItem>
        <ListItem Button>Blog</ListItem>
        <ListItem> <Link to="privacy"> Privacy Policy</Link></ListItem>
</StyledGridList>
      <Typography variant="body1">Copyright <span>©</span> 2019 Cloud Stands</Typography>

    <img src={footerCloud} alt="cloud"/>
    <img className="desktopFooterCloud" src={desktopFooterCloud} alt="cloud"/>
    </StyledContainer>
  );
};

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


const StyledContainer = styled.div`
margin-top: 78px;
width: 100vw;

.MuiTypography-root {
  @media (min-width: 692px) {
    color: red;
    padding-top: 200px;
  }
}
.MuiTypography-subtitle1 {
text-align:  center;
font-family: "Raleway";
font-size: 18px;
line-height: 1.33;
font-weight: 600;
margin-bottom: 12px;
padding-left: 12px;



}
.desktopFooterCloud {
  display: none;
}
img {
  position: relative;
  /* height: 400px; */
  display: block;
  text-align: left;
  height: 280px;
  width: 110.2%;
  margin: 0;
  /* margin-top: -200px; */
  margin-left: -30px;
  z-index: -10
  /* min-width: 100%; */



}
@media (min-width: 692px) {
  
  img {
    display: none
  }
}
.desktopFooterCloud {
  display: none;
  @media (min-width: 692px) {
    display: initial;
    
  }
}
a{
  text-decoration: none;
  color: initial;
}
.MuiTypography-body1 {
  /* margin-left: -26px; */
  
  font-family: "Raleway";
  margin-bottom: -240px;

  font-weight: normal;
  @media (min-width: 692px) {
  }
  span {
    font-weight: bold;
  }
}

@media (min-width: 692px) {
  margin: 0px;
  /* width: 100vw; */
  margin-top: 0px;
  padding-top:70px;
  margin-top: 24px;
  justify-content: flex-start;
  overflow-x: hidden;
  overflow-y: hidden;




}
@media (min-width: 1440px) {
width: 100vw;
.desktopFooterCloud {
  width: 100vw;
}
}

.muiTypography-body1 {
    color: red;
  }

`

const StyledGridList = styled(GridList)`
display: flex;
justify-content: space-around;
font-family: "Raleway";
font-size: 16px;
line-height: 1.5;
padding-bottom: 12px;
padding-left: 12px;
padding-bottom: 16px;
text-align:  center;

@media (min-width: 692px) {
  .MuiTypography-body1  {
    color: red;
    font-size: 300px;
  }
}




`

export default Footer;

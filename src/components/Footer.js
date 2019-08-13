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


const Footer = () => {
  return (
    <StyledContainer>
      <Typography variant="subtitle1">Cloud Stands</Typography>

<StyledGridList cellHeight={26}>
        <ListItem Button to="team">Meet the Team</ListItem>
        <ListItem Button>Support</ListItem>
        <ListItem Button>About</ListItem>
        <ListItem Button>Contact</ListItem>
        <ListItem Button>Careers</ListItem>
        <ListItem Button>Terms of Service</ListItem>
        <ListItem Button>Blog</ListItem>
        <ListItem Button>Privacy Policy</ListItem>
</StyledGridList>
      <Typography variant="body1">Copyright <span>©</span> 2019 Cloud Stands</Typography>

    <img src={footerCloud} alt="cloud"/>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
height: 212px;
margin-top: 78px;

.MuiTypography-subtitle1 {
text-align: left;
font-family: "Raleway";
font-size: 18px;
line-height: 1.33;
font-weight: 600;
margin-bottom: 12px;
padding-left: 12px;
}

img {
  position: relative;
  /* height: 400px; */
  display: inline-block;
  text-align: left;
  height: 280px;
  width: 110.2%;
  margin: 0;
  /* margin-top: -200px; */
  margin-left: -30px;
  z-index: -10
  /* min-width: 100%; */

}


.MuiTypography-body1 {
  /* margin-left: -26px; */
  font-family: "Raleway";
  margin-bottom: -240px;

  font-weight: normal;
  span {
    font-weight: bold;
  }
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





`

export default Footer;

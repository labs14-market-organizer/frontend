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
  ListItem,
  GridList
} from "@material-ui/core";


const Footer = () => {
  return (
    <StyledContainer>
      <Typography variant="subtitle1">Cloud Stands</Typography>

<StyledGridList cellHeight={26}>
        <ListItem Button>Meet the Team</ListItem>
        <ListItem Button>Support</ListItem>
        <ListItem Button>About</ListItem>
        <ListItem Button>Contact</ListItem>
        <ListItem Button>Careers</ListItem>
        <ListItem Button>Terms of Service</ListItem>
        <ListItem Button>Blog</ListItem>
        <ListItem Button>Privacy Policy</ListItem>
</StyledGridList>
      <Typography variant="body1">Copyright <span>©</span> 2019 Cloud Stands</Typography>

    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
.MuiTypography-subtitle1 {
text-align: left;
font-family: "Raleway";
font-size: 18px;
line-height: 1.33;
font-weight: 600;
margin-bottom: 12px;
padding-left: 12px;
}
height: 212px;


.MuiTypography-body1 {
  margin-left: -26px;
  font-family: "Raleway";
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

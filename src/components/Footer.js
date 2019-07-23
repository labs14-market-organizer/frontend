import React from "react";
import { Link } from "react-router-dom";
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
    <Container>
      <Typography variant="subtitle1">Cloud Stands</Typography>

<GridList>
        <ListItem Button>Meet the Team</ListItem>
        <ListItem Button>Support</ListItem>
        <ListItem Button>About</ListItem>
        <ListItem Button>Contact</ListItem>
        <ListItem Button>Careers</ListItem>
        <ListItem Button>Terms of Service</ListItem>
        <ListItem Button>Blog</ListItem>
        <ListItem Button>Privacy Policy</ListItem>
</GridList>
      <Typography variant="body1">Copyright © 2019 Cloud Stands</Typography>

    </Container>
  );
};

export default Footer;

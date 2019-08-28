import React, { Component } from 'react';
import NavbarVendor from '../components/NavbarVendor';
import styled from "styled-components";
import { Typography, Button } from '@material-ui/core';
import {Link} from "react-router-dom";

import confirmation from "../assets/confirmation.png"

const BoothConfirmation = () => {
    return (
        <>
            <NavbarVendor />
            <StyledDiv>
            <div>

                <Typography variant="subtitle1">Woohoo! Your booth has been confirmed!</Typography>
            </div>
            <div>
                <img src={confirmation} />

            </div>
            <div>
                <StyledLink to="/searchmarkets" ><Button  variant="contained" color="primary" label="Return to dashboard" style={{width: "300px", height: "60px", fontFamily: "Raleway", fontSize: "18px", fontWeight: "bold"}}>Return to dashboard</Button></StyledLink>
            </div>
            </StyledDiv>
        </>
    );
}

export default BoothConfirmation;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    flex-wrap: wrap;
    padding-top: 100px;
    div {
        width: 100%;
        margin-bottom: 32px;
        padding: 0px 16px;
    .MuiTypography-subtitle1 {
        padding-top: 16px;
        font-size: 18px;
        font-weight: 600;
        font-family: "Raleway";
        line-height: 1.33;
        @media (min-width: 692px) {
            font-size: 21px;
        }
    }
    img {
        max-width: 324px;
        width: 94%;
        object-fit: contain;
    }
    .MuiButton-root {
        max-width: 324px;
        width: 94%;
    }
    }

`
const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    cursor: pointer;
  }
`;
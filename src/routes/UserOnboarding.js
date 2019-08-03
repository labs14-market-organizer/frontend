import React from "react";
import { Box, Shadows, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import styled from "styled-components";

const UserOnboarding = () => {
    return (
        <div>
        <Navbar />

            <Explain>
                Cloud stands wants to provide you with the best possible experience. <br></br> Which best describes you roles?
            </Explain>
            <Link to="/createmarket" style={{textDecoration: "none"}} >
                    <StyleBox boxShadow={10} >
                        <Selected > Market Owner </Selected>
                    </StyleBox>
            </Link>
            <Link to="/createvendor" style={{textDecoration: "none"}}>
                <StyleBox boxShadow={10}>
                <Selected >Vendor</Selected>
            </StyleBox>
            </Link>
        </div>
    )
}

const StyleBox = styled(Box)`
        height: 25vh;
        width: 85vw; 
        margin-left: 5%; 
        margin-bottom: 20px; 
        text-align: center; 
        border-radius: 10px;
        margin-top: 20px;
        
`;
const Selected = styled.div`
        font-size: 22px;
        color: black;
        font-family: Raleway;
        font-weight: 600;
        height: 25vh;
        padding-top: 9.5vh;
`;
const Explain = styled.div`
        font-size: 16px;
        line-height: 24px;
        padding-top: 130px;
`;

export default UserOnboarding;
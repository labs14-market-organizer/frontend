import React from "react";
import { Box, Shadows, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import styled from "styled-components";

const UserOnboarding = () => {
    return (
        <div>
        <Typography>
            Cloud stands wants to provide you with the best possible experience.  Which best describes you roles?
        </Typography>
        <Link to="/createmarket" style={{textDecoration: "none"}} >
                <StyleBox boxShadow={10} >
                    <Typography > Market Owner </Typography>
                </StyleBox>
        </Link>
        <Link to="" style={{textDecoration: "none"}}>
            <Box boxShadow={10} style={{ height: '250px'}}>
                Vendor
           </Box>
        </Link>
        </div>
    )
}

const StyleBox = styled(Box)`
        height: '40vw';
        width: '90vw'; 
        marginLeft: '5%'; 
        marginBottom: "20px"; 
        textAlign: "center"; 
        borderRadius: "10px";
`;

export default UserOnboarding;
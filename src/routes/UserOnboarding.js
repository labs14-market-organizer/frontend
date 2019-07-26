import React from "react";
import { Box, Shadows, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const UserOnboarding = () => {
    return (
        <>
        <Typography>
            Cloud stands wants to provide you with the best possible experience.  Which best describes you roles?
        </Typography>
        <Link to="/createmarket" style={{textDecoration: "none"}} >
            <Box boxShadow={10} style={{ height: '40vw', width: '90vw', marginLeft: '5%', marginBottom: "20px", textAlign: "center", borderRadius: "10px" }}>
                <Typography > Market Owner </Typography>
            </Box>
        </Link>
        <Link to="" style={{textDecoration: "none"}}>
            <Box boxShadow={10} style={{ height: '250px'}}>
                Vendor
           </Box>
        </Link>
        </>
    )
}

export default UserOnboarding;
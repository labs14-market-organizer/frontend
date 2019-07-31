import React from "react";
import {
    TextField,
    Button,
    Typography,
    Container,
    Box
  } from "@material-ui/core";
import styled from "styled-components";
import Place from '../assets/place.svg'

class SearchMarkets extends React.Component {
    state = {
        search: ''
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };


    render() {
        return (
            <StyledContainer>
                <form>
                    <TextField
                        id="search"
                        label="Search Markets"
                        name="search"
                        placeholder="&#xf002; City, State or ZIP Code"
                        value={this.state.search}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                        style={{marginTop: "60px"}}
                    />
                </form>
           
                <StyleBox boxShadow={10} >
                    <p style={{fontWeight: "600"}}>Lafayette Farmers Market</p>
                    <p>Louisiana-proud, family owned farmers market</p>
                </StyleBox> 
                <StyleBox boxShadow={10} >
                    <p style={{fontWeight: "600"}}>Lafayette Farmers Market</p>
                    <p>Louisiana-proud, family owned farmers market</p>
                </StyleBox> 
                <StyleBox boxShadow={10} >
                    <p style={{fontWeight: "600"}}>Lafayette Farmers Market</p>
                    <p>Louisiana-proud, family owned farmers market</p>
                </StyleBox> 
            </StyledContainer>
        )
    }
}


const StyledContainer = styled(Container)`
    margin: 0 auto;
    max-width: 95vw;
    @media(min-width: 600px){
    width: 600px;
  }
`;
const StyleBox = styled(Box)`
        min-height: 108px;
        width: 85vw; 
        margin-left: 1%;  
        text-align: left; 
        border-radius: 10px;
        background-color: #edf3ea;
        margin-top: 32px;
        p {
            padding-left: 10px;
            padding-top: 5px;
            font-size: 18px;
            font-family: Raleway;
        }
        @media(min-width: 600px){
        margin: 0 auto;
        width: 500px;
        margin-top: 30px;
  }
`;

export default SearchMarkets;

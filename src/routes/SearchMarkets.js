import React from "react";
import {
    TextField,
    Button,
    Typography,
    Container,
    Checkbox
  } from "@material-ui/core";
  import styled from "styled-components";


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
                <TextField
                    id="search"
                    label="Search Markets"
                    defaultValue="City, State or Zip Code"
                    name="search"
                    value={this.state.search}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth={true}
                    autoComplete={true}
                    style={{marginTop: "60px"}}
                />
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
`

export default SearchMarkets;

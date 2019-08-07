import React from "react";
import {
    TextField,
    Button,
    Typography,
    Container,
    Box
  } from "@material-ui/core";
import styled from "styled-components";
import Place from '../assets/place.svg';
import { searchMarkets } from '../redux/actions/searchMarkets';
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { Mixpanel } from '../redux/actions/mixpanel';

class SearchMarkets extends React.Component {
    state = {
        search: ''
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
      startSearch = e => {
          e.preventDefault();
          Mixpanel.track(`User searched for markets in ${e.target.value}`);
          this.props.searchMarkets(e.target.value);
      }


    render() {
        return ( 
            <div>
            <Navbar />
            <StyledContainer>
           
                <form onSubmit={this.startSearch}>
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
                <StyledError>{this.props.searchError ? this.props.searchError : "" }</StyledError>
                {(this.props.marketsBySearch.marketsBySearch !== undefined) ? this.props.marketsBySearch.marketsBySearch.map(location => {
                    return (
                        <StyleBox boxShadow={10} key={location.id}>
                        <p style={{fontWeight: "600"}}>{location.name}</p>
                        <p>{location.description}</p>
                    </StyleBox>
                    )
                    
                }) : null }
                
            </StyledContainer>
            </div>
        )
    }
}


const StyledContainer = styled(Container)`
    margin: 0 auto;
    max-width: 95vw;
    padding-top: 100px;
    @media(min-width: 600px){
    width: 600px;
    padding-top: 100px;
  }
`;

const StyledError = styled.div`
    margin 0 auto;
    padding-left: 10px;
    padding-top: 5px;
    font-size: 18px;
    font-family: Raleway;
    color: #b21b2d;
`
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



const mapStateToProps = state => {
    return {
        ...state.checkMarketsByArea
    };
  };
  
  export default connect(
    mapStateToProps,
    { searchMarkets  }
  )(SearchMarkets);
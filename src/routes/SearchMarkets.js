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
import { searchMarkets, clearSearch } from '../redux/actions/searchMarkets';
import {localMarketSwitch} from '../redux/actions/marketData'
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { Mixpanel } from '../redux/actions/mixpanel';
import ViewMyMarket from "./ViewMyMarket";
import { keys } from "@material-ui/core/styles/createBreakpoints";

class SearchMarkets extends React.Component {
    state = {
        search: '',
        popup:  -1
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value

        });
      };
      handleClear = e => {
          setTimeout(this.props.clearSearch, 1000);
          this.setState({...this.state, search:''})
      }
      startSearch = e => {
          e.preventDefault();
          if(this.props.marketsBySearch.marketsBySearch) setTimeout(()=>this.props.searchMarkets(this.state.search), 1000);
          if (this.state.search === '') return null;
          Mixpanel.track(`User searched for markets in ${this.state.search}`);
          this.props.searchMarkets(this.state.search);
      }
      handleClick = (e,market) => 
      {
        this.props.localMarketSwitch(market);
        this.setState({...this.state, popup: 1})
      }

    render() {
        let popup = this.state.popup > 0 && !this.props.market.fetching && this.props.market.marketData;
        return ( 
            <div>
            <Navbar />
            <StyledContainer>
           
                <form onSubmit={this.startSearch} >
                    <div style={{display: "flex"}}>
                        <TextField
                            id="search"
                            label="Search Markets"
                            name="search"
                            placeholder="City, State or ZIP Code"
                            value={this.state.search}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            fullWidth={true}
                            style={{marginTop: "60px"}}
                        />
                        <div style={{margin: "60px -50px", fontSize: "2rem", color: this.state.search !== "" ? "#555": "#AAA", zIndex: 1, cursor: "pointer"}} onClick={this.handleClear}>x</div>
                    </div>
                </form>
                <StyledError>{this.props.searchError ? this.props.searchError : "" }</StyledError>
                <div id={this.props.marketsBySearch.marketsBySearch && this.state.search !=="" ? "visible" : "invisible"}>
                {(this.props.marketsBySearch.marketsBySearch !== undefined) ? this.props.marketsBySearch.marketsBySearch.map((location, index) => {
                    return (
                        <StyleBox boxShadow={10} key={location.id} name={index} onClick={e => this.handleClick(e, location)}>
                        <p style={{fontWeight: "600"}}>{location.name}</p>
                        <p>{location.description}</p>
                    </StyleBox>
                    )
                    
                }) : null }
                </div>
            </StyledContainer>
            {<Popup>
                <div id={popup ? "visible" : "invisible"}>
               { popup ? <ViewMyMarket backcb={()=> {this.setState({...this.state, popup: -1})}} /> : ""}
               </div>
            </Popup>}
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
  #visible {
        opacity: 1.0;
        height: 100%;
        transition: opacity 1s linear;
    }
  #invisible {
    opacity: 0.0;
    height: 0;
    transition: opacity 1s linear;
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

const Popup = styled.div`
    z-index: 10000;
    position: fixed;
    top: 0px;
    margin: 0 auto;
    overflow: scroll;
    max-height: 100vh;
    #visible {
        opacity: 1.0;
        transition: opacity 0.6s ease-in;
        background-color: white;
        min-height: 100vh;
        width: 100vw;
    }
  #invisible {
    opacity: 0.0;
    transition: opacity 0.15s ease-out;
    background-color: #FFFFFF00;
  }
`


const mapStateToProps = state => {
    return {
        ...state.checkMarketsByArea,
        market: {...state.checkMarketData}
    };
  };
  
  export default connect(
    mapStateToProps,
    { searchMarkets, clearSearch, localMarketSwitch }
  )(SearchMarkets);
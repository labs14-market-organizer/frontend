import React from "react";
import {
    TextField,
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
import NavbarVendor from "../components/Navbar"

class SearchMarkets extends React.Component {
    state = {
        search: '',
        popup:  -1,
        lastSearch: ''
    }
    clearError = 0;
    handleChange = e => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
      };
      handleClear = e => {
          setTimeout(this.props.clearSearch, 1000);
          this.setState({...this.state, search:''})
      }
      startSearch = e => {
          e.preventDefault();
          if(this.props.marketsBySearch.marketsBySearch) setTimeout(()=>this.props.searchMarkets(this.state.search), 500);
          if (this.state.search === '') return;
          if(this.state.lastSearch === this.state.search) return;
          Mixpanel.track(`User searched for markets in ${this.state.search}`);
          this.props.searchMarkets(this.state.search);
          this.setState({...this.state, clearError: false, lastSearch: this.state.search})
          this.clearError = 0;
      }
      handleClick = (e,market) => 
      {
        this.props.localMarketSwitch(market);
        this.setState({...this.state, popup: 1})
      }
    componentDidUpdate()
    {
      if(this.props.searchError) this.clearError++;
    }
    render() {
        let shouldClose = this.state.popup > 0 && !this.props.market.fetching && this.props.market.marketData;
        let popup = this.state.popup > -1 && !this.props.market.fetching && this.props.market.marketData;
        return ( 
            <div>
            <NavbarVendor />
            <div style={{overflowY: popup ? "hidden" : "scroll", width: "100vw", margin: "0 auto"}}>
            <StyledContainer >
           
                <form onSubmit={this.startSearch} >
                    <div style={{display: "flex"}}>
                        <TextField
                            id="search"
                            label="Search Markets"
                            name="search"
                            placeholder="City, State or ZIP Code"
                            value={this.state.search}
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            margin="normal"
                            variant="outlined"
                            fullWidth={true}
                            style={{marginTop: "60px"}}
                        />
                        <div style={{margin: "60px -50px", fontSize: "2rem", color: this.state.search !== "" ? "#555": "#AAA", zIndex: 1, cursor: "pointer"}} onClick={this.handleClear}>x</div>
                    </div>
                </form>
                <StyledError id={this.props.searchError && this.clearError < 3 ? "visible":"invisible"}>{this.props.searchError ? this.props.searchError : "" }</StyledError>
                <div id={this.props.marketsBySearch.marketsBySearch && this.state.search ===this.state.lastSearch && this.state.search !== '' ? "visible" : "invisible"}>
                {(this.props.marketsBySearch.marketsBySearch !== undefined) ? this.props.marketsBySearch.marketsBySearch.map((location, index) => {
                    return (
                        <StyleBox boxShadow={10} key={location.id} name={index} key={index} onClick={e => this.handleClick(e, location)}>
                        <p style={{fontWeight: "600", fontSize: "18px", marginLeft: "20px"}}>{location.name}</p>
                        <p style={{marginLeft: "20px"}}>{location.description}</p>
                    </StyleBox>
                    )
                    
                }) : null }
                </div>
            </StyledContainer>
            </div>
            {<Popup style={popup ? {} : {pointerEvents: "none"}}>
                <div id={shouldClose ? "visible" : "invisible"}>
               {popup ? <ViewMyMarket backcb={()=> {this.setState({...this.state, popup: 0}); setTimeout(()=> this.setState({...this.state, popup: -1}), 1000)}} /> : ""}
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
    min-height: 100vh;
    pointer-events: auto;
  }
  #visible {
        opacity: 1.0;
        height: 100%;
        transition: opacity 1s linear;
    }
  #invisible {
    opacity: 0;
    transition: opacity 0.5s linear;
    pointer-events: none;
  }
  #noscroll{
    overflow: hidden;
  }
`;

const StyledError = styled.div`
    margin: 0 auto;
    padding-left: 10px;
    padding-top: 5px;
    font-size: 18px;
    font-family: Raleway;
    color: #b21b2d;
    #visible {
      opacity: 1.0;
      height: 100%;
      transition: opacity 0.3s linear;
  }
#invisible {
  opacity: 0;
  transition: opacity 0.2s linear;
}
`
const StyleBox = styled(Box)`
        min-height: 108px;
        width: 85vw; 
        margin-left: 1%;  
        text-align: left; 
        border-radius: 10px;
        background-color: #edf3ea;
        margin-top: 32px;
        padding: 16;
        @media(min-width: 600px){
        margin: 0 auto;
        width: 500px;
        margin-top: 30px;
  }
`;

const Popup = styled.div`
    z-index: 20;
    position: fixed;
    top: 0px;
    margin: 0 auto;
    max-height: 100vh;
    overflow-y: scroll;
    #visible {
        opacity: 1.0;
        transition: opacity 0.6s ease-in;
        background-color: white;
        min-height: 100vh;
        min-width: 100vw;
    }
  #invisible {
    opacity: 0.0;
    pointer-events: none
    transition: opacity 0.4s ease-out;
    background-color: #FFFFFF00;
    min-height: 100vh;
    width: 100vw;
  }
`

const StyledTextField = styled(TextField)`
    .MuiInputBase-input {
        font-family: Roboto;
    }
    .MuiInputBase-root {
        font-family: Roboto;
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
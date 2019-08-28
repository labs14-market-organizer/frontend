import React from "react";
import {
    TextField,
    Container,
    Box
  } from "@material-ui/core";
import styled from "styled-components";
import Place from '../assets/place.svg';
import { searchMarkets, clearSearch } from '../redux/actions/searchMarkets';
import {localMarketSwitch, getMarketById} from '../redux/actions/marketData'
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { Mixpanel } from '../redux/actions/mixpanel';
import ViewMyMarket from "./ViewMyMarket";
import { keys } from "@material-ui/core/styles/createBreakpoints";
import NavbarVendor from "../components/NavbarVendor"
import icon from "../assets/keyboardarrowright.svg"
import {withRouter} from "react-router-dom";
import Upcoming from "./Upcoming.js";

class SearchMarkets extends React.Component {
 history = 0;
  constructor(props){ 
   super(props);
    this.state = {
        search: '',
        popup:  -1,
        lastSearch: ''
    }
  }
  clearError = 0;
    handleChange = e => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
        //if (e.target.value === '') this.props.history.push({location: this.props.history.location, search: ""});
        if(this.props.searchError) this.clearError++;
      };
      handleClear = e => {
          setTimeout(this.props.clearSearch, 1000);
          this.props.history.push({location: this.props.history.location, search: ""});
          this.setState({...this.state, search:''})
      }
      startSearch = e => {
          if(e) e.preventDefault();
          if(this.props.marketsBySearch.marketsBySearch) setTimeout(()=>this.props.searchMarkets(this.state.search), 500);
         if (this.state.search === '') return this.props.history.push({location: this.props.history.location, search: ""});
          if(this.state.lastSearch === this.state.search) return;
          Mixpanel.track(`User searched for markets in ${this.state.search}`);
          this.props.searchMarkets(this.state.search);
          this.props.history.push({location: this.props.history.location, search: "?q="+this.state.search})
          this.setState({...this.state, clearError: false, lastSearch: this.state.search})
          this.clearError = 0;
      }
      handleClick = (e,market) => 
      {
        this.props.localMarketSwitch(market);
        this.props.history.push({location: this.props.history.location, search: "?q="+ this.state.search + "&mid=" + market.id})
        this.setState({...this.state, popup: 1})
      }
    componentWillMount()
    {
      if(this.props.history.location.search)
      {
        this.parseUrl();
      }
    }
    componentWillUpdate()
    {
      if(this.history !== this.props.history.location.search)
      {
        this.parseUrl();
      }
      this.history = this.props.history.location.search;

    }
    componentDidUpdate()
    {
    }
    parseUrl()
    {
      let q = this.props.history.location.search.split("q=");
      if(q && q.length > 1 /* && q[1] !== this.state.search */)
      {
        q = q[1].split("&mid=");
        if(!q || q.length < 1) return;
        this.props.searchMarkets(q[0]);
        //if(q.length > 1) m = q[1];
        q = q[0];
      }else q = "";
      let m = this.props.history.location.search.split("mid=");
      if(m && m.length > 1)
      {
        m = parseInt(m[1]);
        console.log(m);
        if(m && m !== NaN)
        { 
          if(!this.props.market.marketData || m !== this.props.market.marketData.id)
          this.props.getMarketById(m);
        } else m = null;
      } else m = null;
        this.setState({...this.state, search: q, clearError: false, lastSearch: q, popup:  m ? 1 : -1});
      }
    render() {
        let shouldClose = this.state.popup > 0 && !this.props.market.fetching && !!this.props.market.marketData;
        let popup = this.state.popup > -1 && !this.props.market.fetching && !!this.props.market.marketData;
        // console.log(this.state.popup);
        return ( 
            <div>
            <NavbarVendor />
            <div style={{overflowY: popup ? "hidden" : "scroll", width: "100vw", margin: "0 auto"}}>
            <StyledContainer>
           
                <form onSubmit={this.startSearch} style={{paddingBottom: "0"}}>
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
                            style={{marginTop: "60px", marginBottom: "0px"}}
                        />
                        <div style={{marginTop: "60px", marginBottom: "20px", marginLeft: "-50px", marginRight: "-50px", fontSize: "2rem", color: this.state.search !== "" ? "#555": "#AAA", zIndex: 1, cursor: "pointer"}} onClick={this.handleClear}>x</div>
                    </div>
                </form>
                { <div id={(this.state.search.length < 1) ? "visible" : "invisible"}> <HorizontalBar/><Upcoming /></div>}
                <StyledError id={this.props.searchError && this.clearError < 3 ? "visible":"invisible"}>{this.props.searchError ? this.props.searchError : "" }</StyledError>
                <div id={this.props.marketsBySearch.marketsBySearch && this.state.search ===this.state.lastSearch && this.state.search !== '' ? "visible" : "invisible"}>
                {(this.props.marketsBySearch.marketsBySearch !== undefined) ? this.props.marketsBySearch.marketsBySearch.map((location, index) => {
                    return (
                        <StyleBox style={{position: "relative"}} boxShadow={10} key={location.id} name={index} key={index} onClick={e => this.handleClick(e, location)}>
                          <p style={{fontWeight: "600", fontSize: "18px", padding: "10px 20px 0 20px", fontFamily: "Raleway", fontSize: "18px"}}>{location.name}</p>
                          <div style={{display: "flex"}}>
                            <p style={{paddingLeft: "20px", marginTop: "-5px", width: "95%", fontFamily: "Roboto", fontSize: "16px"}} >{location.description}</p>
                            <img src={icon} style={{width: "24px", height: "24px", transform: "rotate(0deg)", marginTop: "-5px"}}/>
                          </div>
                        </StyleBox>
                    )
                    
                }) : null }
                </div>
            </StyledContainer>
            </div>
            {<Popup style={popup ? {} : {pointerEvents: "none"}}>
                <div id={shouldClose ? "visible" : "invisible"}>
                <ViewMyMarket 
                  backcb={()=> 
                    {
                      this.props.history.push({location: this.props.history.location, search: "?q=" + this.state.search});
                      this.setState({...this.state, popup: 0}); 
                      setTimeout(()=> this.setState({...this.state, popup: -1}), 400)
                    }
                  } 
                /> 
               </div>
            </Popup>}
            </div>
        )  
    }
}

const StyledContainer = styled(Container)`
    margin: 0 auto;
    max-width: 100vw;
    padding-top: 100px;
    width: 600px;
    padding-top: 100px;
    min-height: 100vh;
    pointer-events: auto;
  #visible {
        opacity: 1.0;
        height: 100%;
        transition: opacity 1s linear;
    }
  #invisible {
    opacity: 0;
    transition: opacity 0.5s linear;
    pointer-events: none;
    height: 0;
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
        width: 100vw;  
        text-align: left; 
        background-color: #edf3ea;
        margin-top: 32px;
        margin-left: -19px; 
        margin: 0 auto;
        width: 500px;
        max-width: 95vw;
        margin-top: 30px;
`;

const Popup = styled.div`
    z-index: 20;
    position: fixed;
    top: 0px;
    margin: 0 auto;
    max-height: 100vh;
    min-width: 100vw;
    overflow-y: scroll;
    #visible {
        opacity: 1.0;
        transition: opacity 0.6s ease-in, min-width 5s linear;
        background-color: white;
        min-height: 100vh;
        min-width: 100vw;
    }
  #invisible {
    opacity: 0.0;
    pointer-events: none
    transition: opacity 0.4s ease-out, min-width 5s linear;
    background-color: #FFFFFF00;
    min-height: 100vh;
    min-width: 100vw;
  }
`
const HorizontalBar = styled.div `
  border-bottom: 1px #8e8e8c solid
  width: 100%; 
  height: 20px;
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
    { searchMarkets, clearSearch, localMarketSwitch, getMarketById }
  )(withRouter(SearchMarkets));
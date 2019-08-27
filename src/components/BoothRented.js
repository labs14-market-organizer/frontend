import React from "react";
import NavbarVendor from "../components/NavbarVendor";
import { connect } from "react-redux";
import styled from "styled-components";
import icon from "../assets/keyboardarrowright.svg"
import { Box, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { deleteVendor } from "../redux/actions/vendorData";
import { getMarketById } from "../redux/actions/marketData";
import Arrow from "../assets/ic-arrow-back.svg";
import Expandor from '../components/Expandor';
import militaryConvert from "./militaryConvert";
// import deleteBoothReservation from "../redux/actions/boothReserve";

class BoothRented extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        page: false
    };
    }
    componentDidMount() {
        let marketId = this.props.match.params.marketid;
        this.props.getMarketById(marketId)
        this.changePage();
        
    }
    goBack = () => {
        return this.props.history.goBack();
      };
    

    changePage = () => { //timeout function that will originally set opacity to 0 and switch when this.state.page === true
        setTimeout(() => {
            this.setState({
                page: true
            })
        }, 300)
        
    };

    deleteReservation = () => { //reservationId, boothId, marketId, date
        let marketId = this.props.match.params.marketid;
        let boothId = this.props.match.params.boothid;

    }

    render() {
        let marketId = this.props.match.params.marketid;
        let boothId = this.props.match.params.boothid;
        let market = this.props.market.marketData;
        // if(checkMarketData.fetching || !checkMarketData.marketData) return <div/>;
        console.log(market)
        let tag = {
            fontFamily: "Raleway",
            fontSize: "16px",
            fontWeight: "600",
            fontStyle: "normal",
            fontStretch: "normal",
            lineHeight: "1.5",
            letterSpacing: "normal",
            color: "#000000",
            marginBottom: "4px",
            marginLeft: "-20px"
          }
          let subtag = {
            fontFamily: "Raleway",
            fontSize: "12px",
            fontWeight: "600",
            fontStyle: "normal",
            fontStretch: "normal",
            lineHeight: "1.33",
            letterSpacing: "normal",
            color: "#000000",
            marginBottom: "7px"
          }
          let text ={
            fontFamily: "Roboto",
            fontSize: "16px",
            fontWeight: "300",
            fontStyle: "normal",
            fontStretch: "normal",
            lineHeight: "1.5",
            letterSpacing: "normal",
            color: "#000000",
            marginBottom: "2px"
          }
          var button = 
          {
            width: "80vw",
            maxWidth: "500px",
            height: "60px",
            fontSize: "18px",
            fontFamily: "Raleway",
            fountWeight: "600",
            borderRadius: "5px",
            border: "solid 1px rgba(0, 0, 0, 0.1)",
            letterSpacing: "0.75px",
            backgroundColor: "#478529",
            color: "#FFF",
            marginTop: "4%",
            trasition: "color 10s linear"
          }
        const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        
        return !market
            ? (<></>)
            : (<div style={{height: "100vh"}}>
                    <Header>
                        <StyledImg src={Arrow} onClick={this.goBack} />
                        <CreateHeader>View Booth</CreateHeader>
                    </Header>
                    <div style={{ opacity: (this.state.page) ? "1" : "0" , transition: "opacity 1s",  marginLeft: "2%" }}>
                        <StyledP>{market.name}</StyledP>
                        <Flex><Tag>Date</Tag> <Tag>Time</Tag></Flex>
                        <div style={{marginTop: "20px", marginBottom: "10px"}}>
                            <Expandor _width="600px">
                            <div>
                            <div></div>
                            <div style={tag}>Your Booth Info</div>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                
                                <div style={text}>{market.booths.map(booth => {
                                    return (parseInt(booth.id) === parseInt(boothId)) ? <div>
                                    <div style={subtag}><em aria-hidden="true"> </em> Booth Size</div>
                                        {booth.size[0]} X {booth.size[1]}
                                    <div style={subtag}><em  aria-hidden="true"> </em>Booth Price</div>
                                        {booth.price}
                                    <div style={subtag}><em  aria-hidden="true"> </em>Booth Description</div>
                                        {booth.description} </div> : null })
                                }</div>
                            </div> 
                        </div>
                        </Expandor>
                        </div>
                        <Expandor _width="600px" >
                        <div>
                        <div><i class="fa fa-map-marker" style={{fontSize: "20px"}}></i></div>
                        <div style={tag}>Market Info</div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                            <div style={subtag}><em class="fa fa-map-marker" aria-hidden="true"> </em> Address</div>
                            <div style={text}>{market.address}, {market.city}, {market.state} {market.zipcode}</div>
                            <div style={subtag}><em class="fa fa-calendar" aria-hidden="true"> </em> Hours</div>
                            <div style={{display: "flex", justifyContent: "space-between", width: "85vw", maxWidth: "400px"}}>
                                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%"}}>
                                { market.operation.map(opHours =>
                                    <div style={text}><div style={{fontWeight: opHours.start ? "400" : ""}} >{opHours.day.charAt(0).toUpperCase() + opHours.day.slice(1)}</div></div>
                                )}
                                </div>
                                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%"}}>
                                { market.operation.map(opHours =>
                                <div><div style={text}>{opHours.start === null ? <span>CLOSED</span> : <span style={{fontWeight: "400"}}>{`${militaryConvert(opHours.start)} - ${(militaryConvert(opHours.end))}`}</span>}</div></div>
                                )}
                                </div>
                            </div>
                        </div> 
                    </div>
                    </Expandor>
             <div style={{margin: "5px"}}/>
                { (market.email && market.email.length > 0) || (market.phone && market.phone.length > 0) ? 
                <Expandor _width="600px">
                <div>
                    <div><i class="fa fa-2x fa-address-book-o" style={{fontSize: "20px"}}></i></div>
                        <div style={tag}>Contact Info</div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                        {market.email && market.email.length > 0 ? <><div style={subtag}><em class="fa fa-at" aria-hidden="true"> </em> Email Address</div>
                        <div style={text}>{market.email}</div></> : ""}
                        {market.phone && market.phone.length > 0 ? <><div style={subtag}><em class="fa fa-phone" aria-hidden="true"> </em> Phone Number</div>
                        <div style={text}>{market.phone}</div></> : ""}
                    </div>
                </div>
                </Expandor> : ""}
             <div />
             <div style={{ marginTop: "10px"}}>
             { (market.website !== null && market.website.length > 0) || (market.facebook !== null && market.facebook.length > 0) || (market.instagram !== null && market.instagram.length > 0) || (market.twitter !== null  && market.twitter.length > 0) ?
             <Expandor _width="600px" >
               <div id="alt">
               <div><i class="fa fa-2x fa-globe" style={{fontSize: "20px"}}></i></div>
                <div style={tag}>Social Media</div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                  {(market.website !== null && market.website.length > 0) ? <><div style={subtag}><em class="fa fa-globe" aria-hidden="true"> </em> Website</div> <div onClick={()=>openInNewTab(`http://${market.website}`)} style={text}>{market.website}</div></> : null}
                  {(market.facebook !== null && market.facebook.length > 0) ? <> <div style={subtag}><em class="fa fa-facebook-square" aria-hidden="true"> </em> Facebook</div> <div onClick={()=>openInNewTab(`http://www.facebook.com/${market.facebook}`)}style={text}>{market.facebook}</div> </> : null}
                  {(market.instagram !== null) && market.instagram.length > 0 ? <> <div style={subtag}><em class="fa fa-instagram" aria-hidden="true"> </em> Instagram</div> <div onClick={()=>openInNewTab(`http://www.instagram.com/${market.instagram}`)} style={text}>{market.instagram}</div></> : null}
                  {(market.twitter !== null)  && market.twitter.length > 0 ? <> <div style={subtag}><em class="fa fa-twitter-square" aria-hidden="true"> </em> Twitter</div> <div onClick={()=>openInNewTab(`http://www.twitter.com/${market.twitter}`)} style={text}>{market.twitter}</div> </> : null}
                </div>
               </div>
              
             </Expandor>: ""}
        </div>
             <div style={{marginTop: "10px"}}>
              <Expandor _width="600px">
                    <div>
                            <div>
                                <i className="fa fa-file-text" style={{fontSize: "20px"}}></i>
                            </div>
                            <div style={{...tag, marginBottom: "0px"}}>
                                Market Rules
                            </div>
                        <div>
                            <BorderedBox>
                            <ScrollOverride>
                                <div>{market.rules}</div>
                            </ScrollOverride>
                            </BorderedBox>
                    
                        </div>
                    </div>
                </Expandor>
            </div>
            </div>
            <StyledButton onClick={this.deleteReservation}>CANCEL BOOTH</StyledButton>
    </div>
        )
    }
};
const Flex = styled.div`
    display: flex;
`;
const StyledP = styled.p`
    font-family: Raleway;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
`;
const Tag = styled.p`
    font-family: Raleway;
    font-size: 12px;
    font-weight: 600;
    width: 60%;
    text-align: left;
`
const StyledButton = styled(Button)`
    width: 300px;
    margin: 50px auto 20px auto;
    height: 60px;
    border: 1px solid #b21b2d;
    border-radius: 5px;
    font-family: Raleway;
    font-size: 18px;
    color: #b21b2d;
`;
const Header = styled.div`
    display: flex;
    background-color: #478529;
    color: white;
    height: 60px;
    `;
        
const StyledImg = styled.img`
    margin-left: 16px;
    margin-top: 0;
    cursor: pointer; 
    margin-right: 16px; 
        
    `;
const CreateHeader = styled.h4`
    margin-top: 20px;
    font-family: Raleway;
    font-size: 18px;
`;
const ScrollOverride = styled.div `
  max-height: 324px;
  max-width: 330; 
  padding-left: 20px;
  padding-right: 4px;
  overflow-y: scroll;
  font-family: Roboto; 
  font-size: 16px; 
  text-align: left; 
::-webkit-scrollbar {
  width: 10px;
  right: -500px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #97979700; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #478529; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #175500; 
}

`;
const BorderedBox = styled.div `
max-height: 324px;
max-width: 330;
padding: 2px 2px 2px 0;
border: 1px solid #979797;
border-radius: 10px;
`;

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
};


const mapStateToProps = state => {
    return {
        user: {...state.checkUserData},
        market: {...state.checkMarketData},
        reserve: {...state.checkBoothReserve},
        vendor: {...state.checkVendorData}
    }
}
    
export default connect( mapStateToProps,
        {deleteVendor, getMarketById })(withRouter(BoothRented));

 
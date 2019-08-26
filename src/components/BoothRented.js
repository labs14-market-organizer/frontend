import React from "react";
import NavbarVendor from "../components/NavbarVendor";
import { connect } from "react-redux";
import styled from "styled-components";
import icon from "../assets/keyboardarrowright.svg"
import { Box } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { deleteVendor } from "../redux/actions/vendorData";
import { getMarketById } from "../redux/actions/marketData";
import Arrow from "../assets/ic-arrow-back.svg";
import Expandor from '../components/Expandor';

class BoothRented extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        page: false
    };
    }
    componentDidMount() {
        // let marketId = this.props.match.params.marketid;
        // let boothId = this.props.match.params.boothid;
        // this.props.getMarketById()
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
    render() {
        // let marketId = this.props.match.params.marketid;
        // let boothId = this.props.match.params.boothid;
        // console.log(this.props.match.params)
        return (
            <div>
                <Header>
                    <StyledImg src={Arrow} onClick={this.goBack} />
                    <CreateHeader>View Booth</CreateHeader>
                </Header>
                <div style={{ opacity: (this.state.page) ? "1" : "0" , transition: "opacity 1s" }}>
                {/* <Expandor _width="600px" >
                <div>
                <div><i class="fa fa-map-marker" style={{fontSize: "20px"}}></i></div>
                <div style={tag}>Market Info</div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <div style={subtag}><em class="fa fa-map-marker" aria-hidden="true"> </em> Address</div>
                    <div style={text}>{market.address}, {market.city}, {market.state} {market.zipcode}</div>
                    <div style={subtag}><em class="fa fa-calendar" aria-hidden="true"> </em> Hours</div>
                    <div style={{display: "flex", justifyContent: "space-between", width: "85vw", maxWidth: "400px"}}>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%"}}>
                        { this.state.operation.map(opHours =>
                            <div style={text}><div style={{fontWeight: opHours.start ? "400" : ""}} >{opHours.day.charAt(0).toUpperCase() + opHours.day.slice(1)}</div></div>
                        )}
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%"}}>
                        { this.state.operation.map(opHours =>
                        <div><div style={text}>{opHours.start === null ? <span>CLOSED</span> : <span style={{fontWeight: "400"}}>{`${militaryConvert(opHours.start)} - ${(militaryConvert(opHours.end))}`}</span>}</div></div>
                        )}
                        </div>
                    </div>
                </div> 
                </div>
                </Expandor> */}
             {/* <div style={{margin: "5px"}}/>
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
              <Expandor _width="600px" expanded={acceptedRules === 0 && !this.disabled ? "panel2": false} force={this.disabled}>
              <div>
                <div><i className="fa fa-file-text" style={{fontSize: "20px"}}></i></div>
                  <div style={{...tag, marginBottom: "0px"}}>Market Rules</div>
                  <div>
                    <div style={{fontFamily: "Roboto", fontSize: "16px", fontWeight: "500", textAlign: "left", marginLeft: "-5%", marginTop:"-2%", marginBottom: "3%"}}>
                        By confirming a booth, you are agreeing to this market's Rules and Code of Conduct
                    </div>
                    <BorderedBox>
                    <ScrollOverride>
                      <div>{market.rules}</div>
                      </ScrollOverride>
                    </BorderedBox>
                    {acceptedRules === 1 && !this.disabled ? <ErrorDiv>You Have Already Accepted The Rules</ErrorDiv> : <div style={{height: "12px", marginTop: "2px"}}/>}
                    {acceptedRules > -1 ? <div><Button style={acceptedRules > 0  ? buttonDisabled : button} disabled={acceptedRules > 0} onClick={()=> {this.props.requestReservationPermissions(market.id); setTimeout(()=> this.disabled= true, 200); setTimeout(()=> this.disabled= false, 1000)}}>{"Accept"}</Button></div> : <div/>}
                </div>
                */}
                </div> 
            </div>
        )
    }
}

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

const mapStateToProps = state => {
    return {
        user: {...state.checkUserData},
        market: {...state.checkMarketData},
        reserve: {...state.checkBoothReserve},
        vendor: {...state.checkVendorData}
    }
}
    
export default connect( mapStateToProps,
        {deleteVendor, getMarketById})(withRouter(BoothRented));

 
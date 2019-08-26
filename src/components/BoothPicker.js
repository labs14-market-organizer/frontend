import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {Button, Typography} from '@material-ui/core'
import Expandor from "./Expandor"
import styled from "styled-components";
import {createReservation, getBoothReservations, deleteBoothReservation, getVendorsWhoRented} from '../redux/actions/boothReserve';
import {connect} from 'react-redux';
import {getUserData} from '../redux/actions/userData';
import { Link } from 'react-router-dom';



class BoothPicker extends React.Component 
{
  lastDate = new Date();
  disable = false;
  updateTimer = null;
  oldVendors = [];
  constructor(props)
  {
    super(props);
    var d = new Date();
    //look forward a year and see if the market is open
    for(var i = 0; i < 360; i++) {
      if(!this.checkHours(d,props.market.operation)) break;
      d.setDate(d.getDate() + 1);
    }
    this.state =
    {
        date: d,
        vendors: false
    }
  }
  
  handleDateChange(date) {
    this.props.getBoothReservations(this.props.market.id, formatDate(date))
    this.props.getVendorsWhoRented(this.props.market.id, formatDate(date))
    this.setState({...this.state, date: date})
  }
  convertObjectToNumberDay(opp)
  {
    const days = ["sunday", "monday","tuesday","wednesday","thursday","friday","saturday"]
    return opp.map(x=> days.map((y,i)=> x.day === y ? i : -1 ).filter(x=> x > -1)[0]);
  }
  checkHours(date,opp)
  {
    let t = new Date();
    if(new Date(date.toDateString()) < new Date(new Date().toDateString())) return true;
    let o = this.convertObjectToNumberDay(opp);
    return o.filter(x=> x === date.getDay()).length < 1;
  }
 componentWillMount()
 {
   this.props.getBoothReservations(this.props.market.id, formatDate(this.state.date))
   this.props.getVendorsWhoRented(this.props.market.id, formatDate(this.state.date))
   if(this.updateTimer) clearInterval(this.updateTimer);
   this.updateTimer = setInterval(() =>{
    if(this.props.reserve.fetching) return;
    this.props.getBoothReservations(this.props.market.id, formatDate(this.state.date), true)
    this.props.getVendorsWhoRented(this.props.market.id, formatDate(this.state.date), true)
    } ,1000);
 }
 componentWillUnmount()
 {
  if(this.updateTimer) clearInterval(this.updateTimer);
 }
 componentWillUpdate()
 {
   if(this.props.reserve.error ) { if(this.updateTimer)clearInterval(this.updateTimer); } //clear timer if there is an error
   else if(!this.updateTimer) { //reinstantiate timer on next update
    this.updateTimer = setInterval(() =>{
      if(this.props.reserve.fetching) return;
      this.props.getBoothReservations(this.props.market.id, formatDate(this.state.date), true)
      this.props.getVendorsWhoRented(this.props.market.id, formatDate(this.state.date), true)
    } ,100);
    
  }
   if(!this.props.user.userData && !this.props.user.fetching) this.props.getUserData();
 }
 componentDidUpdate()
 {
   if(this.props.reserve.vendorsWhoRented && !this.disable) this.oldVendors = this.props.reserve.vendorsWhoRented;
 }

 vendorsDetailsToggle = (item) => {
  if (item === "1" && this.state.vendors === true) {
    this.setState({
     ...this.state,
     vendors: !this.state.vendors
   })
  } else if (item === "2" && this.state.vendors === false) {
    this.setState({
      ...this.state,
      vendors: !this.state.vendors
    })
  }
   
 }

 createReservation = (marketId, boothId) => {
   this.props.createReservation(marketId, boothId, formatDate(this.state.date));
 }
render()
{
    var market = this.props.market;
    market.booths.map(x=> 
      {
        var r = this.props.reserve && !this.props.reserve.fetching && this.props.reserve.reserveData && !this.disable ? this.props.reserve.reserveData.filter(y => x.id === y.id) : null; 
        x.number = r ? r.length > 0 ? r[0].available : 0 : -1;
        return x;
      });
    
    var price =
    {
        fontFamily: 'Roboto',
        fontSize: '18px',
       fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '0.89',
        letterSpacing: 'normal',
        color: "#478529"
    }
    var title =
    {
      fontFamily: 'Raleway',
      fontSize: '18px',
     fontWeight: '600',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: '1.33',
      letterSpacing: 'normal',
      color: "#000000"
    }
    var subtitle = 
    {
      fontFamily: 'Roboto',
      fontSize: '12px',
     fontWeight: '500',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: '1.33',
      letterSpacing: 'normal',
      color: "#ce8400"
    }
    var minitile = 
    {
      fontFamily: "Raleway",
      fontSize: '12px',
      fontWeight: '600',
      lineHeight: '1.33',
      color: "#000"
    }
    var maintext =
    {
      fontFamily: "Raleway",
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.5',
      color: "#000"
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
      transition: "border-color 0.4s ease-out, color 0.4s ease-out, background-color 0.4s ease-out"
    }
    var buttonDisabled =
    {
      ...button,
      backgroundColor: "#FFF",
      borderColor: "#AAA",
      color: "#AAA"
    }
    var buttonRed = 
    {
      ...button,
      backgroundColor: "#FFF",
      borderColor: "#b21b2d",
      color: "#b21b2d"
    }

    let showing1 = (this.state.vendors) ? "showing" : "notshowing";
    let showing = (this.state.vendors) ? "notshowing" : "showing";
    var acceptedRules = this.props.vendor.vendorData && this.props.vendor.vendorData.status_mkt ? this.props.vendor.vendorData.status_mkt.find(x=> x && x.market_id === market.id && x.market_id) ? 1 : 0 : -1;
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                disableToolbar
                shouldDisableDate={(d)=>this.checkHours(d,market.operation)}
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Reservation Day"
                value={this.state.date}
                onChange={(d) => this.handleDateChange(d)}
                myDatePickerOptions={{closeAfterSelect: true}}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            </MuiPickersUtilsProvider>
            <div style={{maxWidth: "600px", margin: "0 auto"}}>
              <div style={{display: "flex", justifyContent: "space-around", width: "95vw", maxWidth: "550px"}}>
                <StyledPButton onClick={() => this.vendorsDetailsToggle("1")} style={this.state.vendors ?{ fontWeight: "500" } : { fontWeight: "bold" }}>Details</StyledPButton>
                <StyledPButton style={this.state.vendors ? { fontWeight: "bold" } : { fontWeight: "500" }} onClick={() => this.vendorsDetailsToggle("2")}>Vendors</StyledPButton>
              </div>
              <div>
                <hr style={{marginLeft: "10px", marginRight: "10px", marginBottom: "15px"}}></hr>
              </div>
            </div>
            <div style={{maxWidth: "600px", margin: "0 auto"}}>
              { this.props.reserve.error ? <ErrorDiv>{ String(this.props.reserve.error)}</ErrorDiv>
              :
              <Expandor _width="600px">
                {market.booths.map((x,i) => {
                  let checker = this.checkUsed(x);
                  var creating = this.props.reserve && this.props.reserve.reserveData && !this.props.reserve.fetch && checker !== -1 ? checker ? 1 : 0 : -1;
                  var ban = x.number < 1 && creating > 0;
                  var loading = !this.props.reserve.vendorsWhoRented;
                  return (
                    <Booth key={i}>
                        <div id="price" style={price}>{`$${Math.round(x.price)}`}</div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                          <div style={title}>{x.name}</div>
                          <div style={{...subtitle, display: "flex"}}><div style={{marginRight: "10%"}}>{`Avaliable: `}</div> <div>{x.number < 0 ? <Spinner/> : <span>{x.number > -1 ? x.number : ""}</span>}</div></div>
                        </div>
                        { (!this.state.vendors) ?
                        <div>
                          <div style={{display: "flex", flexDirection: "row", marginBottom: "2%"}}>
                            <div  style={{display: "flex", flexDirection: "column", alignItems: "flex-start", marginRight: "40%"}}>
                              <div style={minitile}>Booth Size</div>
                              <div style={maintext}>{`${x.size && x.size.length > 0 ? x.size[0] : "N/a"} ft. x ${x.size && x.size.length > 1 ? x.size[1] : "N/a"} ft.`}</div>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                              <div style={minitile}>Booth Price</div>
                              <div style={maintext}>${x.price}</div>
                            </div>
                          </div>
                          {x.description ? <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                            <div style={minitile}>Booth description</div>
                            <div style={{textAlign: "left", ...maintext}}>{x.description}</div>
                          </div> : null} 
                          
                          {acceptedRules === 0 ? <ErrorDiv>Must Accept Rules Before Reserving</ErrorDiv> : <div/>}
                          {/* <Button style={loading || this.props.reserve.fetching || this.disable || acceptedRules  < 1 || ban || creating < 0 ? buttonDisabled : creating > 0 ? button : buttonRed} onClick={()=>{if(this.disable) return; this.disable = true; setTimeout(()=>this.disable=false, 1000); this.setState({...this.state}); creating > 0 ?  this.createReservation(market.id, x.id) : this.fireDelete(x);}} disabled={loading || this.props.reserve.fetching || this.disable || acceptedRules < 1 || ban || creating < 0}>{creating > 0 ? "Rent Booth" : creating === 0 && !this.disable ? "Delete Reservation": "Loading"}</Button> */}
                          <Link to={`/rentbooth/${market.id}/${x.id}/${this.state.date}`} style={{textDecoration: "none"}}>
                           <Button style={loading || this.props.reserve.fetching || this.disable || acceptedRules  < 1 || ban || creating < 0 ? buttonDisabled : creating > 0 ? button : buttonRed} onClick={()=>{if(this.disable) return; this.disable = true; setTimeout(()=>this.disable=false, 500); this.setState({...this.state}); }} disabled={loading || this.props.reserve.fetching || this.disable || acceptedRules < 1 || ban || creating < 0}>Rent Booth</Button>
                          </Link>
                        </div> : <div>
                        <div style={{fontFamily: "Roboto", fontSize: "12px", fontWeight: "500", color: "#044d4c", display: "flex", justifyContent: "flex-start"}}><div style={{marginRight: "1%"}}>Vendors: </div><div>{this.props.reserve.vendorsWhoRented && !this.disable ? this.props.reserve.vendorsWhoRented.filter(y=> y.booth_id === x.id).length : this.disable ? <Spinner/> : ""}</div></div>
                          {(this.props.reserve.vendorsWhoRented !== undefined && this.props.reserve.vendorsWhoRented !== null && !this.disable ) ? <>
                            {this.props.reserve.vendorsWhoRented.map(renter => {
                              return (renter.booth_id === x.id) ? 
                            <div style={{textAlign: "left", fontFamily: "Raleway", fontSize: "16px"}}>{renter.name}</div> : <div></div>
                          })}{this.props.reserve.vendorsWhoRented === 1 && !this.props.reserve.vendorsWhoRented[0].id  ? <ErrorDiv style={{textAlign: "left", fontSize: "11px", margin: "0", padding: "0"}}>{this.props.reserve.vendorsWhoRented[0]}</ErrorDiv>: this.props.reserve.vendorsWhoRented.filter(y=> y.booth_id === x.id).length < 1 ? <ErrorDiv style={{textAlign: "left", fontSize: "11px", margin: "0", padding: "0"}}>No Vendors Reserved This Booth On This Date</ErrorDiv> : ""} </> 
                          : <>
                            {this.oldVendors.map(y=> y.booth_id === x.id ? <div style={{textAlign: "left", fontFamily: "Raleway", fontSize: "16px"}}>{y.name}</div> : "")} 
                          <Spinner/> </> } 
                          {acceptedRules === 0 ? <ErrorDiv>Must Accept Rules Before Reserving</ErrorDiv> : <div/>}
                          {/* <Button style={loading || this.props.reserve.fetching || this.disable || acceptedRules  < 1 || ban || creating < 0 ? buttonDisabled : creating > 0 ? button : buttonRed} onClick={()=>{if(this.disable) return; this.disable = true; setTimeout(()=>this.disable=false, 500); this.setState({...this.state}); creating > 0 ?  this.createReservation(market.id, x.id) : this.fireDelete(x);}} disabled={loading || this.props.reserve.fetching || this.disable || acceptedRules < 1 || ban || creating < 0}>{creating > 0 ? "Rent Booth" : creating === 0 && !this.disable ? "Delete Reservation": "Loading"}</Button> */}
                          <Link to={`/rentbooth/${market.id}/${x.id}/${this.state.date}`} style={{textDecoration: "none"}}>
                           <Button style={loading || this.props.reserve.fetching || this.disable || acceptedRules  < 1 || ban || creating < 0 ? buttonDisabled : creating > 0 ? button : buttonRed} onClick={()=>{if(this.disable) return; this.disable = true; setTimeout(()=>this.disable=false, 500); this.setState({...this.state});}} disabled={loading || this.props.reserve.fetching || this.disable || acceptedRules < 1 || ban || creating < 0}>Rent Booth</Button>
                          </Link>
                        </div> } 
                        
                      </Booth>
                    )
                  }
                  )}
                  
              </Expandor> }
            </div> 
            <div style={{padding: "25px"}}/>
        </div> 

    );
}
// creating > 0 ? "Rent Booth" : creating === 0 && !this.disable ? "Delete Reservation": "Loading" ///inside {button}
  checkUsed = (x) =>
  {
    if(!this.props.reserve.reserveData) return -1;
    let r = this.props.reserve.reserveData.filter(y => x.id == y.id)[0];
    return r  && r.user_vdrs && r.user_vdrs.length > 0  && r.user_vdrs.filter(z => z === this.props.vendor.vendorData.id).length > 0 ? 0 : 1;
  }
  fireDelete = (x)=>
  {
    if(!this.props.user || !this.props.user.userData) return;
    var ruser = this.props.user.userData.upcoming_vdr;
    if(!ruser && ruser.length < 1 ) return;
    ruser = ruser.filter(y=> x.id === y.booth_id && x.market_id === y.market_id)
    if(ruser.length < 1) return;
    this.props.deleteBoothReservation(ruser[0].id, ruser[0].booth_id, ruser[0].market_id, formatDate(this.state.date));
  } 
}



function formatDate(date)
{
  let d = date.getDate();
  let m = date.getMonth()+1;
  let y = date.getFullYear();
  d = parseInt(d) < 10 ? `0${d}` : d;
  m = parseInt(m) < 10 ? `0${m}` : m;
  return `${y}-${m}-${d}`;
}

Date.prototype.isSameDateAs = function(pDate) {
  return (
    this.getFullYear() === pDate.getFullYear() &&
    this.getMonth() === pDate.getMonth() &&
    this.getDate() === pDate.getDate()
  );
}


const ErrorDiv = styled.div`
  margin 0 auto;
  padding-left: 10px;
  padding-top: 5px;
  font-size: 18px;
  font-family: Raleway;
  color: #b21b2d;
`

const Spinner = styled.div`
border: 2pt solid #aaa;
border-radius: 100%;
border-top: 2pt solid #478529;
width: 8px;
height: 8px;
-webkit-animation: spin 2s linear infinite; /* Safari */
animation: spin 2s linear infinite;
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`
const Booth = styled.div `
    display: flex;
    align-items: flex-end;
`;


const StyledP = styled.p`
  font-size: 18px;
  font-family: Raleway;
  .showing {
    font-size: 25px;
    font-weight: bold;
    font-size: 18px;
    font-family: Raleway;
  }
  .notshowing {
    font-weight: 0;
    font-size: 18px;
    font-family: Raleway;
  }
`;
const StyledPButton = styled(StyledP)`
  padding 10px 10%;
  cursor: pointer;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`
const mapStateToProps = (state) =>
{
  return {
    reserve: {...state.checkBoothReserve},
    user: {...state.checkUserData},
    vendor: {...state.checkVendorData}
  }
}
export default connect(mapStateToProps, {createReservation, getBoothReservations, deleteBoothReservation, getUserData, getVendorsWhoRented})(BoothPicker);


/* {
  "id": 9,
  "admin_id": 7,
  "name": "Lafayette Farmers Market",
  "description": "Super cool stuff",
  "address": "123 Lafayette St",
  "city": "Lafayette",
  "state": "LA",
  "zipcode": "70508",
  "type": 1,
  "website": null,
  "facebook": "",
  "twitter": "",
  "instagram": "",
  "created_at": "2019-08-08T17:25:42.214Z",
  "updated_at": "2019-08-08T17:27:34.390Z",
  "operation": [
    {
      "id": 15,
      "market_id": 9,
      "day": "tuesday",
      "start": "17:00:00",
      "end": "20:00:00"
    },
    {
      "id": 16,
      "market_id": 9,
      "day": "wednesday",
      "start": "17:00:00",
      "end": "20:00:00"
    }
  ],
  "booths": [
    {
      "id": 1,
      "market_id": 9,
      "name": "Section A",
      "number": 40,
      "price": "25.00",
      "size": [
        5,
        5
      ],
      "description": ""
    },
    {
      "id": 2,
      "market_id": 9,
      "name": "Section B",
      "number": 10,
      "price": "30.00",
      "size": [
        10,
        10
      ],
      "description": "These booths do not come with electricity or a water hook up. Wifi is available throughout the market"
    },
    {
      "id": 3,
      "market_id": 9,
      "name": "Section C",
      "number": 5,
      "price": "50.00",
      "size": [
        15,
        10
      ],
      "description": "These booths do not come with electricity or a water hook up. Wifi is available throughout the market"
    }
  ]
} */
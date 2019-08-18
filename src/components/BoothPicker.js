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
import {createReservation, getBoothReservations, deleteBoothReservation, getVendorsWhoRented} from '../redux/actions/boothReserve'
import {connect} from 'react-redux';
import {getUserData} from '../redux/actions/userData'



class BoothPicker extends React.Component 
{
  lastDate = new Date();
  disable = false;
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
    this.props.getVendorsWhoRented(this.props.market.id, formatDate(this.state.date))
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
 }
 componentWillUpdate()
 {
   if(!this.props.user.userData && !this.props.user.fetching) this.props.getUserData();
 }
 componentDidUpdate()
 {
   this.disable = false;
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
      })
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
      fontWeight: '300',
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
      trasition: "color 10s linear"
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
            <div style={{display: "flex", justifyContent: "space-around"}}>
            <StyledP onClick={() => this.vendorsDetailsToggle("1")} style={this.state.vendors ?{ fontWeight: "500" } : { fontWeight: "bold" }}>Details</StyledP>
            <StyledP style={this.state.vendors ? { fontWeight: "bold" } : { fontWeight: "500" }} onClick={() => this.vendorsDetailsToggle("2")}>Vendors</StyledP>
              </div>
            <div>
              <hr style={{marginLeft: "10px", marginRight: "10px", marginBottom: "15px"}}></hr>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              { this.props.reserve.error ? <ErrorDiv>{ String(this.props.reserve.error)}</ErrorDiv>
              :
              <Expandor _width="600px">
                {market.booths.map((x,i) => {
                  var creating = this.props.reserve && !this.props.reserve.fetching && this.props.reserve.reserveData && this.checkUsed(x);
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
                          {
                              <Button style={this.props.reserve.fetching || this.disable ? buttonDisabled : creating ? button : buttonRed} onClick={()=>{this.disable = true; this.setState({...this.state}); creating ?  this.createReservation(market.id, x.id) : this.fireDelete(x);}} disabled={this.props.reserve.fetching || this.disable}>{creating ? "Rent Booth" : "Delete Reservation"}</Button>
                          }
                        </div> : <div>
                          {(this.props.reserve.vendorsWhoRented !== undefined && this.props.reserve.vendorsWhoRented !== null ) ? <><div style={{fontFamily: "Roboto", fontSize: "12px", fontWeight: "500", color: "#044d4c", textAlign: "left"}}>{this.props.reserve.vendorsWhoRented.length} Vendors</div>
                            {this.props.reserve.vendorsWhoRented.map(renter => {
                            return <div style={{textAlign: "left", fontFamily: "Raleway", fontSize: "16px"}}>{renter.name}</div>
                          })}</> : <></>} 
                          <Button style={this.props.reserve.fetching || this.disable ? buttonDisabled : creating ? button : buttonRed} onClick={()=>{this.disable = true; this.setState({...this.state}); creating ?  this.createReservation(market.id, x.id) : this.fireDelete(x);}} disabled={this.props.reserve.fetching || this.disable}>{creating ? "Rent Booth" : "Delete Reservation"}</Button>
                        </div> } 
                        
                      </Booth>
                    )
                  }
                  )}
                  
              </Expandor> }
            </div> 
        </div> 

    );
}
  checkUsed = (x) =>
  {
    
    try{
      return this.props.reserve.reserveData.filter(y => x.id === y.id && y.user_vdrs.length > 0).length == 0;
    }catch {return false;}
  }
  fireDelete = (x)=>
  {
    if(!this.props.user || !this.props.user.userData) return;
    // console.log(x);
    var ruser = this.props.user.userData.upcoming_vdr;
    // console.log(ruser);
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
border-radius: 50%;
border-top: 2pt solid #478529;
width: 8pt;
height: 8pt;
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
const mapStateToProps = (state) =>
{
  return {
    reserve: {...state.checkBoothReserve},
    user: {...state.checkUserData}
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
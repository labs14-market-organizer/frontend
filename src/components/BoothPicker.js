import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {Button} from '@material-ui/core'
import Expandor from "./Expandor"
import styled from "styled-components";



class BoothPicker extends React.Component 
{

  constructor(props)
  {
    super(props);
    this.state =
    {
        date: new Date()
    }
  }
  
  handleDateChange(date) {
    this.setState({...this.state, date: date})
  }
  convertObjectToNumberDay(opp)
  {
    const days = ["sunday", "monday","tuesday","wednesday","thursday","friday","saturday"]
    return opp.map(x=> days.map((y,i)=> x.day === y ? i : -1 ).filter(x=> x > -1)[0]);
  }
  checkHours(date,opp)
  {
    let o = this.convertObjectToNumberDay(opp);
    return o.filter(x=> x === date.getDay()).length < 1;
  }

render()
{
    var market = this.props.market;
   
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
      borderRadius: "ipx",
      border: "solid 2px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#478529",
      color: "#FFF",
      marginTop: "4%"
    }

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    style={{zIndex: 1000000000}}
                disableToolbar
                shouldDisableDate={(d)=>this.checkHours(d,market.operation)}
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={this.state.date}
                onChange={(d) => this.handleDateChange(d)}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            </MuiPickersUtilsProvider>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Expandor _width="600px">
                {market.booths.map((x,i,a) => 
                  <Booth>
                      <div id="price" style={price}>{`$${Math.round(x.price)}`}</div>
                      <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                        <div style={title}>{x.name}</div>
                        <div style={subtitle}>{`Avaliable: ${x.number}`}</div>
                      </div>
                      <div>
                        <div style={{display: "flex", flexDirection: "row", marginBottom: "2%"}}>
                          <div  style={{display: "flex", flexDirection: "column", alignItems: "flex-start", marginRight: "40%"}}>
                            <div style={minitile}>Booth Size</div>
                            <div style={maintext}>{`${x.size && x.size.length > 0 ? x.size[0] : "N/a"} ft. x ${x.size && x.size.length > 1 ? x.size[1] : "N/a"} ft.`}</div>
                          </div>
                          <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                            <div style={minitile}>Booth Price</div>
                            <div style={maintext}>$25</div>
                          </div>
                        </div>
                        {x.description ? <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                          <div style={minitile}>Booth description</div>
                          <div style={{textAlign: "left", ...maintext}}>{x.description}</div>
                        </div> : null}
                        <Button style={button}>Rent Booth</Button>
                      </div>
                      
                  </Booth>
                  )}
                  
              </Expandor>
            </div>
        </div> 

    );
}
}

const Booth = styled.div `
  display: flex;
  align-items: flex-end;
`
export default BoothPicker;


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
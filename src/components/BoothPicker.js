import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Expandor from "./Expandor"



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
    var market = 
    {
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
            "number": 25,
            "price": "25.00",
            "size": [
              10,
              10
            ],
            "description": ""
          }
        ]
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
            <Expandor>
                <div>
                    <div>Header</div>
                    <div>Sub</div>
                    <div>Body</div>
                </div>
            </Expandor>
                <Expandor>
                <div>
                    <div>Header</div>
                    <div>Sub</div>
                    <div>Body</div>
                </div>
                <div>
                    <div>Header</div>
                    <div>Sub</div>
                    <div>Body</div>
                </div>
                <div>
                    <div>Header</div>
                    <div>Sub</div>
                    <div>Body</div>
                </div>
                <div>
                    <div>Header</div>
                    <div>Sub</div>
                    <div>Body</div>
                </div>
                <div>
                    <div>Header</div>
                    <div>Sub</div>
                    <div>Body</div>
                </div>
            </Expandor>
            
        </div> 

    );
}
}

export default BoothPicker;
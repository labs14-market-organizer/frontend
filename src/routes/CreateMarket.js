import React from 'react';
import Arrow from '../assets/ic-arrow-back.svg';
import { TextField, MuiThemeProvider, createMuiTheme, Typography, Container }  from '@material-ui/core';
//import ToggleButton from '@material-ui/lab/ToggleButton';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import '../scss/CreateMarket.scss';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[900]
        },
        secondary: {
            main: green[500]
        },
    }
})

class CreateMarket extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            address: '',
            operation: [],
            market_type: 1, //(1 = private, 2=public)
            website: '',
            facebook: '',
            image: '', 
            twitter: '',
            daysHoursField: 1, //keeping total of how many days and times need to be displayed.
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
            start: 1200,
            end: 1200,
            daysList: [],
            radio: "Public Market",
        }
    }
   
    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    onRadioChange = e => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    changeDay = (e) => {
        console.log(this.state.daysList)
        let number, newDaysList;
        if (e.currentTarget.value === 'false'){
            this.setState({
                ...this.state,
                [e.currentTarget.name]: true,
                daysList: [...this.state.daysList, [e.currentTarget.name]]
            })
        } else {
            newDaysList = [];
            for (let i = 0; i < this.state.daysList.length; i++){
                if (this.state.daysList[i][0] !== e.currentTarget.name) {
                    newDaysList.push(this.state.daysList[i])
                }
            }
            this.setState({
                ...this.state,
                [e.currentTarget.name]: false,
                daysList: newDaysList
            })
        
        }
    }
            

    

    setHours = (e) => {
        e.preventDefault();
        let startTime = this.state.start;
        let endTime = this.state.end;
        let newDaysList = this.state.daysList;
        let currentOpList = this.state.operation;
        let opList = [];
        for (let i = 0; i < currentOpList.length; i++) { //the purpose of these loops are to check to see if the old list has same days as the new list and if it does the old list day will be removed.
            for (let x = 0; x < newDaysList.length; x++) {
                if (currentOpList[i] !== undefined) {
                    if (currentOpList[i].day === newDaysList[x][0]) {
                        currentOpList.splice(i, 1)
                        i--;
                    }
                }
            }
        }


        for (let i = 0; i < newDaysList.length; i++){ //new market hour days are added.
            opList.push({ 
                day: newDaysList[i][0],
                start: startTime,
                end: endTime
            })
        }

        //currently its hard coded.
        this.setState({
            ...this.state,
            operation: [...currentOpList, ...opList],
            daysHoursField: this.state.daysHoursField + 1,
            daysList: [],
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
        })

    
    }

// 
    render() {
        console.log(this.state.operation)
        const daysOfOperation =  <div><Button variant="outlined" color= 'primary' name="sunday" value={this.state.sunday} onClick={(e) => this.changeDay(e)}>Su</Button>

        <Button variant="outlined" color= 'primary' name="monday" value={this.state.monday} onClick={(e) => this.changeDay(e)}>M</Button>

        <Button variant="outlined" color= 'primary' name="tuesday" value={this.state.tuesday} onClick={(e) => this.changeDay(e)}>Tu</Button>
        <Button variant="outlined" color= 'primary' name="wednesday" value={this.state.wednesday} onClick={(e) => this.changeDay(e)}>W</Button>
        <Button variant="outlined" color= 'primary' name="thursday" value={this.state.thursday} onClick={(e) => this.changeDay(e)}>Th</Button>
        <Button variant="outlined" color= 'primary' name="friday" value={this.state.friday} onClick={(e) => this.changeDay(e)}>F</Button>
        <Button variant="outlined" color= 'primary' name="saturday" value={this.state.saturday} onClick={(e) => this.changeDay(e)}>Sa</Button>
        <br />
        <br />
        <TextField
            id="time"
            type="time"
            defaultValue="00:00"
            InputLabelProps={{
                shrink: true,
            }}
        />
        
        {/**This code just adds the hiphen between the time boxes */}
        &nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;
        
        <TextField
            id="time"
            type="time"
            defaultValue="00:00"
            InputLabelProps={{
                shrink: true,
            }} />
        </div>;
        const items = []
        for (let i = 0; i < this.state.daysHoursField; i++){
            items.push(<div key={i}>{daysOfOperation}</div>)
        }

        return (
            <MuiThemeProvider theme={theme}>
                <>
                <div className="header">
                    <img src={Arrow}/>
                    <h4 className="createHeader">Create Market</h4>
                </div>
                <div className="addPhoto">
                    <img />
                    <p className="add">ADD COVER PHOTO</p>
                </div>
                <Container maxWidth="sm">
                <TextField
                    required
                    id="name"
                    label="Market Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth={true}
                    autoComplete={true}
                />
                <br></br>
                <TextField
                    required
                    id="description"
                    label="Market Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    margin="normal"
                    rows="3"
                    variant="outlined"
                    fullWidth={true}
                    multiline
                />
                <br></br>
                <TextField
                    required
                    id="address"
                    label="Address"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth={true}
                />
                     <TextField
                    required
                    id="city"
                    label="City"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth={true}
                    
                />
                <div className="flexes">
                     <TextField
                    required
                    id="state"
                    label="State"
                    name="state"
                    value={this.state.state}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    style={{width: "45%"}}
                  
                />
                     <TextField
                    required
                    id="zipcode"
                    label="Zip Code"
                    name="zipcode"
                    value={this.state.zipcode}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    style={{width: "45%", marginLeft: "9%"}}
                    
                />
                </div>
                </Container>
                <h6>Select market hours of operation</h6>
              
                {items}
               
                
                <br />

                

                <br />
                <br />

                <Button variant="outlined" color= 'primary' onClick={(e) => this.setHours(e)}>+ADD HOURS</Button>

                <br />

                <h6>Market Status</h6>

                {/*Radio buttons, default to public market*/}
                <Radio
                    name="radio"
                    value="Public Market"
                    checked={this.state.radio === 'Public Market'}
                    onChange={(e) => this.onRadioChange(e)}
                />Public Market<br />
                <Radio
                    name="radio"
                    value="Private Market"
                    checked={this.state.radio === 'Private Market'}
                    onChange={(e) => this.onRadioChange(e)}
                />Private Market<br />

            {/*This can be removed before deployment, was used for testing */}
                Radio: {this.state.radio} <br />

                <Container maxWidth="sm">
                <TextField
                    id="website"
                    label="Website"
                    name="website"
                    value={this.state.website}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />

                <br />

                <TextField
                    id="facebook"
                    label="Facebook"
                    name="facebook"
                    value={this.state.facebook}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />
                 <TextField
                    id="twitter"
                    label="Twitter"
                    name="twitter"
                    value={this.state.twitter}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />
                 <TextField
                    id="instagram"
                    label="Instagram"
                    name="instagram"
                    value={this.state.instagram}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />
                </Container>

                <br />

                <Button variant="contained" color='secondary'>SAVE</Button>
            
                </>
            </MuiThemeProvider>
        )
    }
}



export default CreateMarket;
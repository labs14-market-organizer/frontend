import React from 'react';
import Arrow from '../assets/ic-arrow-back.svg';
import { TextField, MuiThemeProvider, createMuiTheme, Typography, Container }  from '@material-ui/core';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
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
    state = {
        name: '',
        description: '',
        address: '',
        operation: {
            name: '',
            start: '',
            end: ''
        },
        market_type: 1, //(1 = private, 2=public)
        website: '',
        facebook: '',
        image: '', 
        hoursOfOperation: 3,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
    }
    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    dayChange = (day) => {
        // console.log(day)
        console.log(this.state.day);
        
        // let change;
        // if (this.state.day === false){
        //      change = true
        // } else {
        //      change = null
        // }
        this.setState({
            ...this.state,
            day: !this.state.day
        })

    }


    render() {
        const daysOfOpertaion = null;
        const displayedBlocks = () => {
            for (let i = 0; i < this.state.hoursAdded; i++){
                console.log(this.state.hoursAdded)
            return daysOfOpertaion
        }
        
        }

        return (
            <MuiThemeProvider theme={theme}>
                <>
                <Typography className="header">
                    <img src={Arrow}/>
                    <h4 className="createHeader">Create Market</h4>
                </Typography>
                <Typography className="addPhoto">
                    <img />
                    <p className="add">ADD COVER PHOTO</p>
                </Typography>
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
              
                {/* {daysOfOpertaion} */}
                <div><Button variant="outlined" color= 'primary' onClick={(sunday) => this.dayChange(sunday)}>Su</Button>
                <Button variant="outlined" color= 'primary' onClick={(monday) => this.dayChange(monday)}>M</Button>
                <Button variant="outlined" color= 'primary' onClick={(tuesday) => this.dayChange(tuesday)}>Tu</Button>
                <Button variant="outlined" color= 'primary' onClick={(wednesday) => this.dayChange(wednesday)}>W</Button>
                <Button variant="outlined" color= 'primary' onClick={(thursday) => this.dayChange(thursday)}>Th</Button>
                <Button variant="outlined" color= 'primary' onClick={(friday) => this.dayChange(friday)}>F</Button>
                <Button variant="outlined" color= 'primary' onClick={(saturday) => this.dayChange(saturday)}>Sa</Button>
                <TextField
                    id="time"
                    type="time"
                    defaultValue="00:00"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                
                <TextField
                    id="time"
                    type="time"
                    defaultValue="00:00"
                    InputLabelProps={{
                        shrink: true,
                    }}
                /> </div>
                <br></br>

                

                <br></br>
                <br></br>

                <Button variant="outlined" color= 'primary'>+ADD HOURS</Button>

                <br></br>

                <h6>Market Status</h6>

                <Radio/>Public Market
                <br></br>
                <Radio/>Private Market
                <br></br>

                <TextField
                    required
                    id="website"
                    label="Website"
                    name="website"
                    value={this.state.website}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />

                <br></br>

                <TextField
                    required
                    id="facebook"
                    label="Facebook"
                    name="facebook"
                    value={this.state.facebook}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />

                <br></br>

                <Button variant="contained" color='secondary'>SAVE</Button>
            
                </>
            </MuiThemeProvider>
        )
    }
}


export default CreateMarket;
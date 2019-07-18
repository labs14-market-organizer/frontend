import React from 'react';
import Arrow from '../assets/ic-arrow-back.svg';
import { TextField, MuiThemeProvider, createMuiTheme }  from '@material-ui/core';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';


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
        image: ''
    }
    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }


    render() {
        console.log(this.state.name);
        console.log(this.state.description);
        return (
            <MuiThemeProvider theme={theme}>
                <>
                <div className="header">
                    <img src={Arrow}/>
                    <h1>Create Market</h1>
                </div>
                <TextField
                    required
                    id="name"
                    label="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <br></br>
                <TextField
                    required
                    id="description"
                    label="Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
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
                />

                <h6>Select market hours of operation</h6>
                <Button variant="outlined" color= 'primary'>Su</Button>
                <Button variant="outlined" color= 'primary'>M</Button>
                <Button variant="outlined" color= 'primary'>Tu</Button>
                <Button variant="outlined" color= 'primary'>W</Button>
                <Button variant="outlined" color= 'primary'>Th</Button>
                <Button variant="outlined" color= 'primary'>F</Button>
                <Button variant="outlined" color= 'primary'>Sa</Button>

                <br></br>

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
                />

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
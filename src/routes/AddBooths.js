import React from "react";
import Arrow from "../assets/ic-arrow-back.svg";
import { TextField, Input, InputAdornment, FormControl, InputLabel } from '@material-ui/core';

class AddBooths extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boothtype: '',
            numberofbooths: null,
            boothprice: null,
        }
    }

    handleChange = e => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
      };


    render() {
        return (
            <form>
                <div className="header">
                    <img src={Arrow} />
                    <h4 className="addbooths">Add Booths</h4>
                </div><br />
                <div>
                    <TextField 
                        required
                        id="boothtype"
                        label="Booth Type"
                        name="boothtype"
                        value={this.state.boothtype}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                        autoComplete={true}
                    />
                    <TextField
                        type="number"
                        required
                        id="numberofbooths"
                        label="Number of Booths"
                        name="numberofbooths"
                        value={this.state.numberofbooths}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                        autoComplete={true}
                    />
                    <TextField
                        id="boothprice"
                        type="number"
                        variant="outlined"
                        label="Price per Booth"
                        value={this.state.boothprice}
                        onChange={this.handleChange}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                    

                </div>
            </form>
        )
    }
}

export default AddBooths;

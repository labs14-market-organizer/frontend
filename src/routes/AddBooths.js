import React from "react";
import Arrow from "../assets/ic-arrow-back.svg";
import { TextField, InputAdornment } from '@material-ui/core';



class AddBooths extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boothtype: '',
            numberofbooths: '',
            boothprice: '',
            length: '',
            width: '',
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
                        InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>}}
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                        autoComplete={true}
                    />
                    <h5>Ex. Standard Booths. Larger Booths. Corner Booths. etc.</h5>
                    <TextField
                        type="number"
                        required
                        id="numberofbooths"
                        label="Number of Booths"
                        name="numberofbooths"
                        value={this.state.numberofbooths}
                        onChange={this.handleChange}
                        InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>}}
                        margin="normal"
                        variant="outlined"
                        autoComplete={true}
                    />
                    <TextField
                        id="boothprice"
                        name="boothprice"
                        type="number"
                        margin="normal"
                        variant="outlined"
                        label="Price per Booth"
                        value={this.state.boothprice}
                        onChange={this.handleChange}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />

                        <h5>Size of Booths</h5>
                    <TextField
                        id="length"
                        name="length"
                        type="number"
                        value={this.state.length}
                        onChange={this.handleChange}
                        InputProps={{
                        endAdornment: <InputAdornment position="end">ft</InputAdornment>
                        }}
                    />
                    &nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;
                    <TextField
                        id="width"
                        name="width"
                        type="number"
                        value={this.state.width}
                        onChange={this.handleChange}
                        InputProps={{
                        endAdornment: <InputAdornment position="end">ft</InputAdornment>
                        }}
                    />

                    <TextField
                        id="boothdescription"
                        name="boothdescription"
                        label="Booth Description"
                        multiline rows="4"
                        fullWidth={true}
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>}}
                    />

                </div>
            </form>
        )
    }
}

export default AddBooths;

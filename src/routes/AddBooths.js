import React from "react";
import Arrow from "../assets/ic-arrow-back.svg";
import { TextField } from '@material-ui/core';

class AddBooths extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boothtype: ''
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

                </div>
            </form>
        )
    }
}

export default AddBooths;

import React from "react";
import Arrow from "../assets/ic-arrow-back.svg";
import { TextField, InputAdornment, Button } from '@material-ui/core';




class AddBooths extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boothtype: '',
            numberofbooths: '',
            boothprice: '',
            length: '',
            width: '',
            boothdescription: '',
        }
    }

    handleChange = e => {
        console.log(this.state.boothdescription)

        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
    };

    handleSave = e => {
        e.preventDefault();
        
    };

    handleAdd = e => {
        e.preventDefault();

    };


    render() {
        return (
            <form>
                <header 
                className="header"
                >
                    <img src={Arrow} />
                    <h4 
                    className="addbooths"
                    style={{
                        marginLeft: '5%',
                        }}>Add Booths</h4>
                </header>

            {/* Styled this div for the time being...will change later */}
                <body 
                    style={{
                        width:'98%',
                        height: '100%',
                        margin: 'auto'
                    }}
                >
                    <TextField 
                        required
                        id="boothtype"
                        label="Booth Type"
                        name="boothtype"
                        value={this.state.boothtype}
                        onChange={this.handleChange}
                        InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>}}
                        style={{
                            margin: '2% 0',
                            marginBottom: "0px"
                        }}
                        variant="outlined"
                        fullWidth={true}
                        autoComplete={true}
                    />
                    <h5 style={{
                            margin: '10px 0px'
                        }}>Ex. Standard Booths. Larger Booths. Corner Booths. etc.</h5>

                    <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly'
                    }}>
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
                            style={{
                                margin: '10px',
                                width: '45%',
                                height: '80px'
                            }}
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
                            style={{
                                margin: '10px',
                                width: '45%',
                                height: '80px'
                            }}
                        />
                    </div>

                        <h5
                        style={{
                            display: 'flex'
                        }}>Size of Booths</h5>
                    <div
                    style={{
                        display: 'flex'
                    }}>
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
                    </div>

                    <TextField
                        id="boothdescription"
                        name="boothdescription"
                        label="Booth Description"
                        multiline rows="4"
                        fullWidth={true}
                        margin="normal"
                        variant="outlined"
                        value={this.state.boothdescription}
                        onChange={this.handleChange}
                        InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>}}
                        style={{
                            
                            marginBottom: "0px"
                        }}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{
                            fontSize:'1.75em',
                            margin: '2% auto',
                            height: '80px'
                        }}
                        /*onClick={this.handleSave} */
                    >Save</Button>
                    
                    <hr/>

                    <Button
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        style={{
                            
                            fontSize:'1.75em',
                            margin: '2% auto',
                            height: '80px',
                        }}
                        /*onClick={this.handleAdd}*/
                    >Add new booth type</Button>

                </body>
            </form>
        )
    }
}

export default AddBooths;

import React, { Component } from 'react'
import Arrow from "../assets/ic-arrow-back.svg";
import { TextField, InputAdornment, Button } from '@material-ui/core';

export class EditBooths extends Component {
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
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
    };

    handleDelete = e => {
        e.preventDefault();
        // this.props.delete(this.state);
        // this.props.history.push('/addbooths');
    };

    handleAdd = e => {
        e.preventDefault();

        this.setState({
            boothtype: '',
            numberofbooths: '',
            boothprice: '',
            length: '',
            width: '',
            boothdescription: '',
        })
    };

    render() {
        return (
            <form>
                <header 
                className="header"
                >
                    <img src={Arrow} />
                    <h4 
                    className="EditBooths"
                    style={{
                        marginLeft: '5%',
                        }}>Edit Booths</h4>
                </header>

                <body 
                    style={{
                        maxWidth: '600px',
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
                            marginTop: '2%',
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
                        justifyContent: 'space-between'
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
                                width: '44%',
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
                                width: '44%',
                                marginLeft: '8%',
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
                        style={{
                            width: '76px',
                            marginBottom: '20px'
                        }}
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
                        style={{
                            width: '76px',
                            marginBottom: '20px'
                        }}
                        InputProps={{
                        endAdornment: <InputAdornment position="end">ft</InputAdornment>
                        }}
                    />
                    </div>

                    <TextField
                        id="boothdescription"
                        name="boothdescription"
                        label="Booth Description"
                        placeholder="These booths do not come with electricity or a water hook up. Wifi is available throughout the market."
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

                    <div className="button div"
                    style={{
                        display: 'flex',
                        margin: '6% 0',
                        justifyContent: 'space-between'
                        
                    }}>
                        <Button
                            variant="outlined"
                            fullWidth
                            style={{
                                fontSize:'1.75em',
                                height: '80px',
                                color: 'red',
                                width: '44%'
                            }}
                            onClick={this.handleDelete}
                        >Delete</Button>

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{
                                
                                fontSize:'1.75em',
                                height: '80px',
                                width: '44%',
                                marginLeft: '8%',
                            }}
                            onClick={this.handleSave}
                        >Save</Button>
                    </div>

                    <hr/>

                    {this.state.currentBooth}

                </body>
            </form>
        )
    }
}

export default EditBooths

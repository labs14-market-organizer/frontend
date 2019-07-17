import React from 'react';
import Arrow from '../assets/ic-arrow-back.svg';
import { TextField }  from '@material-ui/core';

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
        e.preventDefault();
        this.setState = {
            ...this.state,
            [e.target.name]: e.target.value
        }
    }


    render() {
        console.log(this.state.name);
        console.log(this.state.description);
        return (
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
          
            </>
        )
    }
}


export default CreateMarket;
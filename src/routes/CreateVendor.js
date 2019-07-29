import React from "react";
import Arrow from "../assets/ic-arrow-back.svg";
import Add from "../assets/add.svg";
import {
    TextField,
    Button,
    Typography,
    Container,
    Checkbox
  } from "@material-ui/core";
import { connect } from "react-redux";
import styled from "styled-components";

class CreateVendor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            items: [],
            electricty: false,
            ventilation: false,
            loud: false,
            other_special: {},
            website: '',
            facebook: '',
            twitter: '',
            instagram: '',

        }
    }
    handleChange = e => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
      };

    checkChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: !e.target.value
        })
    }
    render() {
        return (
            <div>
                <Header>
                    <ArrowImage src={Arrow} />
                    <CreateHeader>Create Vendor</CreateHeader>
                </Header>
                <Container maxWidth="sm">
                    <TextField
                        error={this.touched && this.state.name == "" ? true : false}
                        required
                        id="name"
                        label="Business Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                        autoComplete={true}
                        style={{marginTop: "20px"}}
                    />
                    <TextField
                        error={this.touched && this.state.description == "" ? true : false}
                        required
                        id="description"
                        label="Business Description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                        autoComplete={true}
                        style={{marginTop: "20px"}}
                        rows="3"
                        multiline
                    />
                    <p>What are the specific items you plan to sell?</p>
                    <img src={Add} />
                    <TextField
                        id="items"
                        label="Add Item"
                        name="items"
                        value={this.state.items}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth={true}
                        autoComplete={true}
                     />
                     <p>
                         Special Considerations
                     </p>
                     <Checkbox
                        checked={this.state.electricty}
                        onChange={this.checkChange}
                        value="electricty"
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    />
                    <Checkbox
                        checked={this.state.ventilation}
                        onChange={this.checkChange}
                        value="ventilation"
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    />
                    <Checkbox
                        checked={this.state.loud}
                        onChange={this.checkChange}
                        value="loud"
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    />
                    <Checkbox
                        checked={this.state.other_special}
                        onChange={this.checkChange}
                        value="other_special"
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    />
                     <TextField
                        id="website"
                        label="Business Website"
                        name="website"
                        value={this.state.website}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth={true}
                        autoComplete={true}
                        variant="outlined"
                     />
                     <TextField
                        id="facebook"
                        label="Business Facebook"
                        name="facebook"
                        value={this.state.facebook}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth={true}
                        variant="outlined"
                     />
                     <TextField
                        id="instagram"
                        label="Business Instagram"
                        name="instagram"
                        value={this.state.instagram}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth={true}
                        variant="outlined"
                     />
                     <TextField
                        id="twitter"
                        label="Business Twitter"
                        name="twitter"
                        value={this.state.twitter}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth={true}
                        variant="outlined"
                     />
                     <GreenButton variant="outlined">Save</GreenButton>
                </Container>
            </div>
        )
    }
    
}
const Header = styled.div`
  display: flex;
  background-color: #478529;
  color: white;
  height: 60px;
`;

const CreateHeader = styled.h4`
  margin-left: 15px;
  margin-top: 20px;
`;

const ArrowImage = styled.img`
  margin-left: 2%;
`;

const GreenButton = styled(Button)`
  margin-top: 20px;
  width: 80vw;
  height: 60px;
  background-color:#478529;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  @media(min-width: 600px){
    width: 400px;
  }

`
const mapStateToProps = state => {
    return {
      //states
      ...state.checkUserData
    };
  };
  
  export default connect(
    mapStateToProps,
    { }
  )(CreateVendor);
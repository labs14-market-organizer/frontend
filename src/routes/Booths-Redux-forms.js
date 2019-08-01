import React from "react";
import Arrow from "../assets/ic-arrow-back.svg";
import {
  TextField,
  MuiThemeProvider,
  createMuiTheme,
  Typography,
  Container
} from "@material-ui/core";
//import ToggleButton from '@material-ui/lab/ToggleButton';
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import RadioButtonGroup from "@material-ui/core/RadioGroup"
import { withStyles } from "@material-ui/core/styles";
import "../scss/CreateMarket.scss";
import { createNewBooth, updateBooth } from "../redux/actions/boothData";
import { connect } from "react-redux";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import {Redirect} from "react-router-dom";
import FormControlLabel from '@material-ui/core/FormLabel'

function validate (values) {
  const errors = {};
  const requiredFields = [
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `${field.charAt(0).toUpperCase() +
        field.slice(1)} Is Required`;
    }
  });
  console.log("errors: \n" + JSON.stringify(errors));
  console.log("values:\n" + JSON.stringify(values));
  return errors;
}

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => {
  return(
  <TextField
  label={label}
  margin="normal"
  variant="outlined"
  fullWidth={true}
  autoComplete={true}
  error={touched && error ? error : ""}
  errorText={true}
  {...input}
  {...custom}
/>
)};

const renderRadioGroup = ({ label, input, meta: { dirty, error }, ...rest}) => (
  <RadioButtonGroup
    label={label}
    error={dirty && error ? error : ""}
    errorText={true}
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
    style={dirty && error ? {border: "solid red 2px"} : {}}
  />
);

const renderButton = ({ input,
  label, prefunc, Style, meta: { visited, error }, ...rest}) =>{
  {
    let witherror = {color: "red", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "-30px", transition: "margin 0.2s"};
    let noerror = {marginTop: "-50px"}
    return (
    <div style={visited && error ? witherror : noerror} >
    {error && visited ? error : ""}
    <br/>
    <Button
      onClick={e => {let opp = prefunc(e); input.onChange(JSON.stringify(opp));}}
      error={visited && error ? error : ""}
      errorText={true}
      {...input}
      {...rest}
      style={error && visited ? {color: "red"} : {...Style}}
    >{label}</Button>
    </div>
  );}}
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));



class CreateMarket extends React.Component
{
  isUpdating = false;
  constructor(props)
  {
    super(props);
    if(this.props.currentBooth)
        this.state = this.props.currentBooth;
    else
    this.state = {
        boothtype: '',
        numberofbooths: '',
        boothprice: '',
        length: '',
        width: '',
        boothdescription: '',
    }
    this.isUpdating = !!this.props.currentBooth
    if(this.props.market)
    {
      this.props.initialize(
        this.state
      )
    }
  }

  render(){
    return <div/>

    {/* <Field
            component={renderTextField}
            required
            id="name"
            label="Market Name"
            name="Market Name"
          /> */}
    
  }
};

const mapStateToProps = state => {
  return {
    ...state
  };
};



const ReduxForms = reduxForm({
  form: "BoothsForm", // a unique identifier for this form
  validate
})(CreateMarket);


class ReduxContainer extends React.Component
{
  init = {
    name: '',
    description: '',
    address: '',
    operation: [],
    market_type: 1, //(1 = private, 2=public)
    website: '',
    facebook: '',
    image: '', 
    twitter: '',
    instagram: '',
    zipcode: ''
  }
  handleRedux = (values) =>
  {
    if (this.props.currentMarket) this.props.updateMarket(this.props.currentMarket.id, values)
    else this.props.createNewMarket({...this.init, ...values});
  }
  render(){
    return (<ReduxForms onSubmit={this.handleRedux} redirect={this.props.checkBoothData.updated} market={this.props.currentMarket}/>);
  }
}

export default connect(
  mapStateToProps,
  { createNewBooth, updateBooth }
)(ReduxContainer);
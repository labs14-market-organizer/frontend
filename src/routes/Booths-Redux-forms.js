import React from "react";
import Arrow from "../assets/ic-arrow-back.svg";
import {
  TextField,
  InputAdornment,
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
import { maxWidth } from "@material-ui/system";

function validate (values) {
  const errors = {};
  const requiredFields = [
    "boothtype",
    "numberofbooths"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `${field.charAt(0).toUpperCase() +
        field.slice(1)} Is Required`;
    }
  });
  console.log(values.width);
  values.width = values.width < 1 ? "" : parseInt(values.width);
  values.length = values.length < 1 ? "" : parseInt(values.length);
/*   console.log("errors: \n" + JSON.stringify(errors));
  console.log("values:\n" + JSON.stringify(values)); */
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

class CreateMarket extends React.Component
{
  isUpdating = false;
  redirect = false;
  currentBooths = []
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
      this.props.initialize(
        this.state
      )
  }
  
  render(){
    const {handleSubmit, pristine, reset, submitting } = this.props;
    if(this.props.redirect) if(this.redirect) return <Redirect to="/"/> 
    else {this.currentBooths.push(this.props.checkBoothData.boothData); console.log(this.currentBooths); reset();}
    return (
      <form onSubmit={handleSubmit}>
        <header 
          className="header"
        >
            <img src={Arrow} />
            <h4 
            className="addbooths"
            style={{
                marginLeft: '5%',
                }}>{this.isUpdating ? "Update" : "Add"} Booths</h4>
        </header>
        {/* Styled this div for the time being...will change later */}
        
        <body 
          style={{
              width:'98%',
              height: '100%',
              margin: '10px auto',
              maxWidth: '624px',
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
          }}
        >
          <div style={{display: "flex", flexDirection: "column"}}>
            {this.currentBooths.map(x=> 
              <div>
                Name: {x.boothtype} Number: {x.numberofbooths}
              </div>
            )}
          </div>
          <Field
            component={renderTextField}
            required
            id="name"
            label="Market Name"
            name="Market Name"
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>}}
              style={{
                margin: '2% 0',
                marginBottom: "0px"
              }}
            id="boothtype"
            label="Booth Type"
            name="boothtype"
          />
          <h5 style={{
                  margin: '10px 0px'
              }}>
              Ex. Standard Booths. Larger Booths. Corner Booths. etc.
          </h5>
          <div
            style={{
                display: 'flex',
                justifyContent: 'space-evenly'
          }}>
            <Field
            component={renderTextField}
            required
            id="numberofbooths"
            label="Number of Booths"
            name="numberofbooths"
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>
            }}
            style={{
                margin: '10px 0',
                width: '45%'
            }}
            />
            <Field
              component={renderTextField}
              id="boothprice"
              label="Price per Booth"
              name="boothprice"
              type="number"
              margin="normal"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              style={{
                margin: '10px 0',
                width: '45%'
              }}
            />
          </div>
          <h5
            style={{
                display: 'flex',
                margin: '5px'
            }}>Size of Booths
          </h5>
          <div
            style={{
                display: 'flex'
            }}>
            <Field
            component={renderTextField}
            id="length"
            name="length"
            type="number"
            min="0"
            max="99"
            style={{
                width: '76px',
                marginBottom: '20px'
            }}
            InputProps={{
            endAdornment: <InputAdornment position="end">ft</InputAdornment>
            }}
            />
            <div style={{position: "relative", bottom: "-30px", margin: "0 10px"}}>X</div>
            <Field
              component={renderTextField}
              id="width"
              name="width"
              type="number"
              min="0"
              max="99"
              style={{
                  width: '76px',
                  marginBottom: '20px'
              }}
              InputProps={{
              endAdornment: <InputAdornment position="end">ft</InputAdornment>
              }}
            />
          </div>
          <Field
            component={renderTextField}
            id="boothdescription"
            name="boothdescription"
            label="Booth Description"
            multiline rows="4"
            margin="normal"
            style={{ marginBottom: "0px"}}
          />
          <Button 
          type="submit" 
          disabled={pristine || submitting}
          variant="contained"
          color="primary"
          fullWidth
          onClick={(e)=> { this.redirect = true}}
          style={{
              fontSize:'1.75em',
              margin: '2% auto',
              height: '80px'
          }}
          >
            Submit
          </Button>
        <hr/>
        <Button 
          type="submit" 
          disabled={pristine || submitting}
          variant="outlined"
          color="secondary"
          fullWidth
          style={{
              
              fontSize:'1.75em',
              margin: '2% auto',
              height: '80px',
          }}
        >
            Submit
        </Button>
        </body>
        </form>
    )

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
})(connect(mapStateToProps)(CreateMarket));


class ReduxContainer extends React.Component
{
  handleRedux = (values) =>
  {
    this.wasfetching = true;
    console.log(values);
    if (this.props.currentBooth) this.props.updateMarket(this.props.currentMarket.id, values)
    else this.props.createNewBooth({ ...values});
  }
  wasfetching =false;
  render(){
    let redirect = this.props.checkBoothData.updated && this.wasfetching;
    console.log(this.wasfetching);
    if(this.wasfetching && !this.props.checkBoothData.fetching) this.wasfetching = false;
    return (<ReduxForms onSubmit={this.handleRedux} redirect={redirect} market={this.props.currentMarket}/>);
  }
}

export default connect(
  mapStateToProps,
  { createNewBooth, updateBooth }
)(ReduxContainer);
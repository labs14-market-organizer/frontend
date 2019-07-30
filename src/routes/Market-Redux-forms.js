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
import { createNewMarket, updateMarket } from "../redux/actions/marketData";
import { connect } from "react-redux";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import {Redirect} from "react-router-dom";
import FormControlLabel from '@material-ui/core/FormLabel'

function validate (values) {
  console.log(values);
  const errors = {};
  const requiredFields = [
    "Market Name",
    "Market Description",
    "Address",
    "City",
    "State",
    "Zip Code"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `${field.charAt(0).toUpperCase() +
        field.slice(1)} Is Required`;
    }
  });
  if (values.Website && !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(values.Website)) 
    errors.Website = "Invalid Website";
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

const renderRadioGroup = ({ label, input, ...rest}) => (
  <RadioButtonGroup
    label={label}
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));



class CreateMarket extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      operation: [{ day: 'sunday', start: null, end: null }, { day: 'monday', start: null, end: null },{ day: 'tuesday', start: null, end: null }, { day: 'wednesday', start: null, end: null },{ day: 'thursday', start: null, end: null }, { day: 'friday', start: null, end: null }, { day: 'saturday', start: null, end: null }],
      market_type: 1, //(1 = private, 2=public)
      daysHoursField: 1, //keeping total of how many days and times need to be displayed.
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
      start: 1200,
      end: 1200,
      daysList: [],
      radio: "Public Market"
    };
  }

  changeDay = e => {
    console.log(this.state.daysList);
    let number, newDaysList;
    if (e.currentTarget.value === "false") {
      this.setState({
        ...this.state,
        [e.currentTarget.name]: true,
        daysList: [...this.state.daysList, [e.currentTarget.name]]
      });
    } else {
      newDaysList = [];
      for (let i = 0; i < this.state.daysList.length; i++) {
        if (this.state.daysList[i][0] !== e.currentTarget.name) {
          newDaysList.push(this.state.daysList[i]);
        }
      }
      this.setState({
        ...this.state,
        [e.currentTarget.name]: false,
        daysList: newDaysList
      });
    }
  };
    deleteTime = (e, day) => {
      e.preventDefault();
      console.log(day)
      let newDays = this.state.operation;
      const newList = []
      for (let i = 0; i < newDays.length; i++){
          if (newDays[i].day === day) {
              newList.push({
                  day: day,
                  start: null,
                  end: null
              })
          } else {
              newList.push(newDays[i])
          }
      }
      this.setState({
          ...this.state,
          operation: [...newList]
      })
  }

   touched = false
  

  setHours = e => {
    e.preventDefault();
    console.log(this.state.start +  " " + this.state.end)
    if (this.state.start < this.state.end) {
      let startTime = this.state.start;
      let endTime = this.state.end;
      let newDaysList = this.state.daysList;
      let currentOpList = this.state.operation;
      const normalWeek = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
      ];
      let opList = [];
      for (let i = 0; i < currentOpList.length; i++) {
        //the purpose of these loops are to check to see if the old list has same days as the new list and if it does the old list day will be removed.
        for (let x = 0; x < newDaysList.length; x++) {
          if (currentOpList[i] !== undefined) {
            if (currentOpList[i].day === newDaysList[x][0]) {
              currentOpList.splice(i, 1);
              i--;
            }
          }
        }
      }

      for (let i = 0; i < newDaysList.length; i++) {
        //new market hour days are added.
        opList.push({
          day: newDaysList[i][0],
          start: startTime,
          end: endTime
        });
      }

      let sortOperation = []; //sorting the days.
      let op = [...currentOpList, ...opList];
      for (let i = 0; i < normalWeek.length; i++) {
        for (let x = 0; x < op.length; x++) {
          if (normalWeek[i] === op[x].day) {
            sortOperation.push(op[x]);
          }
        }
      }

      //currently its hard coded.
      this.setState({
        ...this.state,
        // operation: [...currentOpList, ...opList],
        operation: [...sortOperation],
        daysHoursField: this.state.daysHoursField + 1,
        daysList: [],
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
      });
    } else {
      //alert('Please change the time to be accurate')
    }
};
  save = e => {
    e.preventDefault();
    if (this.state.isUpdating) {
      this.props.updateMarket(this.state);
    } else {
      this.props.createNewMarket(this.state);
    }
  };

  militaryConvert(time){
    console.log('here ya go')
    let hours = time.split('');
    let am = "am";
    let newHours, combined, subtractedHours, rest;
    if (hours[0] === "0"){
      combined = hours[1] + hours[2] + hours[3] + hours[4] + am;
      console.log(combined)
      return combined;
    } else if (hours[0] === "1" && hours[1] === "2") {
      return hours.join('') + "pm";
    } else if (hours[0] === "1" && (hours[1] === "0" || hours[1] === "1")) {
      return hours.join('') + "am";
    } else {
      combined = parseInt(hours[0] + hours[1]);
      rest = hours[2] + hours[3] + hours[4];
      subtractedHours = combined - 12;
      return (subtractedHours.toString() + rest + "pm");
    }
  }

  sleepDestroy = async function() {
    await sleep(500); // simulate server latency
    this.props.history.push("/addbooth");
  }
  render(){
    const {handleSubmit, pristine, reset, submitting } = this.props;
    if(this.props.redirect) {this.sleepDestroy()}
    return (
      <form onSubmit={handleSubmit}>
        <div className="header">
            <img src={Arrow} />
            <h4 className="createHeader">{(false) ? "Edit Market" : "Create Market" }</h4>
        </div>
        {/* <div className="addPhoto">
            <img />
            <p className="add">ADD COVER PHOTO</p>
        </div> */}
        <Container maxWidth="sm">
          <Field
            component={renderTextField}
            required
            id="name"
            label="Market Name"
            name="Market Name"
          />
        <br />
        <Field
            component={renderTextField}
            required
            id="description"
            label="Market Description"
            name="Market Description"
          />
          <br />
        <Field
            component={renderTextField}
            required
            id="address"
            label="Address"
            name="Address"
          />
        <Field
            component={renderTextField}
            required
            id="city"
            label="City"
            name="City"
          />
        </Container>
        <StyledContainer>
          <Field
              component={renderTextField}
              required
              id="state"
              label="State"
              name="State"
              style={{ width: "44%" }}
            />
            <Field
              component={renderTextField}
              required
              id="zipcode"
              label="Zip Code"
              name="Zip Code"
              style={{ width: "44%", marginLeft: "8%" }}
            />
        </StyledContainer>
        <Container maxWidth="sm">
        <Field
            component={renderTextField}
            id="website"
            label="Website"
            name="Website"
          />
          <Field
            component={renderTextField}
            id="facebook"
            label="Facebook"
            name="Facebook"
          />
          <Field
            component={renderTextField}
            id="twitter"
            label="Twitter"
            name="Twitter"
          />
          <Field
            component={renderTextField}
            id="instagram"
            label="Instagram"
            name="Instagram"
          />
        </Container>
        <StyleLeft>
        <h6>Market Status</h6>
        {/*Radio buttons, default to public market*/}
      <Field name="market_type" component={renderRadioGroup}>
        <div style={{display: "flex"}}>
          <Radio value="Public" label="Public" name="Public"/>
          <div style={{marginTop: "-13px"}}>Public Market</div>
        </div>
        <br />
        <div style={{display: "flex"}}>
          <Radio id="Private" value="Private" label="Private" name="Private"/>
          <div style={{marginTop: "-8px", marginBottom: "10px"}}> Private Market</div>
        </div>
      </Field>
        <h4>Market Days {'&'} Times Of Operation</h4>
        <StyledDiv>
  
            <StyledDays
              variant={this.state.sunday ? "contained" : "outlined"}
              color="secondary"
              name="sunday"
              value={this.state.sunday}
              onClick={e => this.changeDay(e)}
            >
              Su
            </StyledDays>
            <StyledDays
              variant={this.state.monday ? "contained" : "outlined"}
              color="secondary"
              name="monday"
              value={this.state.monday}
              onClick={e => this.changeDay(e)}
            >
              M
            </StyledDays>
            <StyledDays
              variant={this.state.tuesday ? "contained" : "outlined"}
              color="secondary"
              name="tuesday"
              value={this.state.tuesday}
              onClick={e => this.changeDay(e)}
            >
              Tu
            </StyledDays>
            <StyledDays
              variant={this.state.wednesday ? "contained" : "outlined"}
              color="secondary"
              name="wednesday"
              value={this.state.wednesday}
              onClick={e => this.changeDay(e)}
            >
              W
            </StyledDays>
            <StyledDays
              variant={this.state.thursday ? "contained" : "outlined"}
              color="secondary"
              name="thursday"
              value={this.state.thursday}
              onClick={e => this.changeDay(e)}
            >
              Th
            </StyledDays>
            <StyledDays
              variant={this.state.friday ? "contained" : "outlined"}
              color="secondary"
              name="friday"
              value={this.state.friday}
              onClick={e => this.changeDay(e)}
            >
              F
            </StyledDays>
            <StyledDays
              variant={this.state.saturday ? "contained" : "outlined"}
              color="secondary"
              name="saturday"
              value={this.state.saturday}
              onClick={e => this.changeDay(e)}
            >
              Sa
            </StyledDays>
          </StyledDiv>
          <div style={{display: "flex"}}>
          <TextField
            style={{marginLeft: "23%", marginTop: "25px"}}
            name="start"
            type="time"
            onChange={this.handleChange}
            defaultValue="00:00"
            InputLabelProps={{
              shrink: true
            }}
          />
          {/**This code just adds the hiphen between the time boxes */}
          {/* <span style={{marginTop: "30px"}}>&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;</span> */}
          <div style={{marginTop: "30px"}}>-</div>
          <TextField
          style={{marginTop: "25px", marginLeft: "2%"}}
            name="end"
            type="time"
            onChange={this.handleChange}
            defaultValue="00:00"
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
        <StyledDiv>
          <Button
            variant="outlined"
            className="biggerButton"
            size="large"
            color="secondary"
            onClick={e => this.setHours(e)}
            style={{width: "80vw", marginTop: "-20px", height: "60px", marginBottom: "32px"}}
          >
            +ADD HOURS
          </Button>
        </StyledDiv>    
        
      
       
        
        {this.state.operation.map(item => {
                        return (item.start !== null) ? 
                        <StyledP><StyledUp style={{fontWeight: "600"}}> {item.day}:</StyledUp> <StyledUp>{this.militaryConvert(item.start)} - {this.militaryConvert(item.end)}</StyledUp>
                          <button value={this.state[item.day]} style={{fontWeight: "600"}} onClick={(e) => this.deleteTime(e, item.day)}>X</button></StyledP> 
                        : <StyledP> <StyledUp style={{fontWeight: "600"}}>{item.day}:</StyledUp> Closed </StyledP>
                    })}
        <br />
        </StyleLeft>  
        <div>
          <Button type="submit" disabled={pristine || submitting}>
            Submit
          </Button>
        </div>
      </form>
    );
  }
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px 10px auto;
  max-width: 520px;
  .MuiButton-root {
    height: 40px;
    width: 13vh;
    margin-left: 1%;
    margin: 0 auto;
    cursor: pointer;
    min-width: 0;
    
  }
  .MuiButton-label{
    text-transform: capitalize;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 500;
  }

  .biggerButton {
    width: 200px;
  }

  .MuiButton-outlined {
    border: 1.5px solid;
  }


`;
const StyledDays = styled(Button)`
  width: 14vw;
  margin-left: 1%;
`;

const SaveFix = styled.button`
  margin: 50px auto;
  height: 60px;
  cursor: pointer;
  width: 80vw;
  border-radius: 5px;
  color: #fff;
  background-color: #478529;
  border: none;
`;

const StyledContainer = styled(Container)`
max-width: 623px;
.MuiInputBase-input ,.MuiOutlinedInput-input {
  width: 100%;
}


`;
const StyledTypography = styled(Typography)`
  text-transform: capitalize;
  .MuiTypography-body1 {
    width: 300px;
    color: blue;
  }
`;
const StyleLeft = styled.div`
  text-align: left;
  margin-left: 3%;
`;

const StyledUp = styled.div`
  text-transform: capitalize;
  width: 150px;
  font-size: 18px;
  font-family: Raleway;
`;

const StyledP = styled.p`
  display: flex;
  font-size: 18px;
  font-family: Raleway;
`


const mapStateToProps = state => {
  console.log(state)
  return {
    ...state
  };
};



const ReduxForms = reduxForm({
  form: "MaterialUiForm", // a unique identifier for this form
  validate
})(CreateMarket);


const CreateMarketContainer = (props) =>
{
  const init = {
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
  function handleRedux(values) 
  {
    props.createNewMarket({...init, ...values});
  }
  //if(props.checkMarketData.updated) {return <div>DONE</div>}
  return (<ReduxForms {...props} onSubmit={handleRedux} redirect={props.checkMarketData.updated} />);
}

export default connect(
  mapStateToProps,
  { createNewMarket, updateMarket }
)(CreateMarketContainer);
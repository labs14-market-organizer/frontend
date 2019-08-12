import React from "react";
import Arrow from "../assets/ic-arrow-back.svg";
import {
  TextField,


  Typography,
  Container
} from "@material-ui/core";
//import ToggleButton from '@material-ui/lab/ToggleButton';
import Button from "@material-ui/core/Button";

import Radio from "@material-ui/core/Radio";
import RadioButtonGroup from "@material-ui/core/RadioGroup"

import "../scss/CreateMarket.scss";
import { createNewMarket, updateMarket } from "../redux/actions/marketData";
import { connect } from "react-redux";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import {Redirect,  withRouter } from "react-router-dom";
import normalizePhone from "./NormalizePhone";

function validate (values) {
  const errors = {};
  const requiredFields = [
    "Market Name",
    "Market Description",
    "market_type",
    "Address",
    "City",
    "State",
    "Zip Code",
    "phone",
    "email",
    "rules"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `${field.charAt(0).toUpperCase() +
        field.slice(1)} Is Required`;
    }
  });
  if (values.Website && !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(values.Website)) 
    errors.Website = "Invalid Website";
    if(values.operation === "\"invalid hours\"") errors.operation = "Start cant be after End"
    else try {if(!values.operation || JSON.parse(values.operation).filter(x=> x.start && x.end).length < 1) errors.operation = "Must define hours";}
    catch {errors.operation = "Must define hours"}
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
    if(this.props.market)
    {
      this.isUpdating = true;
      let market = this.props.market;
      let opp = this.state.operation.map(x=> {let r = market.operation.filter(z=> x.day === z.day); return r && r.length && r.length > 0 ? { day: r[0].day, start: r[0].start, end: r[0].end} : x })
      opp = opp.map(x=> 
        {
          if(!x) return x; 
          let f = (b)=> 
          {
            if(!b) return b;
            b = b.split(":");
            b.length = 2; 
            return b.join(":")
          }
          x.start = f(x.start);
          x.end = f(x.end);
          return x;
        }) 
      this.state.operation = opp;
      this.props.initialize(
        {
          id: market.id,
          "Market Name": market.name,
          "Market Description": market.description,
          Address: market.address,
          City: market.city,
          State: market.state,
          "Zip Code": market.zipcode,
          Website: market.website,
          Facebook: market.facebook,
          Twitter: market.twitter,
          Instagram: market.instagram,
          market_type: market.type,
          email: market.email,
          phone: market.phone,
          rules: market.rules,
          operation: market.operation ? JSON.stringify(market.operation) : ""
        }
      )
    }
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  changeDay = e => {
    let newDaysList;
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
      return newList;
  }

   touched = false
  

  setHours = e => {
    e.preventDefault();
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
      return sortOperation;
    } else {
    }
    return "invalid hours";
};

  militaryConvert(time){
    time = String(time);
    let hours = time.split('');
    let am = "am";
    let combined, subtractedHours, rest;
    if (hours[0] === "0"){
      combined = hours[1] + hours[2] + hours[3] + hours[4] + am;
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
  goBack = () => {
    return this.props.history.goBack();
  }


  render(){
    const {handleSubmit, pristine, submitting } = this.props;
    if(this.props.redirect) {return <Redirect to="/addbooths"/>}
    return (
      <form onSubmit={handleSubmit}>
        <Header>
          <StyledImg src={Arrow} onClick={this.goBack} />
          <CreateHeader>{(this.isUpdating) ? "Edit Market" : "Create Market" }</CreateHeader>
        </Header>
        {/* <div className="addPhoto">
            <img />
            <p className="add">ADD COVER PHOTO</p>
        </div> */}
        <Container maxWidth="sm">
          <StyledField
            component={renderTextField}
            required
            id="name"
            label="Market Name"
            name="Market Name"
          />
        <br />
        <StyledField
            component={renderTextField}
            required
            id="description"
            label="Market Description"
            name="Market Description"
            rows="3"
            multiline
          />
          <StyledField
            component={renderTextField}
            required
            id="rules"
            label="Market Rules"
            name="rules"
            rows="5"
            multiline
          />
          <StyledRules>Rules, Code of Conduct, or anything the vendors need to acknowledge before they can join your market</StyledRules>
          
          <hr></hr>
          <StyledContact>Contact Information</StyledContact>
          <StyledField
            component={renderTextField}
            required
            id="email"
            label="Market Email Address"
            name="email"
          />
          <StyledField
            component={renderTextField}
            required
            id="phone"
            type="text"
            label="Market Phone Number"
            name="phone"
            normalize={normalizePhone}
          />
        <StyledField
            component={renderTextField}
            required
            id="address"
            label="Address"
            name="Address"
          />
        <StyledField
            component={renderTextField}
            required
            id="city"
            label="City"
            name="City"
          />
        </Container>
        <StyledContainer
          style={{
            display: 'inline-flex',
            justifyContent: 'space-between'
          }}>
          <StyledField
              component={renderTextField}
              required
              id="state"
              label="State"
              name="State"
              style={{ 
                width: "48%" 
              }}
            />
            <StyledField
              component={renderTextField}
              required
              id="zipcode"
              label="Zip Code"
              name="Zip Code"
              style={{ width: "48%" }}
            />
            
        </StyledContainer>
        <Container maxWidth="sm">
        <hr></hr>
        
        <StyledContact>Social Media</StyledContact>
        </Container>
        <Container maxWidth="sm">
        <StyledField
            component={renderTextField}
            id="website"
            label="Website"
            name="Website"
          />
          <StyledField
            component={renderTextField}
            id="facebook"
            label="Facebook"
            name="Facebook"
          />
          <StyledField
            component={renderTextField}
            id="twitter"
            label="Twitter"
            name="Twitter"
          />
          <StyledField
            component={renderTextField}
            id="instagram"
            label="Instagram"
            name="Instagram"
          />
        </Container>
        <StyleLeft>
        <h5 style={{fontFamily: "Raleway", marginBottom: "10px"}}>Market Status</h5>
        {/*Radio buttons, default to public market*/}
      <StyledRadioField name="market_type" component={renderRadioGroup}>
        <StyledRadioDiv>
          <RadioStyled value="Public" label="Public" name="Public"/>
          <StyledRadioDiv2>Public Market</StyledRadioDiv2>
        </StyledRadioDiv>
        <br />
        <StyledRadioDiv>
          <RadioStyled id="Private" value="Private" label="Private" name="Private"/>
          <StyledRadioDiv2 > Private Market</StyledRadioDiv2>
        </StyledRadioDiv>
      </StyledRadioField>
      <hr></hr>
        <h4 style={{fontFamily: "Raleway"}}>Market Days {'&'} Times Of Operation</h4>
        <StyledDiv2>
  
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
          </StyledDiv2>
          <div style={{display: "flex", paddingBottom: "32px"}}>
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
          {/* <Button
            variant="outlined"
            className="biggerButton"
            size="large"
            color="secondary"
            onClick={e => this.setHours(e)}
            style={{width: "80vw", marginTop: "-20px", height: "60px", marginBottom: "32px"}}
          >
            +ADD HOURS
          </Button> */}
          <Field 
            name="operation" 
            component={renderButton}
            label={"Add Hours"}
            variant="outlined"
            className="biggerButton"
            size="large"
            color="secondary"
            prefunc={this.setHours}
            operation={this.state}
          >
          </Field>
        </StyledDiv>    
        
      
       
        
        {this.state.operation.map(item => {
                        return (item.start !== null) ? 
                        <StyledP5><StyledUp style={{fontWeight: "600"}}> {item.day}:</StyledUp> <StyledUp2>{this.militaryConvert(item.start)} - {this.militaryConvert(item.end)}</StyledUp2>
                          <Field 
                            component={renderButton} 
                            name="operation" 
                            className="xButton"
                            label={"x"}  
                            size="small"
                            color="secondary" 
                            Style={{marginTop: "25px"}}
                            prefunc={(e) => this.deleteTime(e, item.day)}
                          />
                            </StyledP5> 
                        : <StyledP5> <StyledUp style={{fontWeight: "600"}}>{item.day}:</StyledUp> CLOSED </StyledP5>
                    })}
        <br />
        </StyleLeft>  
        <div>
          <SaveFix type="submit" disabled={pristine || submitting || this.props.checkMarketData.fetching }>
            {this.props.checkMarketData.fetching ? "Loading..." : "Next"}
          </SaveFix>
        </div>
      </form>
    );
  }
};

const StyledContact = styled.p`
  font-family: Raleway;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.33;
  text-align: left;
`

const StyledRules = styled.p`
  font-family: Raleway;
  font-size: 12px;
  line-height: 1.5;
  color: #3a3a3a;
  text-align: left;
`;
const Header = styled.div`
  display: flex;
  background-color: #478529;
  color: white;
  height: 60px;
`;

const StyledImg = styled.img`
  margin-left: 16px;
  margin-top: 0;
  cursor: pointer; 
  margin-right: 16px; 

`;
const CreateHeader = styled.h4`
  margin-top: 20px;
  font-family: Raleway;
  font-size: 18px;
`;

const StyledRadioDiv = styled.div`
  height: 25px;
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledRadioDiv2 = styled.div`
  font-family: Raleway;
  margin-top: 5px;
  align-text: center;

`;

const StyledRadioField = styled(Field)`
  height: 70px;
  margin-bottom: 20px;
`;

const RadioStyled = styled(Radio)`
  margin-bottom: 0;
  margin-top: 0;
`

const StyledField = styled(Field)`
.MuiInputBase-input{
  font-family: Roboto;
}
  
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 10px auto;
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
    font-size: 16px;
    
  }
  .biggerButton {
      font-family: Raleway;
      width: 300px;
      height: 60px;
      font-size: 18px;
      font-weight: bold;
      border-radius: 5px;
  }
  .MuiButton-outlined {
    border: 1.5px solid;
  }

 `;
 const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 10px auto;
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
    font-size: 16px;
    text-transform: capitalize;
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
  text-transform: uppercase;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  width: 300px;
  border-radius: 5px;
  color: #fff;
  background-color: #478529;
  border: none;
  margin-top: 10px;
  :disabled
  {
    background-color: #fff;
    color: #999;
    border: 2px #478529 solid;
  }
`;

const StyledContainer = styled(Container)`
  max-width: 600px;
  .MuiInputBase-input ,.MuiOutlinedInput-input {
    width: 100%;
}


`;
// const StyledTypography = styled(Typography)`
//   text-transform: capitalize;
//   .MuiTypography-body1 {
//     width: 300px;
//     color: blue;
//   }
// `;
const StyleLeft = styled.div`
  text-align: left;
  max-width: 600px;
  margin: 0 4%;
  @media (min-width: 600px){
    margin: 0 auto;
    padding-left: 4%;
  }
`;


const StyledUp = styled.div`
  text-transform: capitalize;
  width: 38%;
  font-size: 18px;
  font-family: Raleway;
`;

const StyledUp2 = styled.div`
  text-transform: capitalize;
  width: 55%;
  font-size: 18px;
  font-family: Raleway;
`;

// const StyledP = styled.p`
//   display: flex;
//   font-size: 18px;
//   font-family: Raleway;

// `

const StyledP5 = styled.div`
  display: flex;
  font-size: 18px;
  font-family: Raleway;
  margin-top: 32px;
  .xButton {
    min-width: 2px;
  }
  @media(min-width: 450px){
    max-width: 450px;
  }
`

const mapStateToProps = state => {
  return {
    ...state
  };
};



const ReduxForms = reduxForm({
  form: "MaterialUiForm", // a unique identifier for this form
  validate
})(connect(mapStateToProps, {})(withRouter(CreateMarket)));


class CreateMarketContainer extends React.Component
{
  hasUpdated = false;
  componentWillMount()
  {
    this.isUpdating = !!this.props.checkMarketData.marketData
    this.hasUpdated = false;
  }
  handleRedux = (values) =>
  {
    this.hasUpdated = true;
    
    if (values.id && values.id > 0 ) this.props.updateMarket(values,values.id)
    else this.props.createNewMarket({ ...values});
  }
  render(){
    if(!this.props.checkMarketData.fetching && this.hasUpdated) return <Redirect to={`${this.isUpdating ? "/" : "/addbooths"}`}/>
    return (<ReduxForms onSubmit={this.handleRedux} market={this.props.checkMarketData.marketData}/>);
  }
}

export default connect(
  mapStateToProps,
  { createNewMarket, updateMarket }
)(CreateMarketContainer);
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
import { withStyles } from "@material-ui/core/styles";
import "../scss/CreateMarket.scss";
import { createNewMarket, updateMarket } from "../redux/actions/marketData";
import { connect } from "react-redux";
import styled from "styled-components";

class CreateMarket extends React.Component {
  isUpdating = false;
  constructor(props) {
    super(props);
    this.state = this.props.currentMarket;
    if (!this.state)
    this.state = {
      name: '',
      description: '',
      address: '',
      operation: [{ day: 'sunday', start: null, end: null }, { day: 'monday', start: null, end: null },{ day: 'tuesday', start: null, end: null }, { day: 'wednesday', start: null, end: null },{ day: 'thursday', start: null, end: null }, { day: 'friday', start: null, end: null }, { day: 'saturday', start: null, end: null }],
      market_type: 1, //(1 = private, 2=public)
      website: '',
      facebook: '',
      image: '', 
      twitter: '',
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
      radio: "Public Market",

  };
    else this.isUpdating = true;
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  onRadioChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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
      alert('Please change the time to be accurate')
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

  render() {
    if (this.props.updated) {
      this.props.history.push('/')
  }
    return (
      <form>
        <div className="header">
          <img src={Arrow} />
          <h4 className="createHeader">{(this.isUpdating) ? "Edit Market" : "Create Market" }</h4>
        </div>
        {/* <div className="addPhoto">
          <img />
          <p className="add">ADD COVER PHOTO</p>
        </div> */}
        <Container maxWidth="sm">
          <TextField
            error={this.touched && this.state.name == "" ? true : false}
            required
            id="name"
            label="Market Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth={true}
            autoComplete={true}
          />
          <br />
          <TextField
            error={this.touched && this.state.description == "" ? true : false}
            required
            id="description"
            label="Market Description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            margin="normal"
            rows="3"
            variant="outlined"
            fullWidth={true}
            multiline
          />
          <br />
          <TextField
            error={this.touched && this.state.address == "" ? true : false}
            required
            id="address"
            label="Address"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            error={this.touched && this.state.city == "" ? true : false}
            required
            id="city"
            label="City"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />
          </Container>
          <StyledContainer>
            <TextField
              error={this.touched && this.state.state == "" ? true : false}            
              required
              id="state"
              label="State"
              name="state"
              value={this.state.state}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
              style={{ width: "44%" }}
            />
            <TextField
              error={this.touched && this.state.zipcode == "" ? true : false}
              required
              id="zipcode"
              label="Zip Code"
              name="zipcode"
              value={this.state.zipcode}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
              style={{ width: "44%", marginLeft: "8%" }}
              fullWidth={true}
            />
            </StyledContainer>
            <Container maxWidth="sm">
            <TextField
            id="website"
            label="Website"
            name="website"
            value={this.state.website}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />

          <br />

          <TextField
            id="facebook"
            label="Facebook"
            name="facebook"
            value={this.state.facebook}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            id="twitter"
            label="Twitter"
            name="twitter"
            value={this.state.twitter}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            id="instagram"
            label="Instagram"
            name="instagram"
            value={this.state.instagram}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />
          
        </Container>  
        <h6>Market Status</h6>
        {/*Radio buttons, default to public market*/}
        <Radio
          name="radio"
          value="Public Market"
          checked={this.state.radio === "Public Market"}
          onChange={e => this.onRadioChange(e)}
        />
        Public Market
        <br />
        <Radio
          name="radio"
          value="Private Market"
          checked={this.state.radio === "Private Market"}
          onChange={e => this.onRadioChange(e)}
        />
        Private Market
        <h4>Market Days {'&'} Times Of Operation</h4>
        <div>
          <StyledDiv>
            <Button
              variant={this.state.sunday ? "contained" : "outlined"}
              color="secondary"
              name="sunday"
              value={this.state.sunday}
              onClick={e => this.changeDay(e)}
            >
              Su
            </Button>
            <Button
              variant={this.state.monday ? "contained" : "outlined"}
              color="secondary"
              name="monday"
              value={this.state.monday}
              onClick={e => this.changeDay(e)}
            >
              M
            </Button>
            <Button
              variant={this.state.tuesday ? "contained" : "outlined"}
              color="secondary"
              name="tuesday"
              value={this.state.tuesday}
              onClick={e => this.changeDay(e)}
            >
              Tu
            </Button>
            <Button
              variant={this.state.wednesday ? "contained" : "outlined"}
              color="secondary"
              name="wednesday"
              value={this.state.wednesday}
              onClick={e => this.changeDay(e)}
            >
              W
            </Button>
            <Button
              variant={this.state.thursday ? "contained" : "outlined"}
              color="secondary"
              name="thursday"
              value={this.state.thursday}
              onClick={e => this.changeDay(e)}
            >
              Th
            </Button>
            <Button
              variant={this.state.friday ? "contained" : "outlined"}
              color="secondary"
              name="friday"
              value={this.state.friday}
              onClick={e => this.changeDay(e)}
            >
              F
            </Button>
            <Button
              variant={this.state.saturday ? "contained" : "outlined"}
              color="secondary"
              name="saturday"
              value={this.state.saturday}
              onClick={e => this.changeDay(e)}
            >
              Sa
            </Button>
          </StyledDiv>
          <TextField
            name="start"
            type="time"
            onChange={this.handleChange}
            defaultValue="00:00"
            InputLabelProps={{
              shrink: true
            }}
          />
          {/**This code just adds the hiphen between the time boxes */}
          &nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;
          <TextField
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
          >
            +ADD HOURS
          </Button>
        </StyledDiv>    
        
      
       
        
        {this.state.operation.map(item => {
                        return (item.start !== null) ? <Typography variant="body1">{item.day}: {item.start} - {item.end} 
                        <button value={this.state[item.day]} onClick={(e) => this.deleteTime(e, item.day)}>X</button></Typography> 
                        : <StyledTypography variant="body1">{item.day} : Closed </StyledTypography>
                    })}
        <br />
        <SaveFix 
            onClick={(e) => {this.save(e); this.touched = true }}>

            <Typography variant="button"> Next</Typography>      
        </SaveFix>
      </form>
    );
  }
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px auto;
  max-width: 520px;
  .MuiButton-root {
    height: 50px;
    width: 3%;
    margin: 0 auto;
    cursor: pointer;
  }

  .biggerButton {
    width: 200px;
  }

  .MuiButton-outlined {
    border: 1.5px solid;
  }


`;
const SaveFix = styled.button`
  margin: 50px auto;
  height: 50px;
  cursor: pointer;
  width: 420px;
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


`
const StyledTypography = styled(Typography)`
text-transform: capitalize;

`

const mapStateToProps = state => {
  return {
    //states
    ...state.checkUserData
  };
};

export default connect(
  mapStateToProps,
  { createNewMarket, updateMarket }
)(CreateMarket);

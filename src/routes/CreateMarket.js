import React from "react";
import Arrow from "../assets/ic-arrow-back.svg";
import {
  TextField,
  MuiThemeProvider,
  createMuiTheme,
  Typography,
  Container,
  Grid
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
        name: "",
        description: "",
        address: "",
        operation: [],
        market_type: 1, //(1 = private, 2=public)
        website: "",
        facebook: "",
        image: "",
        twitter: "",
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
    console.log(day);
    let newDays = this.state.operation;
    let days = newDays.filter(dayz => dayz.day !== day);
    this.setState({
      operation: [...days]
    });
  };

  // applyStyledButton = (e) => {
  //     return(
  //     this.render(<Button name="sunday" value={this.state.sunday} onClick={(e) =>(this.changeDay(e) )} variant={this.state[e.target.name] ? "containered" : "outlined"}>SUNDAY </Button>)
  //     )}

    setHours = (e) => {
        e.preventDefault();
        let startTime = this.state.start;
        let endTime = this.state.end;
        let newDaysList = this.state.daysList;
        let currentOpList = this.state.operation;
        const normalWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        let opList = [];
        for (let i = 0; i < currentOpList.length; i++) { //the purpose of these loops are to check to see if the old list has same days as the new list and if it does the old list day will be removed.
            for (let x = 0; x < newDaysList.length; x++) {
                if (currentOpList[i] !== undefined) {
                    if (currentOpList[i].day === newDaysList[x][0]) {
                        currentOpList.splice(i, 1)
                        i--;
                    }
                }
            }
        }
      }
    }

    //currently its hard coded.
    this.setState({
      ...this.state,
      operation: [...currentOpList, ...opList],
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
  };
  save = e => {
    e.preventDefault();
    if (this.state.isUpdating) {
      this.props.updateMarket(this.state);
    } else {
      this.props.createNewMarket(this.state);
    }
  };

        let sortOperation = []; //sorting the days.
        let op = [...currentOpList, ...opList]
        for (let i = 0; i < normalWeek.length; i++) {
            for (let x = 0; x < op.length; x++){
                if (normalWeek[i] === op[x].day) {
                    sortOperation.push(op[x])
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
        })

       
    }

    save = (e) => {
        e.preventDefault()
        if (this.state.isUpdating) {
            this.props.updateMarket(this.state)
        } else {
            this.props.createNewMarket(this.state)
        }
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <>
                <div className="header">
                    <img src={Arrow}/>
                    <h4 className="createHeader">Create Market</h4>
                </div>
                <div className="addPhoto">
                    <img />
                    <p className="add">ADD COVER PHOTO</p>
                </div>
                <Container maxWidth="sm">
                <TextField
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
                <br></br>
                <TextField
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
                <br></br>
                <TextField
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
                <div className="flexes">
                     <TextField
                    required
                    id="state"
                    label="State"
                    name="state"
                    value={this.state.state}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    style={{width: "45%"}}
                  
                />
                     <TextField
                    required
                    id="zipcode"
                    label="Zip Code"
                    name="zipcode"
                    value={this.state.zipcode}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    style={{width: "45%", marginLeft: "9%"}}
                    
                />
                </div>
                </Container>
                <h6>Select market hours of operation</h6>
              
                <div>
                    <button className={this.state.sunday ? "colorButton" : 'regularButton' } name="sunday" value={this.state.sunday} onClick={(e) => this.changeDay(e)}>Su</button>
                    <button  className={this.state.monday ? "colorButton" : 'regularButton' } name="monday" value={this.state.monday} onClick={(e) => this.changeDay(e)}>M</button>
                    <button  className={this.state.tuesday ? "colorButton" : 'regularButton' } name="tuesday" value={this.state.tuesday} onClick={(e) => this.changeDay(e)}>Tu</button>
                    <button  className={this.state.wednesday ? "colorButton" : 'regularButton' } name="wednesday" value={this.state.wednesday} onClick={(e) => this.changeDay(e)}>W</button>
                    <button  className={this.state.thursday ? "colorButton" : 'regularButton' } name="thursday" value={this.state.thursday} onClick={(e) => this.changeDay(e)}>Th</button>
                    <button  className={this.state.friday ? "colorButton" : 'regularButton' } name="friday" value={this.state.friday} onClick={(e) => this.changeDay(e)}>F</button>
                    <button className={this.state.saturday ? "colorButton" : 'regularButton' } name="saturday" value={this.state.saturday} onClick={(e) => this.changeDay(e)}>Sa</button>
                    <br />
        <br />
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
        <br />
        <br />
        <StyledDiv>
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          onClick={e => this.setHours(e)}
        >
          +ADD HOURS
        </Button>
        </StyledDiv>
        <br />
        {this.state.operation.length > 0 ? <h2>Market Hours</h2> : null}
        {this.state.operation.map(item => {
          return (
            <div>
              <h8>
                Day: {item.day}, Open: {item.start}, Close: {item.end}
              </h8>
              <span>
                <button onClick={e => this.deleteTime(e, item.day)}>
                  Delete time
                </button>
              </span>
            </div>
          );
        })}
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
        <br />
        {/*This can be removed before deployment, was used for testing */}
        Radio: {this.state.radio} <br />
        <Container maxWidth="sm">
          <TextField
            id="website"
            label="Website"
            name="website"
            value={this.state.website}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
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
          />
          <TextField
            id="twitter"
            label="Twitter"
            name="twitter"
            value={this.state.twitter}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="instagram"
            label="Instagram"
            name="instagram"
            value={this.state.instagram}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
        </Container>
        <br />
        <button>
        <SaveButton
          variant="contained"
          color="primary"
          onClick={e => this.save(e)}
        >
          SAVE
        </SaveButton>
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    //states
    ...state.checkUserData
  };
};

const StyledDiv = styled.div`
  .MuiButton-root {
    box-sizing: border-box ;
    min-height: 60px;
    min-width: 60px;
    
    margin: 8px;
    line-height: 24px;
    font-size: 16px;
    border-radius: 8%;
  }
  .MuiButton-outlined {
    box-sizing: border-box ;
    border: 1.5px solid;
  }
`;

const SaveButton = styled(Button)`
    &&.MuiButton-root {
        max-width: 600px;
        width: 60%;
        height: 50px;
        line-height: 24px;
    font-size: 16px;
    }
`
export default connect(
  mapStateToProps,
  { createNewMarket, updateMarket }
)(CreateMarket);

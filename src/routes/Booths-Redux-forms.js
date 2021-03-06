import React from "react";
import Arrow from "../assets/ic-arrow-back.svg";
import Edit from "../assets/border-color-24-px.svg";
import {
  TextField,
  InputAdornment,
  Box
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "../scss/CreateMarket.scss";
import { createNewBooth, updateBooth, deleteBooth } from "../redux/actions/boothData";
import { connect } from "react-redux";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import {Redirect, withRouter} from "react-router-dom";
import {getMarketById} from "../redux/actions/marketData"
import "../scss/ReduxForm.scss";
import { Mixpanel } from '../redux/actions/mixpanel';

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
  values.length = parseInt(String(Math.abs(parseInt(values.length))).substring(2,0));
  values.width = parseInt(String(Math.abs(parseInt(values.width))).substring(2,0));
  values.numberofbooths = parseInt(String(Math.abs(parseInt(values.numberofbooths))).substring(3,0));
  //values.width.length = 2;
  values.boothprice = Math.abs(parseInt(values.boothprice * 100)/100); // cap it to 2 decimal places
  if(values.boothprice <= 0) values.boothprice = "";

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
  currentMarket = null;
  erase = false;
  hasUpdated = true;
  constructor(props)
  {
    super(props);
    if(this.props.currentBooth)
      this.state = this.cleanData(this.props.currentBooth);
    else
      this.state = {
          id: -1,
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
      if(this.props.market)
      {
        this.currentMarket = this.props.market;
        this.currentBooths = this.props.market.booths.map(x=> this.cleanData(x));
      }
      else this.redirect = true;
  }
  cleanData(booth)
  {
    return {
      id: booth.id ? booth.id : -1,
      boothtype: booth.name,
      numberofbooths: booth.number,
      boothprice: booth.price ? booth.price : "",
      length: booth.size && booth.size.length > 0 && booth.size[0] ? booth.size[0] : "",
      width: booth.size && booth.size.length > 1 && booth.size[1] ? booth.size[1] : "",
      boothdescription: booth.description ? booth.description : "",
    }
  }
  changeCurrent(booth, update = true)
  {
    
    this.isUpdating = update;
    this.currentBooth = booth;
    this.props.initialize(
     booth
    )
  }
  componentDidUpdate()
  {
     if(this.erase && this.props.valid && this.props.refresh)
     {
      this.currentBooth = null;
      this.erase = false;
      this.props.initialize(this.cleanData({}))
     }
    this.hasUpdated = true;
    
  }
  componentWillUpdate()
  { 
    this.currentBooths = this.props.market.booths.map(x=> this.cleanData(x));
  }
  goBack = () => {
    return this.props.history.goBack();
  }


  render(){
    const {handleSubmit, pristine, reset, submitting } = this.props;
    if(this.props.clear && this.erase)
    {
      this.erase = false;
      reset();
    }
    return (
      <div>
        <Header>
          <StyledImg src={Arrow} onClick={this.goBack} />
          <CreateHeader>{this.isUpdating ? "Edit" : "Add"} Booths</CreateHeader>
        </Header>
        {/* Styled this div for the time being...will change later */}
    
        <StyledBody>
          {this.isUpdating && !this.currentBooth ? "" : this.form() }
         <BoothContainer >
            {this.currentBooths.map(x=> {
              let flag =  this.props.form.BoothsForm.values && this.props.form.BoothsForm.values.id === x.id ;
              let obj = flag ? this.props.form.BoothsForm.values : x;
              return <StyleBox boxShadow={10}>
              <div className="main-box">
                <div className="price-text">{ obj.boothprice && obj.boothprice > 0 ? `$${Math.round(obj.boothprice)}` : "free"}</div>
                <div className="title-box">
                  <div className="title-text">{obj.boothtype}</div>
                  <div className="title-subtext">{`${obj.numberofbooths} ${obj.numberofbooths < 2 ? "booth":"booths"}`}</div>
                </div>
              </div>
              <div className="edit-box" onClick={()=> {{this.changeCurrent(flag ? null : x);}}} style={flag ? {opacity: "0.5"}: {}} >
                <img src={Edit}/>
                <div className="edit-text">edit</div>
              </div>
            </StyleBox>
            }
            )}
          </BoothContainer>
            {this.isUpdating ? 
                <Button 
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  onClick={() => {this.isUpdating = false; this.changeCurrent(null, false)}}
                  style={{
                      
                      fontSize:'1.4em',
                      margin: '4% 0',
                      height: '80px',
                      width: "65%"
                  }}
                >
                  Add Group
              </Button>
              :
              ""
            }
        </StyledBody>
      </div>
    )

    {/* <Field
            component={renderTextField}
            required
            id="name"
            label="Market Name"
            name="Market Name"
          /> */}
    
  }
  form({handleSubmit, pristine,submitting}= this.props)
  {
    return <form onSubmit={handleSubmit}
              style={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                
              }}
          >
   
          <StyledDiv>
          <Field
            component={renderTextField}
            required
            margin="normal"
            variant="outlined"
            id="name"
            label="Market Name"
            name="Market Name"
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>}}
              style={{
                width: "92vw",
                margin: '20px 1% 1% 1%',
                marginLeft: '0',
                marginBottom: "0px",
                maxWidth: "560px",
              }}
            id="boothtype"
            label="Booth Type"
            name="boothtype"
          />
          <h5 style={{
                  marginTop: '15px',
                  marginBottom: '10px',
                  marginLeft: '2%'
              }}>
              Ex. Standard Booths. Larger Booths. Corner Booths. etc.
          </h5>
          <div
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
          }}>
            <Field
            component={renderTextField}
            required
            margin="normal"
            variant="outlined"
            fullWidth={true}
            id="numberofbooths"
            label="Number of Booths"
            name="numberofbooths"
            type="number"
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
              margin="normal"
              variant="outlined"
              fullWidth={true}
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
                margin: '5px',
                width: "100vw",
                textAlign: "left",
                marginLeft: "3%"
            }}>Size of Booths
          </h5>
          <div
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: "100%",
                marginLeft: "3%"
            }}>
            <Field
            component={renderTextField}
            id="length"
            name="length"
            type="number"
            min="0"
            max="99"
            style={{
                width: '80px',
                marginBottom: '20px'
            }}
            InputProps={{
            endAdornment: <InputAdornment position="end">ft</InputAdornment>
            }}
            />
            <div style={{position: "relative", bottom: "-10px", margin: "0 10px"}}>X</div>
            <Field
              component={renderTextField}
              id="width"
              name="width"
              type="number"
              min="0"
              max="99"
              style={{
                  width: '80px',
                  marginBottom: '20px'
              }}
              InputProps={{
              endAdornment: <InputAdornment position="end">ft</InputAdornment>
              }}
            />
          </div>
          <Field
            component={renderTextField}
            margin="normal"
            variant="outlined"
            id="boothdescription"
            name="boothdescription"
            label="Booth Description"
            multiline rows="4"
            margin="normal"
            style={{ marginBottom: "0px", marginLeft: "2%", marginRight: "3%", width: "91vw", maxWidth: "570px"}}
          />
          {(this.isUpdating ? 
            <div style={{display: "flex", minWidth: "100%"}}  >
            <Button 
              variant="outlined"
              fullWidth
              onClick={() => { this.props.deleteBooth(this.currentBooth.id, this.props.market.id); 
              // this.currentBooths = this.currentBooths.filter(booth => booth.id !== this.currentBooth.id)
              Mixpanel.track('User deleted a booth');
              this.currentBooth = null }} 
              className="redButton"
              style={{
                  width: "46%",
                  color: 'red',
                  fontSize:'18px',
                  margin: '4% 0',
                  height: '60px',
                  marginLeft: "2%"
              }}
        >
            Delete
        </Button>
        <div style={{margin: "0 10px"}}/>
          <Button 
            type="submit"
            disabled={pristine || submitting}
            variant="contained"
            color="primary"
            onClick={(e)=> {this.props.array.insert("redirecttype",0,2);}}
            style={{
                width: "46%",
                fontSize:'18px',
                margin: '4% 0',
                height: '60px',
                marginLeft: "2%"
            }}
          >
            Save
          </Button> 
          </div>

        : <div style={{display: "flex", minWidth: "100%"}} >
        <Button 
          type="submit" 
          disabled={pristine || submitting}
          variant="outlined"
          color="secondary"
          onClick={() => {this.props.array.insert("redirecttype",0,1); this.erase = true; }}
          style={{
              width: "47%",
              fontSize:'18px',
              margin: '4% 0',
              height: '60px',
              marginLeft: "2%"
          }}
        >
            Add Group
        </Button>
        <div style={{margin: "0 10px"}}/>
          <Button 
          type="submit" 
          disabled={pristine || submitting}
          variant="contained"
          color="primary"
          onClick={(e)=> {this.props.array.insert("redirecttype",0,2);}}
          style={{
              width: "46%",
              fontSize:'18px',
              margin: '4% 0',
              height: '60px',
              marginRight: "2%"
          }}
          >
            Save
          </Button>
          </div> )}
        
        <hr/>
        </StyledDiv>
       
        </form>
  }
};

const mapStateToProps = state => {
  return {
    ...state
  };
};



// const StyledContainer = styled(Container)`
//   max-width: 50vw;
//   .MuiInputBase-input ,.MuiOutlinedInput-input {
//     width: 100%;
// }


// `;

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

const StyledDiv = styled.div`
  max-width: 92vw;
  @media(min-width: 600px){
    margin: 0 auto;
    max-width: 600px;
    margin-left: auto;
  }
   .MuiOutlinedInput-root  .MuiOutlinedInput-adornedStart {
    background-color: red;
  }
`
const StyledBody = styled.body`

    @media(max-width:447) {
      width: 84vw;
    height: 100%;
    }
    @media(min-width:600px){
    
    }
    `

const BoothContainer = styled.div`
color: red;
`

const StyleBox = styled(Box)`
 width: 90vw;
 height: 60px;
 border-radius: 10px;
 box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.5);
 background-color: #edf3ea;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 margin: 10px;
 margin-left: 5%;
 @media(min-width: 570px)
 {
   max-width: 570px;
   width: 100%;
   margin: 10px auto;
 }
 .main-box
 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10px;

 }
 .title-box
  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
 .price-text
 {
  margin: 3px 20px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.89;
  letter-spacing: normal;
  color: #478529;
 }
 .title-subtext
 {
  margin: 0;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #484848;
 }
 .title-text
 {
  margin: 0;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #000000;
 
 }
 .edit-box
 {
   margin: 10px 10px;
 }
 .edit-text
 {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #000000;
}
`;

const ReduxForms = reduxForm({
  form: "BoothsForm", // a unique identifier for this form
  validate
})(connect(mapStateToProps, { deleteBooth })(withRouter(CreateMarket)));


class ReduxContainer extends React.Component
{
  handleRedux = (values) =>
  { 
    this.redirecttype = values.redirecttype && values.redirecttype.length > 0 ?         values.redirecttype[values.redirecttype.length-1 ] : 0;
    this.wasfetching = true;
    
    if (values.id > 0) this.props.updateBooth(this.props.checkMarketData.marketData.id, values)
    else this.props.createNewBooth(this.props.checkMarketData.marketData.id,values);
  }
  wasfetching =false;
  redirecttype= 0;
  render(){
    //temp code so we can test
    if(this.redirecttype === 2) return <Redirect to="/"/>
    let clear = this.redirecttype===1;
    this.redirecttype = 0;
    return <ReduxForms onSubmit={this.handleRedux} refresh={clear} market={this.props.checkMarketData.marketData} />
   /*  let redirect = this.props.checkBoothData.updated && this.wasfetching;
    if(this.wasfetching && !this.props.checkBoothData.fetching) this.wasfetching = false;
    return (<ReduxForms onSubmit={this.handleRedux} refresh={""} redirect={redirect} market={this.props.checkMarketData.marketData}/>); */
  }
  componentDidUpdate()
  {
  }
}

export default connect(
  mapStateToProps,
  { createNewBooth, updateBooth, getMarketById }
)(ReduxContainer);
import React from "react";
import Arrow from "../assets/ic-arrow-back.svg";
import Add from "../assets/add.svg";
import {
    TextField,
    InputAdornment,
    Button,
    Typography,
    Container,
    Checkbox
  } from "@material-ui/core";
import { connect } from "react-redux";
import styled from "styled-components";
import { createNewVendor, updateVendor } from "../redux/actions/vendorData";

import { Field, reduxForm, FieldArray  } from "redux-form";
import {Redirect, withRouter, Link} from "react-router-dom";
import FormControlLabel from '@material-ui/core/FormLabel';
import normalizePhone from "./NormalizePhone";

function validate (values) {
    const errors = {};
    const requiredFields = [
      "name",
      "description",
      "email",
      "phone"
      
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
    error={touched && error}

    {...input}
    {...custom}
  />
  )};

  const renderButton = ({ input,
    label, prefunc, Style, meta: { visited, error }, ...rest}) =>{
    {
      let witherror = {color: "red", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "-30px", transition: "margin 0.2s"};
      let noerror = {marginTop: "-50px"}
      return (
      <div
        onClick={e => {let opp = prefunc(e); input.onChange(JSON.stringify(opp));}}
        error={visited && error ? error : ""}
        errorText={true}
        {...input}
        style={error && visited ? {color: "red"} : {...Style}}
        {...rest}
      >
      
      </div>
    );}}

    const renderCheckbox = ({ input, label }) => (
      <Checkbox
        label={label}
        checked={input.value==="false" ? false : true}
        onClick={() => {input.onChange(input.value==="false" ? "true" : "false")}}
      />
    );

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} placeholder={label} />
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );
    const renderItems = ({ fields, meta: { input, error, submitFailed, reset } }) => (
      <div>
        
        {fields.getAll().map((item, index) => (
         (index === 0) ? 

        <FlexContainer>
          <Field
              name={item}
              type="text"
              component={renderField}
              style={{marginTop: "5px"}}
              margin="normal"
              fullWidth={true}
              style={{marginTop: "-5px", marginLeft: "30px", marginRight: "5px"}}
              /> 
       
            <button type="button" onClick={() => fields.unshift("")}>
             Add Item
            </button>
        </FlexContainer>
     
    
    :
        <FlexContainer key={index} style={{marginTop: "10px"}}>
        <Button type="button" onClick={() => fields.remove(index)}>
            X
        </Button>
        <Field
          name={item}
          type="text"
          component={renderField}
          style={{marginTop: "5px"}}
        />
          </FlexContainer>
        ))}
      </div>
    );
   

  class CreateVendor extends React.Component{
    isUpdating = false;
    constructor(props){
        super(props);
        this.state = this.props.currentVendor;
        if (!this.state)
        this.state = {
            name: '',
            description: '',
            items: [],
            item: '',
            electricity: "false",
            ventilation: "false",
            loud: "false",
            other_special: '',
            website: '',
            facebook: '',
            twitter: '',
            instagram: '',
            email: this.props.checkUserData.userData.email
        };
        else this.isUpdating = true;
        this.state.electricity = String(this.state.electricity)
        this.state.ventilation = String(this.state.ventilation)
        this.state.loud = String(this.state.loud)
        this.props.initialize(this.state);
    }
    handleChange = e => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
      };
      
    checkChange = name => e => {
      e.preventDefault()
      this.setState({ ...this.state, [name]: e.target.checked });
    };

    addItem = e => {
      e.preventDefault();
      if (this.state.item === '') return this.state.items;

      let item = this.state.item;
      let itemList = [...this.state.items, item];
      this.setState({
        ...this.state,
        items: itemList,
        item: ''
      })
     
      return itemList;
    }
    addCount = e => {
      let newCount = [...this.state.count, this.state.count.length]
          this.setState({
            ...this.state,
            count: newCount
          })
        }

    deleteItem = (e, number) => {
      e.preventDefault();
      const newItems = this.state.items.filter((item, index) => index !== number);
      this.setState({
        ...this.state,
        items: newItems
      })
     
      return newItems;
    }
    save = e => {
    e.preventDefault();
    (this.updating) ? this.props.updateVendor(this.state) : this.props.createNewVendor(this.state)
    }
    shouldCheck()
    {
      return this.state.other_special !== "" && this.state.other_special;
    }

    goBack= () => {
      return this.props.history.goBack();
    }
    
    render() 
    {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div>
                <Header>
                  <StyledImg src={Arrow} onClick={this.goBack} />
                  <CreateHeader>{(this.isUpdating) ? "Edit Vendor Profile" : "Create Vendor Profile" }</CreateHeader>
                </Header>
                <Container maxWidth="sm">
                <form onSubmit={handleSubmit}>
                
                    <StyledField
                        component={renderTextField}
                        required
                        id="name"
                        label="Business Name"
                        name="name"
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                       
                    />
                    <StyledField
                        component={renderTextField}
                        required
                        id="description"
                        label="Business Description"
                        name="description"
                        style={{marginTop: "20px"}}
                        rows="3"
                        multiline
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                    />
                        <StyledField
                        component={renderTextField}
                        required
                        id="email"
                        label="Business Email Address"
                        name="email"
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                       
                    /><br></br>
                    <br></br>
                        <StyledField
                        component={renderTextField}
                        required
                        id="phone"
                        name="phone"
                        label="Business Phone Number"
                        type="text"
                        fullWidth={true}
                        variant="outlined"
                        normalize={normalizePhone}
                    />
                    <StyledContainer>
                    <br></br>
                    <StyledP>What are the specific items you plan to sell?</StyledP>
                    
                    
     
                <form>
                
                <FieldArray name="items" component={renderItems} />
                  </form>
                    <FlexContainer>
                    {/* <StyledField
                        component={renderButton}
                        prefunc={this.addItem}
                        operation={this.state}
                        id="items"
                        label="items"
                        name="items"
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                    >
                    <img src={Add} style={{marginTop: "10px"}}/>   
                    </StyledField>
                    <TextField
                          margin="normal"
                          id="item"
                          label="Add New Item"
                          name="item"
                          onChange={this.handleChange}
                          value={this.state.item}
                          margin="normal"
                          fullWidth={true}
                          style={{marginTop: "-5px", marginLeft: "30px", marginRight: "5px"}}
                     /> */}
                      {/* <StyledField
                        component={renderButton}
                        prefunc={this.addItem}
                        operation={this.state}
                        id="items"
                        label="items"
                        name="items"
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                        >
                          <AddButton>Add Item</AddButton>
                        </StyledField> */}
                     </FlexContainer>

                    {/* {(this.state.items.length > 0) ? <p>Vendor Items</p>: null}
                    {this.state.items.map((item, index) => 
                    <FlexContainer  key={index}>
                        <StyledField
                          component={renderButton}
                          prefunc={(e) => this.deleteItem(e,index)}
                          operation={this.state}
                          id="items"
                          label="items"
                          name="items"
                        >
                          <StyledButton>X</StyledButton>
                        </StyledField>
                       <StyledP1>{item}</StyledP1>  */}
                       
                    {/* </FlexContainer>
                    )} */}
                    
                     <StyledP>

                         Special Considerations
                     </StyledP>
                    <FlexColumn>
                    <FlexContainer>
                      <Field
                        name="electricity"
                        component={renderCheckbox}
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    /> <StyledP2>Need Electricity</StyledP2>
                    </FlexContainer>
                    <FlexContainer>
                    <Field
                        name="ventilation"
                        component={renderCheckbox}
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    /><StyledP2>Need Ventilation</StyledP2>
                    </FlexContainer>
                    <FlexContainer>
                    <Field
                        name="loud"
                        component={renderCheckbox}
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    /><StyledP2>Have loud machinery</StyledP2>
                    </FlexContainer>
                   <FlexContainer>
                  <Checkbox checked={this.shouldCheck()}/>
                   <Field
                        id="other_special" 
                        label="Other"
                        name="other_special"
                        component={renderTextField}
                        style={{fontFamily:"Raleway", marginTop: "-12px"}}
                        onBlur={(e)=> this.setState({...this.state, other_special: e.target.value})}
                     />
                    </FlexContainer>
                    </FlexColumn>
                    </StyledContainer>
                    <StyledField
                        component={renderTextField}
                        id="website"
                        label="Website"
                        name="website"
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                    />
                    <StyledField
                        component={renderTextField}
                        id="facebook"
                        label="Facebook"
                        name="facebook"
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                    />
                    <StyledField
                        component={renderTextField}
                        id="twitter"
                        label="Twitter"
                        name="twitter"
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                    />
                    <StyledField
                        component={renderTextField}
                        id="instagram"
                        label="Instagram"
                        name="instagram"
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                    />
                     <GreenButton type="submit" variant="outlined" disabled={pristine || submitting || this.props.checkVendorData.fetching} >
                     {this.props.checkVendorData.fetching ? "Loading..." : "Save"}
                     </GreenButton>
                     </form>
                </Container>
            </div>
        )
    }
    
}

const AddButton = styled(Button)`
  border: 1px solid #044d4c;
  width: 87px;
  height: 40px;
  text-transform: capitalize;
  border-radius: 5px;
  color: #044d4c;
  font-family: Raleway;
  font-size: 16px;
  margin-top: 5px;
`;

const StyledField = styled(Field)`
  .MuiInputBase-input{
  font-family: Roboto;
  font-size: 16px;
}
`
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
  :disabled
  {
    background-color: #fff;
    color: #999;
    border: 2px #478529 solid;
  }
`;

const StyledP = styled.p`
  font-family: Raleway;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.5;
`;

const StyledP1 = styled.p`
font-family: Raleway;
font-size: 16px;
line-height: 1.2;
margin-top: 2px;
`;

const StyledP2 = styled.p`
font-family: Raleway;
font-size: 16px;
line-height: 1.2;
margin-top: 15px;
`;


const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexContainer = styled.div`
  display: flex;
  margin-top: -10px;
`;
const StyledContainer = styled.div`
  text-align: left;
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;
  font-size: 18px;
  margin-right: 15px;
  font-family: Raleway;
`;


const mapStateToProps = state => {
    return {
      ...state
    };
  };
  

const ReduxForms = reduxForm({
    form: "VendorForm", // a unique identifier for this form
    validate
  })(connect(mapStateToProps,{})(withRouter(CreateVendor)));

  
  class ReduxContainer extends React.Component
  {
    componentWillMount()
    {
      this.isUpdating = !!this.props.checkMarketData.marketData
      this.hasUpdated = false;
    }
    handleRedux = (values) =>
    {
      this.hasUpdated = true;
      if (values.id && values.id > 0) this.props.updateVendor(values, values.id)
      else this.props.createNewVendor({ ...values});
    }
    wasfetching =false;

    render(){
      if(!this.props.checkVendorData.fetching && this.hasUpdated)  return <Redirect to="/"/>
      return <ReduxForms onSubmit={this.handleRedux} currentVendor={this.props.checkVendorData.vendorData} />
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
    { createNewVendor, updateVendor }
  )(ReduxContainer);
  

// export default connect(
//     mapStateToProps,
//     { createNewVendor, updateVendor }
//   )(ReduxForms);

/* export default reduxForm({
    form: "VendorForm",
    validate
})(
  connect(  
    mapStateToProps,
    { createNewVendor, updateVendor }
   )(CreateVendor)
  );
 */
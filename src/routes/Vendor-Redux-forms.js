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

import { Field, reduxForm } from "redux-form";
import {Redirect} from "react-router-dom";
import FormControlLabel from '@material-ui/core/FormLabel';

function validate (values) {
    const errors = {};
    const requiredFields = [
      "name",
      "description"
      
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
            electricity: false,
            ventilation: false,
            loud: false,
            other_special: '',
            website: '',
            facebook: '',
            twitter: '',
            instagram: ''
        };
        else this.isUpdating = true;
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
      if (this.state.item !== ''){
        let item = this.state.item;
        let itemList = [...this.state.items, item];
        this.setState({
          ...this.state,
          items: itemList,
          item: ''
        })
      }
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
    }
    save = e => {
    e.preventDefault();
    (this.updating) ? this.props.updateVendor(this.state) : this.props.createNewVendor(this.state)
    }
  
    
    render() 
    {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div>
                <Header>
                    <ArrowImage src={Arrow} />
                    <CreateHeader>{(this.isUpdating) ? "Edit Vendor" : "Create Vendor" }</CreateHeader>
                </Header>
                <Container maxWidth="sm">
                <form onSubmit={handleSubmit}>
                
                    <Field
                        component={renderTextField}
                        reuired
                        id="name"
                        label="Business Name"
                        name="name"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"></InputAdornment>}}
                       
                    />
                    <Field
                        component={renderTextField}
                        required
                        id="description"
                        label="Business Description"
                        name="description"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"></InputAdornment>}}
                        style={{marginTop: "20px"}}
                        rows="3"
                        multiline
                    />
                    <StyledContainer>
                    
                    <StyledP>What are the specific items you plan to sell?</StyledP>
                    <FlexContainer>
                    <img src={Add} onClick={this.addItem} />
                    <Field
                        id="item"
                        label="Add Item"
                        name="item"
                        margin="normal"
                        component={renderTextField}
                  
                    />
                    </FlexContainer>
                    {(this.state.items.length > 0) ? <p>Vendor Items</p>: null}
                    {this.state.items.map((item, index) => 
                    <FlexContainer  key={index}>
                       <StyledButton onClick={(e) => this.deleteItem(e,index)}>X</StyledButton>
                       <StyledP1>{item}</StyledP1> 
                       
                    </FlexContainer>
                    )}
                    
                     <StyledP>

                         Special Considerations
                     </StyledP>
                    <FlexColumn>
                    <FlexContainer>
                      <Field
                        component={renderTextField}
                        name="electricity"
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    /> <StyledP>Need Electricity</StyledP>
                    </FlexContainer>
                    <FlexContainer>
                    <Field
                        name="ventilation"
                        component={renderTextField}
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    /><StyledP>Need Ventilation</StyledP>
                    </FlexContainer>
                    <FlexContainer>
                    <Field
                        name="loud"
                        component={renderTextField}
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    /><StyledP>Have loud machinery</StyledP>
                    </FlexContainer>
                    <FlexContainer>
                    <Field //other_special is a list of items.
                        value="other_special"
                        component={renderTextField}
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    /><Field
                        id="other_special" 
                        label="Other"
                        name="other_special"
                        component={renderTextField}
                        style={{marginTop: "-18px", fontFamily:"Raleway"}}
                     />
                    </FlexContainer>
                    </FlexColumn>
                    </StyledContainer>
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
                     <GreenButton variant="outlined" disabled={pristine || submitting} onClick={(e) => this.save(e)}>Save</GreenButton>
                     </form>
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
`;

const StyledP = styled.p`
  font-family: Raleway;
  font-size: 16px;
  line-height: 1.5;
`;

const StyledP1 = styled.p`
font-family: Raleway;
font-size: 16px;
line-height: 1.2;
`;



const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexContainer = styled.div`
  display: flex;
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


// const mapStateToProps = state => {
//     return {
//       ...state
//     };
//   };
  

// const ReduxForms = reduxForm({
//     form: "VendorForm", // a unique identifier for this form
//     validate
//   })(connect(mapStateToProps)(CreateVendor));

  

// export default connect(
//     mapStateToProps,
//     { createNewVendor, updateVendor }
//   )(ReduxForms);

export default reduxForm({
    form: "VendorForm",
    validate
})(CreateVendor);

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
import { createNewVendor, updateVendor } from "../redux/actions/vendorData";



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
  
    
    render() {
        return (
            <div>
                <Header>
                    <ArrowImage src={Arrow} />
                    <CreateHeader>{(this.isUpdating) ? "Edit Vendor" : "Create Vendor" }</CreateHeader>
                </Header>
                <Container maxWidth="sm">
                <form>
                    <TextField
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
                    <StyledContainer>
                    
                    <StyledP>What are the specific items you plan to sell?</StyledP>
                    <FlexContainer>
                    <img src={Add} onClick={this.addItem} />
                    <TextField
                        id="item"
                        label="Add Item"
                        name="item"
                        value={this.state.item}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth={true}
                        style={{marginTop: "-20px"}}
                  
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
                      <Checkbox
                        name="electricity"
                        checked={this.state.electricity}
                        onChange={this.checkChange("electricity")}
                        value={this.state.electricity}
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    /> <StyledP>Need Electricity</StyledP>
                    </FlexContainer>
                    <FlexContainer>
                    <Checkbox
                        name="ventilation"
                        checked={this.state.ventilation}
                        onChange={this.checkChange("ventilation")}
                        value={this.state.ventilation}
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    /><StyledP>Need Ventilation</StyledP>
                    </FlexContainer>
                    <FlexContainer>
                    <Checkbox
                        name="loud"
                        checked={this.state.loud}
                        onChange={this.checkChange("loud")}
                        value={this.state.loud}
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    /><StyledP>Have loud machinery</StyledP>
                    </FlexContainer>
                    <FlexContainer>
                    <Checkbox
                        checked={this.state.other_special}
                        onChange={this.checkChange}
                        value="other_special"
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    /><TextField
                        id="other_special" 
                        label="Other"
                        name="other_special"
                        value={this.state.other_special}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth={true}
                        style={{marginTop: "-18px", fontFamily:"Raleway"}}
                     />
                    </FlexContainer>
                    </FlexColumn>
                    </StyledContainer>
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
  background-color: "white";
  font-size: 18px;
  margin-right: 15px;
  font-family: Raleway;
`


const mapStateToProps = state => {
    return {
      ...state
    };
  };
  
  export default connect(
    mapStateToProps,
    { createNewVendor, updateVendor  }
  )(CreateVendor);
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  TextField,
  Container,
  Button,
  Box
} from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import Arrow from "../assets/ic-arrow-back.svg";

class MarketRules extends React.Component {
    state = {
        name: ''
    }

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
goBack = () => {
    return this.props.history.goBack();
  }
  

render() {
    let market = {
        name: "Farmers Market",
        rules: "akdjhf;likajdfl;ajdsf a;sd failo;dfnzkjsdhfb; asdhf;kash df;ahsdf;ljabsd;fjhabsd; fhas;dfh;a djshf ;djsahf;djsahf; ash;f jashdf;ahsd f;jahsdkjfasldkjfgbh alskdjgfhlaksdghblaksdjf ;asdhfba;ldsjkhfb;al djskhfl;kajsbflkjasdfglkjasdhf ;asdhkf;aldjskhba; sdjkfblakjsdgfbvljZSDHbvc ,jhzdsvb,jhzdcvblzdjhsgflisuzjhfga,.skdjfba.sdfjhbna;djsfh;a djsf;adjskfhba; sdfjasdfh a;sdjfk ha;dfj h;audujhsa; dsfh;adjskfh asi;odkfh as;djkfh ajksdhfkjasd f;as f;k fdsadashjkfvbhnjadvfnmasdvbfcljxfycvkgvj,HWDV,JHASGB;K SAGDFSHA;Dakdjhf;likajdfl;ajdsf a;sd failo;dfnzkjsdhfb; asdhf;kash df;ahsdf;ljabsd;fjhabsd; fhas;dfh;a djshf ;djsahf;djsahf; ash;f jashdf;ahsd f;jahsdkjfasldkjfgbh alskdjgfhlaksdghblaksdjf ;asdhfba;ldsjkhfb;al djskhfl;kajsbflkjasdfglkjasdhf ;asdhkf;aldjskhba; sdjkfblakjsdgfbvljZSDHbvc ,jhzdsvb,jhzdcvblzdjhsgflisuzjhfga,.skdjfba.sdfjhbna;djsfh;a djsf;adjskfhba; sdfjasdfh a;sdjfk ha;dfj h;audujhsa; dsfh;adjskfh asi;odkfh as;djkfh ajksdhfkjasd f;as f;k fdsadashjkfvbhnjadvfnmasdvbfcljxfycvkgvj,HWDV,JHASGB;K SAGDFSHA;D" ,


    }
    return (
        <>
        <Header>
            <StyledImg src={Arrow} onClick={this.goBack} />
            <CreateHeader>Market Rules</CreateHeader>
          </Header>
        <StyledContainer>
            
            <Tag>{market.name}</Tag>
            <StyledBox>
                {market.rules}
            </StyledBox>
            <StyledTextField
            required
            id="name"
            label="Sign Your Name"
            name="name"
           
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth={true}
            />
            </StyledContainer>
            <StyledButton onClick={this.handleClick}>Accept</StyledButton>
        
        </>
    )
 }
}
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

const StyledTextField = styled(TextField)`
    margin: 25px auto;
`;
const Tag = styled.p`
    font-family: Raleway;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.33;
    padding-left: 16px;
`;

const StyledBox = styled(Box)`
    margin-left: 16px;
    margin-right: 16px;
    height: 324px;
    border-radius: 10px;
    overflow: scroll;
    scrollbar-color: green yellow;
    border: 1px solid #979797;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-family: Roboto;
    font-size: 16px;
    scrollbar-thumb {
    background: green;
}

    @media(min-width: 600px){
    max-width: 400px;
    margin-top: 12px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledContainer = styled(Container)`
    text-align: left;
    @media(min-width: 600px){
    max-width: 600px;
    margin-top: 12px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const StyledButton = styled(Button)`
    width: 300px;
    border-radius: 8px;
    height: 60px;
    background-color: #478529;
    color: white;
    font-size: 18px;
    font-family: Raleway;
    text-align: center;
    font-weight: bold;
`;

const mapStateToProps = state => {
    return {
      ...state
    };
  };
  
  export default connect(
    mapStateToProps,
    { }
  )(withRouter(MarketRules));
  
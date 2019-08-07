import React from "react";
import { connect } from "react-redux";
import Arrow from "../assets/ic-arrow-back.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Mixpanel } from '../redux/actions/mixpanel';

const VendorProfile = (props) => {
        let vendor = props.vendorData;
        return (
            <div>
                <Header>
                <Link to="/">
                  <img src={Arrow} style={{marginLeft: "25px",
                  marginTop: "18px"}}/>
                </Link>
                <CreateHeader>View Profile</CreateHeader>
                </Header>
                <Container>
                <MarketName>{vendor.name}</MarketName>
                {vendor.description}
                {((vendor.items.length > 0) ? <p>Vendor Items</p> : null)}
                {vendor.items.map(item => {
                    return <Tag>{item}</Tag>
                })}
                <Flex>
                <p>Electricity: </p> {(vendor.electricity)? <p>Yes </p>: <p>No</p>}
                </Flex>
                <Flex>
                <p>Make Loud Noise: </p> {(vendor.loud)?<p>Yes </p>: <p>No</p>}
                </Flex>
                <Flex>
                <p>Need Ventilation: </p> {(vendor.ventilation)? <p>Yes </p>: <p>No</p>}
                </Flex>
                <Flex>
                <p>Other Needs: </p> {(vendor.electricity)? <p>Yes </p>: <p>No</p>}
                </Flex>
                <Flex>
                <Link to="/createvendor" style={{ textDecoration: "none"}} onClick={() => Mixpanel.track('User clicked to edit vendor')}>
                    <WhiteButton variant="outlined">Edit Profile</WhiteButton>
                </Link>
                <Link to="/searchmarkets" style={{ textDecoration: "none"}} onClick={() => Mixpanel.track('User clicked to search markets')}>
                    <GreenButton variant="outlined">Search Markets</GreenButton>
                </Link>
                </Flex> 
                </Container>
            </div>
        )

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

const Container = styled.div`
  text-align: left;
  margin-left: 3%;
  @media(min-width: 600px){
    max-width: 600px;
    margin: 0 auto;
  }
`
const MarketName = styled.p`
  font-size: 18px;
  @media(min-width: 600px){
    font-size: 26px;
  }
`
const MarketDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

const Tag = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-family: Raleway;
  font-weight: 600;
  margin-bottom: -10px;
  @media(min-width: 600px){
    font-size: 16px;
  }
`;

const Flex = styled.div`
  display: flex;
`
const WhiteButton = styled(Button)`
  width: 40vw;
  height: 60px;
  font-size: 16px;
  border-radius: 10px;
  @media(min-width: 600px){
    width: 300px;
    
  }
`
const GreenButton = styled(Button)`
  width: 40vw;
  margin-left: 8vw;
  height: 60px;
  background-color:#478529;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  @media(min-width: 600px){
    width: 300px;
    margin-left: 6vw;
  }
`

const Ltag = styled.p`
  font-size: 16px;
  font-family: Raleway;
  @media(min-width: 600px){
    font-size: 20px;
  }
`;


const mapStateToProps = state => {
    return {
      ...state.checkVendorData
    };
  };
  
  export default connect(
    mapStateToProps,
    { }
  )(VendorProfile);
  
   // let vendor = {
    //     name: "Todds Fruits",
    //     description: "Fresh fruit",
    //     items: [ "apples", "oranges", "peaches"],
    //     electricty: false,
    //     ventilation: false,
    //     loud: false,
    //     other_special: "peace and quite",
    //     website: "www.website.com",
    //     facebook: "www.facebook.com",
    //     instagram: "www.instagram.com"
    // }
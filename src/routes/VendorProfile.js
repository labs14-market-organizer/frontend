import React from "react";
import { connect } from "react-redux";
import Arrow from "../assets/ic-arrow-back.svg";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Mixpanel } from '../redux/actions/mixpanel';

class VendorProfile extends React.Component {
  
       
        goBack = () => {
          return this.props.history.goBack();
        }
 
        render() {
        
        let vendor = this.props.vendorData;
        return (
            <div>
                <Header>
                  <StyledImg src={Arrow} onClick={this.goBack} />
                  <CreateHeader>View Vendor Profile</CreateHeader>
                </Header>
        
                <Container>
                <VendorName>{vendor.name}</VendorName>
                <StyledVendor>{vendor.description}</StyledVendor>
                {((vendor.items.length > 0) ? <StyledP>Items</StyledP> : null)}
                {vendor.items.map(item => {
                    return <StyledVendor>{item}</StyledVendor>
                })}
                
                {(vendor.electricity || vendor.loud || vendor.ventilation || vendor.other_special.length > 0) ?<StyledP>Special Considerations</StyledP> : null}
                {(vendor.electricity) ? <StyledVendor>Needs electricity</StyledVendor> : null}
                {(vendor.loud) ? <StyledVendor>Makes loud noise</StyledVendor> : null}
                {(vendor.ventilation) ? <StyledVendor>Needs ventilation</StyledVendor> : null}
                {(vendor.other_special) ? <StyledVendor>{vendor.other_special}</StyledVendor> : null}

                {(vendor.website && vendor.website.length > 0) ? <div><StyledP>Website</StyledP><StyledVendor>{vendor.website}</StyledVendor></div> : null}

                {(vendor.facebook && vendor.facebook.length > 0) ? <div><StyledP>Facebook</StyledP><StyledVendor>{vendor.facebook}</StyledVendor></div> : null}

                {(vendor.instagram && vendor.instagram.length > 0) ? <div><StyledP>Instagram</StyledP><StyledVendor>{vendor.instagram}</StyledVendor></div> : null}

                {(vendor.twitter && vendor.twitter.length > 0) ? <div><StyledP>Twitter</StyledP><StyledVendor>{vendor.twitter}</StyledVendor></div> : null}
               </Container> 
               <Link to="/createvendor" style={{textDecoration: "none"}}>
                <StyledButton>Edit Profile</StyledButton>
               </Link>
            </div>
        )
  }
}

const StyledButton = styled(Button)`
  background-color: #478529;
  color: white;
  width: 300px;
  height: 60px;
  border-radius: 8px;
  border: solide 2px rgba(0, 0, 0, 0.1);
  margin-top: 24px;

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


const Container = styled.div`
  text-align: left;
  margin-left: 4%;
  margin-right: 4%;
  @media(min-width: 600px){
    max-width: 570px;
    margin: 0 auto;
  }
`
const VendorName = styled.p`
  font-size: 18px;
  font-family: Raleway;
  font-weight: bold;
  @media(min-width: 600px){
    font-size: 26px;
  }
`
const StyledVendor = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-family: Roboto;
  margin-top: 0;
  margin-bottom: 0;

`;

// const Tag = styled.p`
//   font-size: 12px;
//   line-height: 16px;
//   font-family: Raleway;
//   font-weight: 600;
//   margin-bottom: -10px;
//   @media(min-width: 600px){
//     font-size: 16px;
//   }
// `;

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

const StyledP = styled.p`
  font-size: 12px;
  font-family: Raleway;
  line-height: 1.33;
  font-weight: bold;
  margin-bottom: 5px;
 
`

const mapStateToProps = state => {
    return {
      ...state.checkVendorData
    };
  };
  
  export default connect(
    mapStateToProps,
    { }
  )(withRouter(VendorProfile));
  
 

      //         let vendor = {
    //     name: "Todds Fruits",
    //     description: "Fresh fruit grown from local farms. Fresh fruit grown from local farms. Fresh fruit grown from local farms. Fresh fruit grown from local farms.",
    //     items: [ "Apples", "Oranges", "Peaches"],
    //     electricity: true,
    //     ventilation: true,
    //     loud: true,
    //     other_special: "peace and quite",
    //     website: "www.website.com",
    //     facebook: "www.facebook.com",
    //     instagram: "www.instagram.com",
    //     twitter: "www.twitter"
    // }
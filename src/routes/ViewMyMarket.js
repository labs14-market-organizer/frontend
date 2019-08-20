import React from "react";
import { connect } from "react-redux";
import Arrow from "../assets/ic-arrow-back.svg";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link, Redirect, withRouter } from "react-router-dom";
import { Mixpanel } from '../redux/actions/mixpanel';
import Collapser from './Collapser';
import BoothPicker from "../components/BoothPicker"


const militaryConvert = (time) => {
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

class ViewMyMarket extends React.Component{


goBack = () => {
  return this.props.history.goBack();
}

  render() {
  let market = this.props.marketData;
  if(!market) return <Redirect to={this.props.back ? this.props.back : "/"} />;
  let editing = this.props.userData.id === this.props.marketData.admin_id;  //means market owner.
  return (
      <div>
          <Header>
            {this.props.backcb ?
              <div onClick={this.props.backcb}>
                <img src={Arrow} style={{marginLeft: "25px",
                marginTop: "18px"}}/>
              </div>
            :
              <Link to={this.props.back ? this.props.back : "/"}>
                <img src={Arrow} style={{marginLeft: "25px",
                marginTop: "18px"}}/>
              </Link>}
        
            <CreateHeader>{this.props.name ? this.props.name : "View Market"}</CreateHeader>
          </Header>
        
      
        <Container>
           { editing ? this.editingRender() : null }
            <MarketName className="MarketName">{market.name}</MarketName> {/*added tag for test*/}
            <MarketDescription>{market.description}</MarketDescription>
        </Container>
            { !editing ? <Collapser market={market} /> :
            <Container>
            <Tag>Hours</Tag>
            { market.operation.map(opHours => {
                return (opHours.start !== null) ? <Ltag key={market.id}>{opHours.day.charAt(0).toUpperCase() + opHours.day.slice(1)} {militaryConvert(opHours.start)} - {(militaryConvert(opHours.end))}</Ltag> : null
              }) }
            <Tag>Market Status</Tag>
            {(market.type === 1)? <Ltag>Public Market</Ltag> :<Ltag>Private Market</Ltag>  }
            <hr style={{marginRight: "10px"}}></hr>
            <Tag style={{marginBottom: "15px", fontWeight: "bold"}}>Contact Information</Tag>
            <Tag>Market Email Address</Tag>
            <Ltag>{market.email}</Ltag>
            <Tag>Market Phone Number</Tag>
            <Ltag>{market.phone}</Ltag>
            <Tag>Address</Tag>
            <Ltag>{market.address}</Ltag>
            <hr style={{marginRight: "10px"}}></hr>
            <Tag style={{marginBottom: "15px", fontWeight: "bold"}}>Social Media</Tag>
            { (market.website && market.website.length > 0) ?<div> <Tag>Website</Tag> <Ltag>{market.website}</Ltag> </div> : null } 
            { (market.facebook && market.facebook.length > 0) ? <div><Tag>Facebook</Tag> <Ltag>{market.facebook}</Ltag></div>: null }
            { (market.twitter && market.twitter.length > 0) ? <div><Tag>Twitter</Tag> <Ltag>{market.twitter}</Ltag></div>: null }
            { (market.instagram && market.instagram.length > 0) ? <div><Tag>Instagram</Tag> <Ltag>{market.instagram}</Ltag></div>: null }
            <hr style={{marginRight: "10px"}}></hr>
            <Tag style={{marginBottom: "15px", fontWeight: "bold"}}>Market Rules</Tag>
            <Ltag>{market.rules}</Ltag>
            </Container>}
            {editing ? "" : this.boothRender(market) } 
        </div>
    )
    }
    boothRender(market)
    {
      if(!market) return <div/>
      return(
          <div><BoothPicker market={market} /></div>
        )
        
    }
    editingRender()
    {
      return (
        <>
        <Flex style={{marginTop: "20px", marginBottom: "24px"}}>
        <Link to="/createmarket" style={{ textDecoration: "none"}}  onClick={() => Mixpanel.track('User clicked to edit market')}>
          <GreenButton variant="outlined">Edit Market</GreenButton>
        </Link>
        <Link to="/addbooths" style={{ textDecoration: "none"}} onClick={() => Mixpanel.track('User clicked to edit booths')}>
          <WhiteButton variant="outlined">Edit Booths</WhiteButton>
        </Link>
        
      </Flex> <hr style={{marginRight: "10px"}}></hr></>
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
  margin-left 25px;
  font-family: Raleway;
  font-size: 18px;
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
  font-family: Raleway;
  @media(min-width: 600px){
    font-size: 26px;
  }
`
const MarketDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-family: Roboto;
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
  width: 43vw;
  height: 60px;
  margin-left: 8vw;
  font-size: 16px;
  border-radius: 10px;
  color: #044d4c;
  border: 1px solid #044d4c;

  @media(min-width: 600px){
    width: 200px;
    margin: 0 20px;
  }
`
const GreenButton = styled(Button)`
  width: 40vw;
  height: 60px;
  background-color:#478529;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  @media(min-width: 600px){
    width: 200px;
  }
`

const Ltag = styled.p`
  font-size: 16px;
  font-family: Roboto;
  line-height: 1.5;
  @media(min-width: 600px){
    font-size: 20px;
  }
`;

const mapStateToProps = state => {
    return {
      ...state.checkMarketData,
      ...state.checkUserData
    };
  };
  
  export default connect(
    mapStateToProps,
    { }
  )(withRouter(ViewMyMarket));
  
//   {
//     "id": 77,
//     "admin_id": 501,
//     "name": "Joplin Fresh Farmers Market",
//     "description": "Joplins fresh market with local farmers",
//     "address": "Joplin St.",
//     "city": "Joplin",
//     "state": "MO",
//     "zipcode": "63152",
//     "type": 1,
//     "website": "www.joplinfarmersmarket.com",
//     "facebook": "",
//     "twitter": "",
//     "instagram": "",
//     "created_at": "2019-08-01T19:16:50.204Z",
//     "updated_at": "2019-08-01T19:16:50.204Z",
//     "operation": [],
//     "booths": []
// },
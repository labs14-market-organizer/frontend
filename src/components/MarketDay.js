import React from "react";
import NavbarVendor from "../components/NavbarVendor";
import { connect } from "react-redux";
import styled from "styled-components";
import VendorsRentedByDay from "../components/VendorsRentedByDay";
import icon from "../assets/keyboardarrowright.svg"
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import formatedDate from "./formatedDate";

class MarketDay extends React.Component {
    constructor(props) {
         super(props);
         this.state = {
            day: props.day
         }
    }
    
  
render() {
    let date = this.props.day.reserve_date.split("T")[0];
    let available = this.props.day.available;
    let rented = this.props.day.reserved;
    let day = this.props.day;
    var marketOwner = this.props.user.userType === "Market Owner";
    let dayOfWeek;
    if (this.props.user.userData){
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
        let splitDate = date.split("-");
        if (splitDate[1].split('')[0] === "0"){
            splitDate[1] = splitDate[1].split('')[1];
        }
        let removedO = splitDate[0] + "/" + splitDate[1] + "/" + splitDate[2];
        dayOfWeek = days [ new Date(removedO).getDay() ];
    }
        {return (marketOwner) ? (
            <Link to={`/boothrenters/${date}`} style={{textDecoration: "none", color: "black"}}>
                <StyleBox style={{position: "relative", margin: "0 auto"}} boxShadow={10}>
                    <div>
                <StyledP>{dayOfWeek.slice(0,3)}. {formatedDate(date)}</StyledP>
                    <Flex>
                        <StyledP1>Available Booths: {available} </StyledP1> 
                        <StyledP2>View Vendors...</StyledP2>
                    </Flex>
                    </div>
                    <img src={icon} style={{width: "24px", height: "24px", transform: "rotate(0deg)", position: "absolute", bottom: "40px", right: "5px"}}/>
                </StyleBox> 
            </Link> )
            : ( 
             <Link to={`/boothrented/${this.props.day.market_id}/${this.props.day.booth_id}/${date}/${this.props.day.id}`} style={{textDecoration: "none", color: "black"}}>
                <StyleBox style={{position: "relative", margin: "0 auto", backgroundColor: "#f6e7cc", marginBottom: "20px"}} boxShadow={10}>
                    <div>
                        <StyledP style={{fontWeight: "normal"}}>{dayOfWeek.slice(0,3)}. {formatedDate(date)}</StyledP>
                        <img src={icon} style={{width: "24px", height: "24px", transform: "rotate(0deg)", position: "absolute", bottom: "40px", right: "5px"}}/>
                        <StyledP1 style={{color: "#044d4c"}}>{this.props.day.market_name}</StyledP1>
                    </div>
                </StyleBox> 
            </Link>  
            ) 
    } 
}

}

const StyledP = styled.p`
    font-weight: 600;
    font-size: 18px;
    padding: 15px 20px 0 20px;
    font-family: Raleway;
`;

const StyledP1 = styled.p`
    padding: 15px 0 0 20px;
    marginBottom: 10px;
    font-family: Raleway;
    color: 044d4c;
    font-size: 16px;
    font-weight: 600;
`;

const StyledP2 = styled.p`
    font-family: Raleway;
    font-size: 12px;
    font-weight: 600;
    position: absolute;
    bottom: 0;
    right: 15px;
`;

const Flex = styled.div`
    display: flex;
`;
const StyleBox = styled(Box)`
        min-height: 100px;
        width: 360px; 
        text-align: left; 
        background-color: #edf3ea;
        margin-top: 32px;
        padding: 16;
        @media(min-width: 600px){
        margin: 0 auto;
        width: 500px;
        margin-top: 30px;
  }
`;

const mapStateToProps = state => {
    return {
         user: {...state.checkUserData},
        market: {...state.checkMarketData}
    }
}
    
export default connect( mapStateToProps,
        {})(MarketDay);
    
    
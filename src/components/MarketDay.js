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
    return (
            <Link to={`/boothrenters/${date}`} style={{textDecoration: "none", color: "black"}}>
                <StyleBox style={{position: "relative", margin: "0 auto"}} boxShadow={10}>
                    <div>
                    <p style={{fontWeight: "600", fontSize: "18px", padding: "15px 20px 0 20px", fontFamily: "Raleway"}}>{this.formatedDate(date)}</p>
                    <Flex>
                    <p style={{padding: "15px 0px 0px 20px", marginBottom: "10px", fontFamily: "Raleway", color: "#044d4c", fontSize: "16px", fontWeight: "600"}}>Available Booths: {available} </p> <p style={{fontFamily: "Raleway", fontSize: "12px", fontWeight: "600", position: "absolute", bottom: "0px", right: "15px"}}>View Vendors...</p></Flex>
                    </div>
                    <img src={icon} style={{width: "24px", height: "24px", transform: "rotate(0deg)", position: "absolute", bottom: "40px", right: "5px"}}/>
                </StyleBox> 
            </Link>
    )
}

}
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
    
    
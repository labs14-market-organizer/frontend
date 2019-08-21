import React from "react";
import NavbarVendor from "../components/NavbarVendor";
import { connect } from "react-redux";
import styled from "styled-components";
import VendorsRentedByDay from "../components/VendorsRentedByDay";
import icon from "../assets/keyboardarrowright.svg"
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";


class MarketDay extends React.Component {
    constructor(props) {
         super(props);
         this.state = {

         }
    }

    handleClick = () => {
        return <VendorsRentedByDay day={this.props.day} />
    }


render() {

    let date = this.props.day.reserve_date.split("T")[0];
    let available = this.props.day.available;
    return (
        <Link to={`boothrenters/${date}`} style={{textDecoration: "none", color: "black"}}>
            <StyleBox style={{position: "relative", margin: "0 auto"}} boxShadow={10}  onClick={() => this.handleClick()}>
            <div>
            <p style={{fontWeight: "600", fontSize: "18px", padding: "20px 20px 0 20px"}}>{date}</p>
            <p style={{padding: "0 37px 20px 40px"}}>Available Booths: {available} </p>
            </div>
            <img src={icon} style={{width: "24px", height: "24px", transform: "rotate(0deg)", position: "absolute", bottom: "30px", right: "5px"}}/>
            </StyleBox>
        </Link>
    )
}

}
const StyleBox = styled(Box)`
        min-height: 108px;
        width: 85vw; 
        margin-left: 1%;  
        text-align: left; 
        border-radius: 10px;
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
    
    
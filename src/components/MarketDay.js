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
            day: props.day
         }
    }
    formatedDate = (date) => {
        let splitDate = date.split("");
        let year = splitDate.slice(0,4);
        let day = splitDate.slice(8,10);
        let monthJoined = splitDate.slice(5,7).join('');
        let month = () => {
        if (monthJoined === "01") {
            return "January"
        } else if (monthJoined === "02"){
            return "February"
        }else if (monthJoined === "03"){
            return "March"
        }else if (monthJoined === "04"){
            return "April"
        }else if (monthJoined === "05"){
            return "May"
        }else if (monthJoined === "06"){
            return "June"
        }else if (monthJoined === "07"){
            return "July"
        }else if (monthJoined === "08"){
            return "August"
        }else if (monthJoined === "09"){
            return "September"
        }else if (monthJoined === "10"){
            return "October"
        }else if (monthJoined === "11"){
            return "November"
        }else if (monthJoined === "12"){
            return "December"
        }
    }
        let newDate = month() + " " + day.join('') + ", " + year.join('');
        
        return newDate;
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
    
    
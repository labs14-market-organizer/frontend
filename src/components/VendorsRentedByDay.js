import React from "react";
import NavbarVendor from "../components/NavbarVendor";
import { connect } from "react-redux";
import styled from "styled-components";
import Arrow from "../assets/ic-arrow-back.svg";
import { getVendorsWhoRentedByMarket } from "../redux/actions/marketsReservations";
import { dateTimePickerDefaultProps } from "@material-ui/pickers/constants/prop-types";
import LoadingScreen from "./LoadingScreen";

class VendorsRentedByDay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: false
        }
    }

    componentDidMount() {
        const marketId = this.props.user.userData.markets[0].id;
        const date =  this.props.match.params.date;
        this.props.getVendorsWhoRentedByMarket(marketId, date);
    }

    goBack = () => {
        return this.props.history.goBack();
      }

    changePage = () => {
        this.setState({
            page: true
        })
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
        { setTimeout(() => { this.changePage() } ,400) }
        return (
        <> 
            {(this.state.page) ? 
            <>
            <Header>
                <StyledImg src={Arrow} onClick={this.goBack}/>
                <CreateHeader>View Vendors</CreateHeader>
            </Header>
            <StyledDiv>
                <StyledP>{this.formatedDate(this.props.match.params.date)}</StyledP>
                <StyledP style={{fontWeight: "bold"}}>Vendors</StyledP>
                {this.props.market.vendorsWhoRentedByDate.map(vendor => {
                    return <StyledPFlex><p style={{width: "200px"}}>{vendor.name}</p> {(vendor.paid === 0) ? <p style={{color: "red"}}>Not Paid</p> : <p>Paid: ${vendor.paid} </p>}</StyledPFlex>
                })}
            </StyledDiv>
            </> : <><LoadingScreen /> </> } 
        </> 
        ) 
    }
    
}

const StyledDiv = styled.div`
     @media(min-width: 600px){
        margin: 0 auto;
        width: 500px;
        margin-top: 30px;
  }
`

const FadeIn = styled.div`
    opacity: 1;
    transition: 4s opacity;
    background-color: white;
    min-height: 100vh;
    min-width: 100vw;
`;

const Flex = styled.p`
    display: flex;
    text-align: left;
    margin-top: 0;
    margin-top: -10px;
    margin-left: 2%;
`;

const StyledP = styled.p`
    text-align: left;
    margin-left: 4%;
    margin-bottom: 20px;
    width: 99%;
`;
const StyledPFlex = styled.p`
    text-align: left;
    margin-left: 4%;
    margin-top: 0;
    margin-bottom: -15px;
    width: 99%;
    display: flex;
`;

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


const mapStateToProps = state => {
    return {
         user: {...state.checkUserData},
        market: {...state.checkMarketData},
        reserve: {...state.checkBoothReserve},
        vendor: {...state.checkVendorData}
    }
}

export default connect( mapStateToProps,
        { getVendorsWhoRentedByMarket })(VendorsRentedByDay);
    
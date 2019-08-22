import React from "react";
import NavbarVendor from "../components/NavbarVendor";
import { connect } from "react-redux";
import styled from "styled-components";
import Arrow from "../assets/ic-arrow-back.svg";
import { getVendorsWhoRentedByMarket } from "../redux/actions/marketsReservations";
import { dateTimePickerDefaultProps } from "@material-ui/pickers/constants/prop-types";


class VendorsRentedByDay extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const marketId = this.props.user.userData.markets[0].id;
        const date =  this.props.match.params.date;
        this.props.getVendorsWhoRentedByMarket(marketId, date);
    }

    goBack = () => {
        return this.props.history.goBack();
      }

    render() {
    //    let market = this.props.market;
        console.log(this.props.market)
        return (
            <>
            <Header>
                  <StyledImg src={Arrow} onClick={this.goBack}/>
                  <CreateHeader>View Vendors</CreateHeader>
            </Header>
            <StyledP>Date: {this.props.match.params.date}</StyledP>
            <StyledP>Vendors</StyledP>
           {this.props.market.vendorsWhoRentedByDate.map(vendor => {
            return <Flex><span style={{width: "200px"}}>{vendor.name}</span> Paid: {vendor.paid}</Flex>
           })}
            </>
        )
    }
    
}
const Flex = styled.p`
    display: flex;
    text-align: left;
    margin-top: 0;
    margin-top: -10px;
`;

const StyledP = styled.p`
    text-align: left;
    margin-left: 2%;
    
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
    
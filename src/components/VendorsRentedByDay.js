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

    
    render() {
        return (
        <FadeIn>
            <Header>
                <StyledImg src={Arrow} onClick={this.goBack}/>
                <CreateHeader>View Vendors</CreateHeader>
            </Header>
            <StyledP>Date: {this.props.match.params.date}</StyledP>
            <StyledP>Vendors</StyledP>
            {this.props.market.vendorsWhoRentedByDate.map(vendor => {
                return <Flex><span style={{width: "200px"}}>{vendor.name}</span> {(vendor.paid === 0) ? <span style={{color: "red"}}>Not Paid</span> : <span>Paid: ${vendor.paid} </span>}</Flex>
            })}
        </FadeIn> 
        ) 
    }
    
}

const FadeIn = styled.div`
    opacity: 1;
    transition: 1s opacity;
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
    
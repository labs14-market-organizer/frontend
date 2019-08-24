import React from "react";
import { connect } from "react-redux";
import Arrow from "../assets/ic-arrow-back.svg";
import { Link, withRouter, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import add from "../assets/add.svg";


class RentBooth extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    goBack = () => {
          return this.props.history.goBack();
        }

    render() {
        return (
            <div>
                    <Header>
                    <StyledImg src={Arrow} onClick={this.goBack} />
                    <CreateHeader>Rent Booth</CreateHeader>
                    </Header>
                <StyledDiv style={{textAlign: "left"}}>
                    <MarketName>{market.name}</MarketName>
                    <Market>Address</Market>
                    <MarketsInfo>{market.address}</MarketsInfo>
                    <Flex>
                        <Market style={{width: "200px"}}>Date</Market>
                        <Market>Time</Market>
                    </Flex>
                    <Flex>
                        <MarketsInfo style={{width: "200px"}}>{market.date}</MarketsInfo>
                        <MarketsInfo>{market.time}</MarketsInfo>
                    </Flex>
                    <hr style={{width: "96%", marginTop: "-6px", marginRight: "16px"}}></hr>
                    <p style={{fontFamily: "Raleway", fontSize: "16xp", fontWeight: "bold"}}>Payment Method</p>
                    <Flex style={{marginTop: "-20px"}}>
                        <img src={add} />
                        <MarketsInfo style={{color: "#044d4c"}}>ADD PAYMENT INFO</MarketsInfo>
                    </Flex>
                    <hr style={{width: "96%", marginTop: "-6px", marginRight: "16px"}}></hr>
                    <p style={{fontFamily: "Raleway", fontSize: "16xp", fontWeight: "bold"}}>{booth.name}</p>
                    <Market>Booth Size</Market>
                    <MarketsInfo>{booth.size}</MarketsInfo>
                    <Market>Booth Price</Market>
                    <MarketsInfo>{booth.price}</MarketsInfo>
                    <Market>Booth Descriptioon</Market>
                    <MarketsInfo>{booth.description}</MarketsInfo>
                </StyledDiv>
                <StyledButton>CONFIRM BOOTH</StyledButton>
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
`;
const HeaderDiv = styled.div`
    fontFamily: Raleway;
    fontSize: 16px;
    fontWeight: bold;
`;

const StyledDiv = styled.div`
    margin-left: 16px;
    @media(min-width: 600px){
    max-width: 500px;
    margin: 0 auto;
  }
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

const Flex = styled.div`
  display: flex;
`;
const MarketName = styled.p`
  font-family: Raleway;
  font-szie: 18px;
  font-weight: bold;
  line-height: 1.33
`;

const Market = styled.p`
  font-family: Raleway;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.33;
  margin-bottom: -10px;
  padding-bottom: 0;
`;

const MarketsInfo = styled.p`
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.5;

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
        { })(withRouter(RentBooth));



const market = {
    name: "Lafayette Farmers Market",
    address: "131 Geno Dr., Lafayette, LA  70506",
    date: "Sun. July 21, 2019",
    time: "6:00AM - 2:00PM",
}

const booth = {
    name: "Standard Booth",
    size: "10ft. x 10ft",
    price: "$25",
    description: "These booths do not come with electricity or a water hookup."
}
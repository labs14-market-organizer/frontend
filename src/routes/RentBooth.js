import React from "react";
import { connect } from "react-redux";
import Arrow from "../assets/ic-arrow-back.svg";
import { Link, withRouter, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import add from "../assets/add.svg";
import { createReservation } from '../redux/actions/boothReserve';
import formatedDate from '../components/formatedDate';
import militaryConvert from "../components/militaryConvert"

class RentBooth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: false
        }
    }
    componentDidMount() {
        this.changePage();
    };

    goBack = () => {
          return this.props.history.goBack();
        };


    changePage = () => { //timeout function that will originally set opacity to 0 and switch when this.state.page === true
        setTimeout(() => {
            this.setState({
                page: true
            })
        }, 300)
        
    };


    createReservation = (e) => {
        e.preventDefault();
        let marketId = this.props.match.params.marketid;
        let boothId = this.props.match.params.boothid;
        let fullDate = this.props.match.params.date.split(' ');
        let year = fullDate.slice(3,4);
        let month = fullDate.slice(1,2);
        let formatMonth;
        if (month[0] === "Jan") {
            formatMonth = "01"
        } else if (month[0] === "Feb"){
            formatMonth = "02"
        }else if (month[0] === "Mar"){
            formatMonth = "03"
        }else if (month[0] === "Apr"){
            formatMonth = "04"
        }else if (month[0] === "May"){
            formatMonth = "05"
        }else if (month[0] === "Jun"){
            formatMonth = "06"
        }else if (month[0] === "Jul"){
            formatMonth = "07"
        }else if (month[0] === "Aug"){
            formatMonth = "08"
        }else if (month[0] === "Sep"){
            formatMonth = "09"
        }else if (month[0] === "Oct"){
            formatMonth = "10"
        }else if (month[0] === "Nov"){
            formatMonth = "11"
        }else if (month[0] === "Dec"){
            formatMonth = "12"
        }
        let day = this.props.match.params.date.split(' ').slice(2,3);
        let newDate = year + '-' + formatMonth + '-' + day;
        this.props.createReservation(marketId, boothId, newDate);
        setTimeout(() => {
            this.props.history.push("/rentalconfirmation");
        }, 50)
        
    }

    render() {
        let day = this.props.match.params.date.split(' ').slice(0,1).join(' ');
        let date1 = this.props.match.params.date.split(' ').slice(1,3).join(' ');
        let year = this.props.match.params.date.split(' ').slice(3,4);
        let boothId = this.props.match.params.boothid;
        let market = this.props.market.marketData;
        return (
            <div>
                    <Header>
                    <StyledImg src={Arrow} onClick={this.goBack} />
                    <CreateHeader>Rent Booth</CreateHeader>
                    </Header>
                <div style={{ opacity: (this.state.page) ? "1" : "0" , transition: "opacity 1s" }}>
                    <StyledDiv style={{textAlign: "left"}}>
                        <MarketName>{market.name}</MarketName>
                        <Market>Address</Market>
                        <MarketsInfo>{market.address} {market.city}, {market.state} {market.zipcode}</MarketsInfo>
                        <Flex>
                            <Market style={{width: "200px"}}>Date</Market>
                            <Market>Time</Market>
                        </Flex>
                        <Flex>
                            <MarketsInfo style={{width: "200px"}}>{day}. {date1}, {year}</MarketsInfo>
                            <MarketsInfo>
                            {market.operation.map(day1 => {
                                return (day1.day.split('').slice(0,3).join('') === day.toLowerCase()) ? 
                            <div>{militaryConvert(day1.start)} - {militaryConvert(day1.end)}</div> : <></>
                            })}
                            </MarketsInfo>
                        </Flex>
                        <hr style={{width: "96%", marginTop: "-6px", marginRight: "16px"}}></hr>
                        <StyledP>Payment Method</StyledP>
                        <Flex style={{marginTop: "-20px"}}>
                            <img src={add} />
                            <MarketsInfo style={{color: "#044d4c"}}>ADD PAYMENT INFO</MarketsInfo>
                        </Flex>
                        <hr style={{width: "96%", marginTop: "-6px", marginRight: "16px"}}></hr>
                        {market.booths.map(booth => {
                            return (booth.id === parseInt(boothId)) ?
                            <>
                            <StyledP>{booth.name}</StyledP>
                            <Market>Booth Size</Market>
                            <MarketsInfo>{booth.size[0]} ft. X {booth.size[1]} ft.</MarketsInfo>
                            <Market>Booth Price</Market>
                            <MarketsInfo>${booth.price}</MarketsInfo>
                            <Market>Booth Descriptioon</Market>
                            <MarketsInfo>{booth.description}</MarketsInfo>  </>:
                            <> </>

                        })}
                        
                    </StyledDiv>
                    <StyledButton onClick={this.createReservation}>CONFIRM BOOTH</StyledButton>
                </div>
             </div>
        )
    }
}


const StyledP = styled.p`
    font-family: Raleway;
    font-size: 16px;
    font-weight: bold;
`;

const StyledButton = styled(Button)`
     background-color: #478529;
     color: white;
     width: 300px;
     height: 60px;
     border-radius: 8px;
     margin-bottom: 20px;
     font-size: 18px;
     font-family: Raleway;
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
        { createReservation })(withRouter(RentBooth));



// const market = {
//     name: "Lafayette Farmers Market",
//     address: "131 Geno Dr., Lafayette, LA  70506",
//     date: "Sun. July 21, 2019",
//     time: "6:00AM - 2:00PM",
// }

// const booth = {
//     name: "Standard Booth",
//     size: "10ft. x 10ft",
//     price: "$25",
//     description: "These booths do not come with electricity or a water hookup."
// }
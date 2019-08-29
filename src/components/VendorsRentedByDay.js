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
        this.changePage();
    }

    goBack = () => {
        return this.props.history.goBack();
      }

    changePage = () => { //timeout function that will originally set opacity to 0 and switch when this.state.page === true
        setTimeout(() => {
            this.setState({
                page: true
            })
        }, 300)
        
    }
    formatedDate = (date) => { //takes date stored in backend and converts it to more UI friendly.
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
        if (this.props.user.fetching && !this.props.user.userData) return <div/>;
        // console.log(this.props.user.userData.upcoming_mkt)
        // console.log(this.props.market.marketData.booths)
        let boothTypes = [];
        let booths = this.props.market.vendorsWhoRentedByDate;
        let availableBooths = this.props.market.marketData.booths;
        booths.map(booth => {
            if (!boothTypes.includes(booth.booth_name)){
                boothTypes.push(booth.booth_name)
            }
        });
        console.log('boothtypes')
        console.log(boothTypes)
        console.log('boothtypes')
        let available = []; //finding the numbers of available booths of each type of booths with the maps below.
        availableBooths.map(boothNum => {
            available.push(boothNum.number);
        })
        console.log('available')
        console.log(availableBooths)
        console.log('available')
        boothTypes.map((boothT, index) => {
            this.props.market.vendorsWhoRentedByDate.map(vendor => {
            return (vendor.booth_name === boothT) ? available[index] = available[index] - 1 : null 
            })
        });
      
        return (
  
            <div style={{height: "100%"}}>
            <Header>
                <StyledImg src={Arrow} onClick={this.goBack}/>
                <CreateHeader>View Vendors</CreateHeader>
            </Header>
            <StyledDiv style={{ opacity: (this.state.page) ? "1" : "0" , transition: "opacity 1s" }}>
                <StyledP2>{this.formatedDate(this.props.match.params.date)}</StyledP2>
                { boothTypes.map((boothT, index) => {
                    return <div key={index}>
                        <StyledPTag><p style={{width: "60%"}}>{boothT}</p>  <p style={{fontFamily: "Raleway", fontSize: "14px", color: "#ce8400", paddingTop: "3px"}}>Available: {available[index]}</p></StyledPTag> 
                        {this.props.market.vendorsWhoRentedByDate.map((vendor) => {
                            return (vendor.booth_name === boothT) ?
                                <StyledPFlex>
                                    <p style={{width: "60%"}}>{vendor.name}</p>
                                    {(vendor.paid === 0) ? <p style={{color: "red"}}>NOT PAID</p> : <p style={{color: "#478529" }}>PAID</p> }
                                </StyledPFlex>  : null })}
                    </div>
                                })}
                { availableBooths.map(boothA => {
                    return (boothTypes.includes(boothA.name)) ? <> </> :
                    <StyledPTag><p style={{width: "60%"}}>{boothA.name}</p>  <p style={{fontFamily: "Raleway", fontSize: "14px", color: "#ce8400", paddingTop: "3px"}}>Available: {boothA.number}</p></StyledPTag> })}
            </StyledDiv>
        </div> 
   
        ) 
    }
    
}
const StyledPTag = styled.p`
    font-family: Raleway;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    margin-left: 4%;
    margin-bottom: -20px;
    display: flex;

`;

const StyledDiv = styled.div`
    min-height: 100vh;
     @media(min-width: 600px){
        margin: 0 auto;
        width: 500px;
        margin-top: 30px;
  }
`

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
const StyledP2 = styled.p`
    text-align: left;
    margin-left: 4%;
    margin-bottom: 5px;
    width: 99%;
    font-weight: bold;
    font-size: 18px;
    font-family: Raleway;
`;

const StyledP = styled.p`
    text-align: left;
    margin-left: 4%;
    margin-bottom: 5px;
    width: 99%;
`;
const StyledPFlex = styled.p`
    text-align: left;
    margin-left: 4%;
    margin-top: 0;
    width: 99%;
    display: flex;
    paddingTop: -10px;
    paddingBottom: -10px;
    margin-bottom: 0;
    height: 30px;
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
    
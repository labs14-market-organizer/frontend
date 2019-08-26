import React from "react";
import NavbarVendor from "../components/NavbarVendor";
import { connect } from "react-redux";
import styled from "styled-components";
import icon from "../assets/keyboardarrowright.svg"
import { Box } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { deleteVendor } from "../redux/actions/vendorData";
import { getMarketById } from "../redux/actions/marketData";
import Arrow from "../assets/ic-arrow-back.svg";


class BoothRented extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        page: false
    };
    }
    componentDidMount() {
        // let marketId = this.props.match.params.marketid;
        // let boothId = this.props.match.params.boothid;
        this.props.getMarketById()
        this.changePage();
        
    }
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
    render() {
        // let marketId = this.props.match.params.marketid;
        // let boothId = this.props.match.params.boothid;
        return (
            <div>
                <Header>
                    <StyledImg src={Arrow} onClick={this.goBack} />
                    <CreateHeader>View Booth</CreateHeader>
                </Header>
                <div style={{ opacity: (this.state.page) ? "1" : "0" , transition: "opacity 1s" }}>
                    hello

                </div>
            </div>
        )
    }
}
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
        {deleteVendor, getMarketById})(withRouter(BoothRented));

 
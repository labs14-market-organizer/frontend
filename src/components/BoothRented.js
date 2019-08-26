import React from "react";
import NavbarVendor from "../components/NavbarVendor";
import { connect } from "react-redux";
import styled from "styled-components";
import icon from "../assets/keyboardarrowright.svg"
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { deleteVendor } from "../redux/actions/vendorData";
import { getMarketById } from "../redux/actions/marketData";

class BoothRented extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        page: false
    };
    }
    componentDidMount() {
        this.props.getMarketById()
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
         user: {...state.checkUserData},
        market: {...state.checkMarketData}
    }
}
    
export default connect( mapStateToProps,
        {deleteVendor, getMarketById})(BoothRented);
    
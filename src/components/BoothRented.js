import React from "react";
import NavbarVendor from "../components/NavbarVendor";
import { connect } from "react-redux";
import styled from "styled-components";
import icon from "../assets/keyboardarrowright.svg"
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

class BoothRented extends React.Component {
    constructor(props){
    super(props);
    this.state = {};
    }


    render() {
        return (
            <div>
                    NI
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
        {})(BoothRented);
    
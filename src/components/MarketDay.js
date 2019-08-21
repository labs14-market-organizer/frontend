import React from "react";
import NavbarVendor from "../components/NavbarVendor";
import { connect } from "react-redux";



class MarketDay extends React.Component {
    constructor(props) {
         super(props);
         this.state = {

         }
    }

render() {
    console.log(this.props.day.reserve_date.split("T")[0])
    return (
        <p>hi</p>
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
        {})(MarketDay);
    
    
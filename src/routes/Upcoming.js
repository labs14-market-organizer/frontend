import React from "react";
import NavbarVendor from "../components/NavbarVendor";
import { connect } from "react-redux";
import MarketDay from "../components/MarketDay";

class Upcoming extends React.Component {
    constructor(props) {
         super(props);
         this.state = {

         }
    }
   renderMarketOwner = () => {
       return (
           <>
        {this.props.user.userData.upcoming_mkt.map(day => {
            return <MarketDay day={day} />
        })}
        </>
       )
   }
   renderVendor = () => {
    return (
        <p>vendor</p>
    )
}

    render() {
        console.log(this.props.user.userData)
        // console.log(this.props.market)
        console.log(this.props.user.userData.upcoming_mkt)
        return (
            
            <div>
  
            <NavbarVendor />
            
            <p style={{paddingTop: "140px", fontFamily:"Raleway"}}>Upcoming Schedule</p>
            { this.props.user.userType ===  "Market Owner" ? this.renderMarketOwner()  : this.renderVendor() }
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
    {})(Upcoming);


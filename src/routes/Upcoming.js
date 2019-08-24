import React from "react";
import NavbarMarket from "../components/NavbarMarket";
import { connect } from "react-redux";
import MarketDay from "../components/MarketDay";

class Upcoming extends React.Component {
    constructor(props) {
         super(props);
         this.state = {
            popup: null
         }
    }

   changePopup = (e, index) => {
     this.setState({
         ...this.state,
         popup: index
     })
   };
   renderMarketOwner = () => {
       return (
           <>
        {this.props.user.userData.upcoming_mkt.map((day, index) => {
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
        return (
            
            <div style={{height: "100vh"}}>
  
            <NavbarMarket />
            
            <p style={{paddingTop: "140px", fontFamily:"Raleway", fontSize: "18px", fontWeight: "600"}}>Upcoming Market Schedule</p>
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


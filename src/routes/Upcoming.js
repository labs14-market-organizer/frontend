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
        <>
        {this.props.user.userData.upcoming_vdr.map((day, index) => {
            return <MarketDay day={day} />
        })}
        </>
    )
    }

    render() {
        var marketOwner = this.props.user.userType === "Market Owner";
        // console.log(this.props.user.userData);
        return (
            
            <div style={{height: "100vh"}}>
  
            { marketOwner ? <NavbarMarket /> : "" }
            
            <p style={{paddingTop: marketOwner ? "140px" : "0px", fontFamily:"Raleway", fontSize: "18px", fontWeight: "600"}}>{marketOwner ? "Upcoming Market Schedule" : "Your Upcoming Schedule"}</p>
            { marketOwner ? this.renderMarketOwner()  : this.renderVendor() }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: {...state.checkUserData},
        market: {...state.checkMarketData},
        vendor: {...state.checkVendorData}
    }
}

export default connect( mapStateToProps,
    {})(Upcoming);


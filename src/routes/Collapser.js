import React from "react";
import styled from "styled-components";
//import facebook from "../assets/facebookSymbol.svg";
import { Box, Button } from '@material-ui/core';
import Expandor from '../components/Expandor';
import {connect} from "react-redux";
import {requestReservationPermissions} from "../redux/actions/boothReserve"
// import Icon from "../assets/dropdown.svg"

const militaryConvert = (time) => {
    let hours = time.split('');
    let am = "am";
    let newHours, combined, subtractedHours, rest;
    if (hours[0] === "0"){
      combined = hours[1] + hours[2] + hours[3] + hours[4] + am;
      return combined;
    } else if (hours[0] === "1" && hours[1] === "2") {
      return hours.join('') + "pm";
    } else if (hours[0] === "1" && (hours[1] === "0" || hours[1] === "1")) {
      return hours.join('') + "am";
    } else {
      combined = parseInt(hours[0] + hours[1]);
      rest = hours[2] + hours[3] + hours[4];
      subtractedHours = combined - 12;
      return (subtractedHours.toString() + rest + "pm");
    }
  }

class Collapser extends React.Component {
    disabled = false;
    constructor(props){
        super(props);
         this.state = {
            toggle1: false,
            toggle2: false,
            toggle3: false,
            operation: [{ day: 'sunday', start: null, end: null }, { day: 'monday', start: null, end: null },{ day: 'tuesday', start: null, end: null }, { day: 'wednesday', start: null, end: null },{ day: 'thursday', start: null, end: null }, { day: 'friday', start: null, end: null }, { day: 'saturday', start: null, end: null }],
        }
        let opp = this.state.operation.map(x=> {let r = this.props.market.operation.filter(z=> x.day === z.day); return r && r.length && r.length > 0 ? { day: r[0].day, start: r[0].start, end: r[0].end} : x })
              opp = opp.map(x=> 
                {
                  if(!x) return x; 
                  let f = (b)=> 
                  {
                    if(!b) return b;
                    b = b.split(":");
                    b.length = 2; 
                    return b.join(":")
                  }
                  x.start = f(x.start);
                  x.end = f(x.end);
                  return x;
                }) 
              this.state.operation = opp;
  }
   
    changeHeight = (spot) => {
      console.log(spot)
      if (spot === "1"){
        this.setState({
        ...this.state,
        toggle1: !this.state.toggle1
      })} else if (spot === "2") {
        this.setState({
          ...this.state,
          toggle2: !this.state.toggle2
        })
      }else if (spot === "3") {
        this.setState({
          ...this.state,
          toggle3: !this.state.toggle3
        })
    }
  }
    componentDidUpdate()
    {
    }
    render(){
        
        var class1 = this.state.toggle1 ? "longHeight1" : "shortHeight1";
        var class2 = (this.state.toggle2) ? "longHeight2" : "shortHeight2";
        let class3 = (this.state.toggle3) ? "longHeight3" : "shortHeight3";
        // let img1 = (this.state.toggle1) ? "imgUp1" : null;
        // let img2 = (this.state.toggle2) ? "imgUp2" : null;
        // let img3 = (this.state.toggle3) ? "imgUp3" : null;
        let market = this.props.market;

        let tag = {
          fontFamily: "Raleway",
          fontSize: "16px",
          fontWeight: "600",
          fontStyle: "normal",
          fontStretch: "normal",
          lineHeight: "1.5",
          letterSpacing: "normal",
          color: "#000000",
          marginBottom: "4px",
          marginLeft: "-20px"
        }
        let subtag = {
          fontFamily: "Raleway",
          fontSize: "12px",
          fontWeight: "600",
          fontStyle: "normal",
          fontStretch: "normal",
          lineHeight: "1.33",
          letterSpacing: "normal",
          color: "#000000",
          marginBottom: "7px"
        }
        let text ={
          fontFamily: "Roboto",
          fontSize: "16px",
          fontWeight: "300",
          fontStyle: "normal",
          fontStretch: "normal",
          lineHeight: "1.5",
          letterSpacing: "normal",
          color: "#000000",
          marginBottom: "2px"
        }
        var button = 
        {
          width: "80vw",
          maxWidth: "500px",
          height: "60px",
          fontSize: "18px",
          fontFamily: "Raleway",
          fountWeight: "600",
          borderRadius: "5px",
          border: "solid 1px rgba(0, 0, 0, 0.1)",
          letterSpacing: "0.75px",
          backgroundColor: "#478529",
          color: "#FFF",
          marginTop: "4%",
          trasition: "color 10s linear"
        }
        var buttonDisabled =
        {
          ...button,
          backgroundColor: "#FFF",
          borderColor: "#AAA",
          color: "#AAA"
        }
        let something = {
          rules: "ai dosfa osdn hfkaj dbnf asjfak ijsdf aajsd bfkjasdbf kbajsdfj kabsdf asijdfba klj sdbf asd bfkajs dbf lajkdf bakjsdf basd bfla ksd fb a kls dbfl kjdsb f kjdas bfakjsd f"
        }
        var acceptedRules = this.props.checkVendorData.vendorData && this.props.checkVendorData.vendorData.status_mkt ? this.props.checkVendorData.vendorData.status_mkt.find(x=> x && x.market_id === market.id && x.market_id) && !this.disabled ? 1 : 0 : -1;
        return (
            <Container style={{maxWidth: "600px", margin: "0 auto"}}>
            <Expandor _width="600px" >
            <div>
             <div><i class="fa fa-map-marker" style={{fontSize: "20px"}}></i></div>
              <div style={tag}>Market Info</div>
              <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <div style={subtag}><em class="fa fa-map-marker" aria-hidden="true"> </em> Address</div>
                  <div style={text}>{market.address}, {market.city}, {market.state} {market.zipcode}</div>
                  <div style={subtag}><em class="fa fa-calendar" aria-hidden="true"> </em> Hours</div>
                  <div style={{display: "flex", justifyContent: "space-between", width: "85vw", maxWidth: "400px"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%"}}>
                      { this.state.operation.map(opHours =>
                        <div style={text}><div style={{fontWeight: opHours.start ? "400" : ""}} >{opHours.day.charAt(0).toUpperCase() + opHours.day.slice(1)}</div></div>
                      )}
                      </div>
                      <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%"}}>
                      { this.state.operation.map(opHours =>
                      <div><div style={text}>{opHours.start === null ? <span>CLOSED</span> : <span style={{fontWeight: "400"}}>{`${militaryConvert(opHours.start)} - ${(militaryConvert(opHours.end))}`}</span>}</div></div>
                      )}
                    </div>
                  </div>
              </div> 
              </div>
             </Expandor>
             <div style={{margin: "5px"}}/>
            { (market.email && market.email.length > 0) || (market.phone && market.phone.length > 0) ? 
              <Expandor _width="600px">
               <div>
               <div><i class="fa fa-2x fa-address-book-o" style={{fontSize: "20px"}}></i></div>
                <div style={tag}>Contact Info</div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                 {market.email && market.email.length > 0 ? <><div style={subtag}><em class="fa fa-at" aria-hidden="true"> </em> Email Address</div>
                  <div style={text}>{market.email}</div></> : ""}
                  {market.phone && market.phone.length > 0 ? <><div style={subtag}><em class="fa fa-phone" aria-hidden="true"> </em> Phone Number</div>
                  <div style={text}>{market.phone}</div></> : ""}
                </div>
               </div>
             </Expandor> : ""}
             <div />
             <div style={{ marginTop: "10px"}}>
             { (market.website !== null && market.website.length > 0) || (market.facebook !== null && market.facebook.length > 0) || (market.instagram !== null && market.instagram.length > 0) || (market.twitter !== null  && market.twitter.length > 0) ?
             <Expandor _width="600px" >
               <div id="alt">
               <div><i class="fa fa-2x fa-globe" style={{fontSize: "20px"}}></i></div>
                <div style={tag}>Social Media</div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                  {(market.website !== null && market.website.length > 0) ? <><div style={subtag}><em class="fa fa-globe" aria-hidden="true"> </em> Website</div> <div onClick={()=>openInNewTab(`http://${market.website}`)} style={text}>{market.website}</div></> : null}
                  {(market.facebook !== null && market.facebook.length > 0) ? <> <div style={subtag}><em class="fa fa-facebook-square" aria-hidden="true"> </em> Facebook</div> <div onClick={()=>openInNewTab(`http://www.facebook.com/${market.facebook}`)}style={text}>{market.facebook}</div> </> : null}
                  {(market.instagram !== null) && market.instagram.length > 0 ? <> <div style={subtag}><em class="fa fa-instagram" aria-hidden="true"> </em> Instagram</div> <div onClick={()=>openInNewTab(`http://www.instagram.com/${market.instagram}`)} style={text}>{market.instagram}</div></> : null}
                  {(market.twitter !== null)  && market.twitter.length > 0 ? <> <div style={subtag}><em class="fa fa-twitter-square" aria-hidden="true"> </em> Twitter</div> <div onClick={()=>openInNewTab(`http://www.twitter.com/${market.twitter}`)} style={text}>{market.twitter}</div> </> : null}
                </div>
               </div>
              
             </Expandor>: ""}
             </div>
             <div style={{marginTop: "10px"}}>
              <Expandor _width="600px" expanded={acceptedRules === 0 && !this.disabled ? "panel2": false} force={this.disabled}>
              <div>
                <div><i className="fa fa-file-text" style={{fontSize: "20px"}}></i></div>
                  <div style={{...tag, marginBottom: "0px"}}>Market Rules</div>
                  <div>
                    <div style={{fontFamily: "Roboto", fontSize: "16px", fontWeight: "500", textAlign: "left", marginLeft: "-5%", marginTop:"-2%", marginBottom: "3%"}}>
                        By confirming a booth, you are agreeing to this market's Rules and Code of Conduct
                    </div>
                    <BorderedBox>
                    <ScrollOverride>
                      <div>{market.rules}</div>
                      </ScrollOverride>
                    </BorderedBox>
                    {acceptedRules === 1 && !this.disabled ? <ErrorDiv>You Have Already Accepted The Rules</ErrorDiv> : <div style={{height: "12px", marginTop: "2px"}}/>}
                    {acceptedRules > -1 ? <div><Button style={acceptedRules > 0  ? buttonDisabled : button} disabled={acceptedRules > 0} onClick={()=> {this.props.requestReservationPermissions(market.id); setTimeout(()=> this.disabled= true, 200); setTimeout(()=> this.disabled= false, 1000)}}>{"Accept"}</Button></div> : <div/>}
                </div>
                
                </div>
              </Expandor>
             </div>
             </Container>
         )
    }

  };

  const mapStateToProps = (state) =>
  {
    return {
      ...state
    }
  }

const Container = styled.div`
  i{
    color: #478529
  }
    em
  {
    color: #ce8400
  }
`

const ErrorDiv = styled.div`
  margin 0 auto;
  padding-left: 10px;
  padding-top: 5px;
  font-size: 18px;
  font-family: Raleway;
  color: #b21b2d;
`
const StyledImg1 = styled.img`
  padding-top: 3px;
  transition: transform 1s;

`;
const StyledImg2 = styled.img`
  padding-top: 3px;
  transition: transform 1s;
`;
const StyledImg3 = styled.img`
  padding-top: 3px;
  transition: transform 1s;
`;

const Flex = styled.div`
  display: flex;
`
const StyledBox1 = styled(Box)`
    width: 102%;
    margin-top: 12px;
    text-align: left;
    overflow: hidden;
    .longHeight1 {
      height: 336px;
      padding-bottom: 16px;
      transition: height 1s linear;
    }
    .shortHeight1 {
      height: 60px;
      transition: height 1s linear;
    }
    @media(min-width: 600px){
    max-width: 600px;
    margin-top: 12px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const StyledBox2 = styled(Box)`
    width: 102%;
    overflow: hidden;
    margin-top: 12px;
    text-align: left;
    .longHeight2 {
      height: 168px;
      padding-bottom: 16px;
      transition: height 1s linear;
    }
    .shortHeight2 {
      height: 60px;
      transition: height 1s linear;
    }
    @media(min-width: 600px){
    max-width: 600px;
    margin-top: 12px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledBox3 = styled(Box)`
    width: 102%;
    overflow: hidden;
    margin-top: 12px;
    text-align: left;
    .longHeight3 {
      height: 272px;
      padding-bottom: 16px;
      transition: height 1s linear;
    }
    .shortHeight3 {
      height: 60px;
      transition: height 1s linear;
    }
    @media(min-width: 600px){
    max-width: 600px;
    margin-top: 12px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Tag = styled.p`
font-family: Raleway;
font-size: 50px;
font-weight: 500;
font-style: normal;
font-stretch: normal;
line-height: 1.5;
letter-spacing: normal;
color: #000000;

`;
const Tag1 = styled.p`
  font-size: 12px;
  font-family: Raleway;
  font-weight: bold;
  padding-left: 16px;
  width: 80%;
  margin-top: -5px;
`;
const Ltag = styled.p`
  font-size: 16px;
  font-family: Roboto;
  margin-left: 16px;
  margin-top: -5px;
  @media(min-width: 600px){
    font-size: 20px;
  }
`;
const Ltag1 = styled.p`
  font-size: 16px;
  width: 30%;
  font-family: Roboto;
  margin-left: 16px;
  margin-top: -5px;
  @media(min-width: 600px){
    font-size: 20px;
  }
`;

const BorderedBox = styled.div `
max-height: 324px;
max-width: 330;
padding: 2px 2px 2px 0
border: 1px solid #979797;
border-radius: 10px;
`

const ScrollOverride = styled.div `
  max-height: 324px;
  max-width: 330; 
  padding-left: 20px;
  padding-right: 4px;
  overflow-y: scroll;
  font-family: Roboto; 
  font-size: 16px; 
  text-align: left; 
::-webkit-scrollbar {
  width: 10px;
  right: -500px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #97979700; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #478529; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #175500; 
}

`
function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

export default connect(mapStateToProps, {requestReservationPermissions})(Collapser);


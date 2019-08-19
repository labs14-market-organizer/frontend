import React from "react";
import styled from "styled-components";
import dropdown from "../assets/dropdown.svg";
import { Box } from '@material-ui/core';
import Expandor from '../components/Expandor'
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
          fontSize: "14px",
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
        let something = {
          rules: "ai dosfa osdn hfkaj dbnf asjfak ijsdf aajsd bfkjasdbf kbajsdfj kabsdf asijdfba klj sdbf asd bfkajs dbf lajkdf bakjsdf basd bfla ksd fb a kls dbfl kjdsb f kjdas bfakjsd f"
        }
        return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Expandor _width="600px" >
            <div>
              <div></div>
              <div style={tag}>Market Info</div>
              <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <div style={subtag}>Address</div>
                  <div style={text}>{market.address}, {market.city}, {market.state} {market.zipcode}</div>
                  <div style={subtag}>Hours</div>
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
             <Expandor _width="600px">
               <div>
                <div></div>
                <div style={tag}>Contact Info</div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                  <div style={subtag}>Email Address</div>
                  <div style={text}>{market.email}</div>
                  <div style={subtag}>Phone Number</div>
                  <div style={text}>{market.phone}</div>
                </div>
               </div>
             </Expandor>
             <div />
             <div style={{ marginTop: "10px"}}>
             <Expandor _width="600px" >
               <div>
               <div></div>
                <div style={tag}>Social Media</div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                  {(market.website !== null && market.website.length > 0) ? <div><div style={subtag}>Website</div> <div style={text}>{market.website}</div></div> : null}
                  {(market.facebook !== null) ? <div> <div style={subtag}>Facebook</div> <div style={text}>{market.facebook}</div> </div> : null}
                  {(market.instagram !== null) ? <div> <div style={subtag}>Instagram</div> <div style={text}>{market.instagram}</div></div> : null}
                  {(market.twitter !== null) ? <div> <div style={subtag}>Twitter</div> <div style={text}>{market.twitter}</div> </div> : null}
                </div>
               </div>
              
             </Expandor>
             </div>
             <div style={{marginTop: "10px"}}>
              <Expandor _width="600px">
              <div>
                <div></div>
                  <div style={tag}>Market Rules</div>
                  <div>
                    <div style={{fontFamily: "Roboto", fontSize: "16px", textAlign: "left", marginLeft: "5px"}}>
                        By confirming a booth, you are agreeing to this market's Rules and Code of Conduct
                    </div>
                    <div style={{height: "320px", overflow: "scroll", fontFamily: "Roboto", fontSize: "16px", border: "1px solid black", textAlign: "left", marginLeft: "5px"}}>
                      {something.rules}
                    </div>
                </div>
                </div>
              </Expandor>
             </div>
             </div>
         )
    }

  };

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


export default Collapser;


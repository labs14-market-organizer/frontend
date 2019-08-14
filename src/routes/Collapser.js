import React from "react";
import styled from "styled-components";
import dropdown from "../assets/dropdown.svg";
import { Box } from '@material-ui/core';

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
       
        return (
            <>
            <StyledBox1  boxShadow={4}> 
            <div className={class1}>
            <Flex>
                <Tag>Market Info</Tag>
                <StyledImg1 src={dropdown} style={{transform: (this.state.toggle1) ? "rotate(180deg)" : "rotate(0deg)"}} onClick={() => this.changeHeight("1")}/>
            </Flex>
            { (this.state.toggle1) ? 
            <> 
              <Tag1>Address</Tag1>
                <Ltag>{market.address}, {market.city}, {market.state} {market.zipcode}</Ltag>
                <Tag1>Hours</Tag1>
                { this.state.operation.map(opHours => {
                return (opHours.start !== null) ? <Flex><Ltag1 key={market.id}>{opHours.day.charAt(0).toUpperCase() + opHours.day.slice(1)}</Ltag1> <Ltag>{militaryConvert(opHours.start)} - {(militaryConvert(opHours.end))}</Ltag> </Flex> : <Flex><Ltag1>{opHours.day.charAt(0).toUpperCase() + opHours.day.slice(1)}</Ltag1> <Ltag>CLOSED</Ltag></Flex>
              }) } </> : null }
              </div>
            </StyledBox1>
            
            <StyledBox2 boxShadow={4} >
            <div className={class2}>
            <Flex>
            <Tag>Contact Info</Tag>
            <StyledImg2 src={dropdown} onClick={() => this.changeHeight("2")} style={{transform: (this.state.toggle2) ? "rotate(180deg)" : "rotate(0deg)"}}/>
            </Flex>
            { (this.state.toggle2) ? 
                <>
                <Tag1>Email Address</Tag1>
                <Ltag>{market.email}</Ltag>
                <Tag1>Phone Number</Tag1>
                <Ltag>{market.phone}</Ltag> </> : null }
                </div>
            </StyledBox2>
            
            <StyledBox3 className={class3} boxShadow={4}>
            <div className={class3}>
            <Flex>
            <Tag>Social Media</Tag>
            <StyledImg3 src={dropdown} onClick={() => this.changeHeight("3")} style={{transform: (this.state.toggle3) ? "rotate(180deg)" : "rotate(0deg)"}}/>
            </Flex>
            { (this.state.toggle3) ? 
                <>
              {(market.website !== null && market.website.length > 0) ? <div> <Tag1>Website</Tag1> <Ltag>{market.website}</Ltag> </div> : null}
              {(market.facebook !== null) ? <div> <Tag1>Facebook</Tag1> <Ltag>{market.facebook}</Ltag> </div> : null}
              {(market.instagram !== null) ? <div> <Tag1>Instagram</Tag1> <Ltag>{market.instagram}</Ltag> </div> : null}
              {(market.twitter !== null) ? <div> <Tag1>Twitter</Tag1> <Ltag>{market.twitter}</Ltag> </div> : null} </>
              : null }
              </div>
            </StyledBox3>
            </>
         )
    }

}

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
  font-size: 16px;
  font-family: Raleway;
  font-weight: bold;
  padding-top: 7px;
  padding-left: 16px;
  width: 80%;
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


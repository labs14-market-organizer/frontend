import React from "react";
import styled from "styled-components";
import dropdown from "../assets/dropdown.svg";


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
            toggle3: true
        }
        }
   
    handleChange = (name) => {
    
        this.setState({
            ...this.state,
            name: !this.state[name]
        });
        
    }

    render(){
        let market = this.props.market;
        console.log(market)
        return (
            <>
            <StyledDiv1>
            { (this.state.toggle1) ? 
            <>  <Flex>
                <Tag>Market Info</Tag>
                <img src={dropdown} />
                </Flex>
                <Tag>Address</Tag>
                <Ltag>{market.address}</Ltag>
                <Tag>Hours</Tag>
                { market.operation.map(opHours => {
                return (opHours.start !== null) ? <Ltag key={market.id}>{opHours.day.charAt(0).toUpperCase() + opHours.day.slice(1)} {militaryConvert(opHours.start)} - {(militaryConvert(opHours.end))}</Ltag>  : null
              }) } </> : <Tag>Market Info</Tag> }
            </StyledDiv1>
            
            <StyledDiv2>
            <Flex>
            <Tag>Contact Info</Tag>
            <img src={dropdown} />
            </Flex>
            { (this.state.toggle2) ? 
                <>
                <Tag>Email Address</Tag>
                <Ltag>{market.email}</Ltag>
                <Tag>Phone Number</Tag>
                <Ltag>{market.phone}</Ltag> </> : null }
            </StyledDiv2>
            
            <StyledDiv3>
            <Flex>
            <Tag>Social Media</Tag>
            <img src={dropdown} onClick={() => this.handleChange()}/>
            </Flex>
            { (this.state.toggle3) ? 
                <>
              {(market.website !== null) ? <div> <Tag>Website</Tag> <Tag>{market.website}</Tag> </div> : null}
              {(market.facebook !== null) ? <div> <Tag>Facebook</Tag> <Tag>{market.facebook}</Tag> </div> : null}
              {(market.instagram !== null) ? <div> <Tag>Instagram</Tag> <Tag>{market.instagram}</Tag> </div> : null}
              {(market.twitter !== null) ? <div> <Tag>Twitter</Tag> <Tag>{market.twitter}</Tag> </div> : null} </>
              : null }
            </StyledDiv3>
            </>
         )
    }

}


const Flex = styled.div`
  display: flex;
`
const StyledDiv1 = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    transition-property: height;
    transition-duration: 3s;
    height: 200px;
`;
const StyledDiv2 = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    transition-property: height;
    transition-duration: 3s;
    
`;

const StyledDiv3 = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    transition-property: height;
    transition-duration: 3s;

`;

const Tag = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-family: Raleway;
  font-weight: 600;
  margin-bottom: -10px;
  @media(min-width: 600px){
    font-size: 16px;
  }
`;
const Ltag = styled.p`
  font-size: 16px;
  font-family: Raleway;
  @media(min-width: 600px){
    font-size: 20px;
  }
`;



export default Collapser;


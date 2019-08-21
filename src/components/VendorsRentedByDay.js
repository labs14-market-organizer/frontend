import React from "react";
import NavbarVendor from "../components/NavbarVendor";
import { connect } from "react-redux";
import styled from "styled-components";
import Arrow from "../assets/ic-arrow-back.svg";



class VendorsRentedByDay extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    goBack = () => {
        return this.props.history.goBack();
      }

    render() {
        return (
            <>
            <Header>
                  <StyledImg src={Arrow} onClick={this.goBack} />
                  <CreateHeader>View Vendors</CreateHeader>
                </Header>
            <p>Hi from vendorsRented by day</p>
            </>
        )
    }
    
}

const Header = styled.div`
  display: flex;
  background-color: #478529;
  color: white;
  height: 60px;
`;

const StyledImg = styled.img`
  margin-left: 16px;
  margin-top: 0;
  cursor: pointer; 
  margin-right: 16px; 

`;
const CreateHeader = styled.h4`
  margin-top: 20px;
  font-family: Raleway;
  font-size: 18px;
`;

export default VendorsRentedByDay;
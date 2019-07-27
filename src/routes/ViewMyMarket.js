import React from "react";
import { connect } from "react-redux";
import Arrow from "../assets/ic-arrow-back.svg";
import styled from "styled-components";
import { Button } from "@material-ui/core"

const ViewMyMarket = () => {
  const sites = ['website', 'facebook', 'twitter', 'instagram'];//going to use to check to see if obj contains when I loop over the obj.
    return (
      <div>
        <Header>
            <ArrowImage src={Arrow} />
            <CreateHeader>View Market</CreateHeader>
        </Header>
        <Container>
            <MarketName>Layfayette Farmers Market</MarketName> 
            <MarketDescription>Louisiana-proud, family-owned farmers market</MarketDescription>
            <Tag>Address</Tag>
            <Tag>Hours</Tag>
            <Tag>Market Status</Tag>
            <Tag>Website</Tag>
            <Tag>Facebook</Tag>
            <Flex>
              <WhiteButton variant="outlined">Edit Booths</WhiteButton>
              <GreenButton variant="outlined">Edit Market</GreenButton>
            </Flex>
        </Container>
      </div>
    )
}
//Going to need to see the object I get back and loop over obj and render based on whether its in the list of websites stored.
const Header = styled.div`
  display: flex;
  background-color: #478529;
  color: white;
  height: 60px;
`;

const CreateHeader = styled.h4`
  margin-left: 15px;
  margin-top: 20px;
`;

const ArrowImage = styled.img`
  margin-left: 2%;
`;

const Container = styled.div`
  text-align: left;
  margin-left: 3%;
`
const MarketName = styled.p`
  font-size: 24px;
`
const MarketDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

const Tag = styled.p`
  font-size: 12px;
  line-height: 16px;
`;

const Flex = styled.div`
  display: flex;
`
const WhiteButton = styled(Button)`
  width: 40vw;
  height: 60px;
  font-size: 16px;
  border-radius: 10px;
`
const GreenButton = styled(Button)`
  width: 40vw;
  margin-left: 8vw;
  height: 60px;
  background-color:#478529;
  color: white;
  font-size: 16px;
  border-radius: 10px;

`
const mapStateToProps = state => {
    return {
      //states
      ...state.checkUserData
    };
  };
  
  export default connect(
    mapStateToProps,
    { }
  )(ViewMyMarket);
  
import React, { Component } from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import { Typography } from "@material-ui/core";

import lajawanti from "../assets/lajawanti.png"

class MeetTheTeam extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "TEAM" };
  }

  team = [{img: lajawanti,
	name: "Lajawanti Dhake",
	title: "Team Lead",
	location: "Edison, NJ",
	github: "https://github.com/lajawanti"}];

  render() {
    return (
      <>
        <Navbar />
        <StyledDiv>
          <div>
            <img />
            <Typography variant="h2">Meet the Team</Typography>
          </div>
          <Typography variant="body1">
            Cloud Stands was created in response to small markets with a need
            for an easier way to organize and communicate with their vendors.
            This is the awesome team that answered the call.
          </Typography>
		  	
		  {this.team[0].name}
        </StyledDiv>
      </>
    );
  }
}

export default MeetTheTeam;

const StyledDiv = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 112px;
`;

import React, { Component } from 'react';
import styled from "styled-components";

import Navbar from '../components/Navbar';


class MeetTheTeam extends Component {
	constructor(props) {
		super(props);
		this.state = { page: "TEAM" }
	}
	render() { 
		return ( 
			<>
			<Navbar />
			<StyledDiv>
				
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

import React, { Component } from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import { Typography } from "@material-ui/core";

import teamcloud from "../assets/teamcloud.svg"
import raindrop from "../assets/raindrop.svg"
import lajawanti from "../assets/lajawanti.png"
import kayla from "../assets/kayla.png"
import dwayne from "../assets/dwayne.png"
import mindy from "../assets/mindy.png"
import matt from "../assets/matt.png"
import todd from "../assets/todd.png"
import justin from "../assets/justin.png"
import leigh from "../assets/leigh.png"
import chase from "../assets/chase.png"

class MeetTheTeam extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "TEAM" };
  }

  team = [{
    img: lajawanti,
    name: "Lajawanti Dhake",
    title: "Team Lead",
    location: "Edison, NJ",
    github: "https://github.com/lajawanti"
   },
   {
     img: kayla,
     name: "Kayla Dugas",
     title: "Product Designer",
     location: "Lafayette, LA",
     linkedin: "https://www.linkedin.com/in/kayladugas/",
     twitter: "https://twitter.com/KaylahRoxOut",
     portfolio: "kayladugas.com"
   },
   {
     img: dwayne,
     name: "Dwayne Pearson",
     title: "Full Stack Developer",
     location: "Milwaukee, WI",
     github: "https://github.com/DwayneDevelops",
     linkedin: "https://www.linkedin.com/in/dwaynedevelops/"
   },
   {
     img: mindy,
     name: "Mindy Allen",
     title: "Full Stack Developer",
     location: "Southern, MD",
     github: "https://github.com/MAllen07",
     linkedin: "https://www.linkedin.com/in/mindyallen7/",
     twitter: "https://www.linkedin.com/in/mindyallen7/",
    

   },
   {
     img: matt,
     name: "Matt Poloni",
     title: "Full Stack Developer",
     location: "Tampa Bay, FL",
     github: "https://github.com/matt-poloni",
     linkedin: "https://www.linkedin.com/in/mattpoloni",
     twitter: "https://www.twitter.com/matt_poloni"
   },
   {
     img: todd,
     name: "Todd McKenzie",
     title: "Full Stack Developer",
     location: "St. Louis, MO",
     github: "https://github.com/toddmckenzie",
     linkedin: "https://www.linkedin.com/in/todd-mckenzie-0431a7141/",
    twitter: "https://twitter.com/ToddMcKenzie4"
  },
  {
    img: justin,
    name: "Justin Hammett",
    title: "Full Stack Developer",
    location: "St. Louis, MO",
    github: "https://github.com/hammettDev",
    linkedin: "linkedin.com/in/justin-hammett-stl"
  },
  {
    img: leigh,
    name: "Leigh Martin",
    title: "Full Stack Developer",
    location: "Columbia, SC",
    github: "https://github.com/LTM888",
    linkedin: "linkedin.com/leighmartin"
  },
  {
    img: chase,
    name: "Chase Wenner",
    title: "Full Stack Developer",
    location: "Ohio, USA",
    github: "https://github.com/chasester",
    linkedin: "https://www.linkedin.com/in/chase-wenner-5395b6190/"

  }];

  render() {
    return (
      <>
        <Navbar />
        <StyledDiv>
          <div>
            <img src={teamcloud}/>
            <Typography variant="h2">Meet the Team</Typography>
          </div>
          <Typography variant="body1">
            Cloud Stands was created in response to small markets with a need
            for an easier way to organize and communicate with their vendors.
            This is the awesome team that answered the call.
          </Typography>
		  	
		  {this.team.map(member => (
        <div>
        <Raindrop>
        <ImageWrapper>
          <img src={member.img} />
          <LabelWrapper>
          <Label>
          <Typography className="name" variant="body1">{member.name}</Typography>
          <Typography className="role" variant="body1">{member.title}</Typography>
          <Typography className="location" variant="body1">{member.location}</Typography>
          </Label>
          </LabelWrapper>
          </ImageWrapper>
        </Raindrop>
        </div>
      ))}
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
  flex-direction: column;
  align-items: center;
`;

const Raindrop = styled.div`
background-image: url(${raindrop})

`

const ImageWrapper = styled.div`
width: 200px;
height: 200px;
overflow: hidden;
margin-top: 12px;
margin-bottom: 12px;
margin-left: 20px;
img {
  width: 100%;
  
}
`

const Label = styled.div`
width: 200px;
height: 200px;
border-radius: 100;
background-color: white;
opacity: .93;

.name {
 font-weight: 600;
}
.role {
 font-size: 14px;
 color: #478529;
}
.location {
 font-size: 12px;
 color: #484848;
}


`

const LabelWrapper = styled.div`
height: 120px;
display: flex;
align-items: flex-end;

`

const Contact = styled.div`


`


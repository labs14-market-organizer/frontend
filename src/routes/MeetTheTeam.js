import React, { Component } from "react";
import styled from "styled-components";
// import {Github as GithubIcon, Twitter as TwitterIcon, Linkedin as LinkedinIcon } from "@material-ui/icons"
import githubIcon from "@material-ui/icons/"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

import { Typography } from "@material-ui/core";

import teamcloud from "../assets/teamcloud.svg";
import raindrop from "../assets/raindrop.svg";
import lajawanti from "../assets/lajawanti.png";
import kayla from "../assets/kayla.png";
import dwayne from "../assets/dwayne.png";
import mindy from "../assets/mindy.png";
import matt from "../assets/matt.png";
import todd from "../assets/todd.png";
import justin from "../assets/justin.png";
import leigh from "../assets/leigh.png";
import chase from "../assets/chase.png";

class MeetTheTeam extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "TEAM" };
  }

  team = [
    {
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
      portfolio: "https://kayladugas.com"
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
      twitter: "https://twitter.com/icolorcode",
      linkedin: "https://www.linkedin.com/in/mindyallen7/"
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
      linkedin: "https://linkedin.com/in/justin-hammett-stl"
    },
    {
      img: leigh,
      name: "Leigh Martin",
      title: "Full Stack Developer",
      location: "Columbia, SC",
      github: "https://github.com/LTM888",
      linkedin: "https://linkedin.com/leighmartin"
    },
    {
      img: chase,
      name: "Chase Wenner",
      title: "Full Stack Developer",
      location: "Ohio, USA",
      github: "https://github.com/chasester",
      linkedin: "https://www.linkedin.com/in/chase-wenner-5395b6190/"
    }
  ];

  render() {
    return (
      <>
        <Navbar />
        <StyledDiv>
          <CloudContainer>
            <Typography variant="h2">Meet the Team</Typography>
          </CloudContainer>
          <div />
          <Typography className="intro" variant="body1">
            Cloud Stands was created in response to small markets with a need
            for an easier way to organize and communicate with their vendors.
            This is the awesome team that answered the call.
          </Typography>
          <div>
          {this.team.map(member => (
            <Raindrop>
              <ImageWrapper>
                <img src={member.img} />
                <LabelWrapper>
                  <Label>
                    <Typography className="name" variant="body1">
                      {member.name}
                    </Typography>
                    <Typography className="role" variant="body1">
                      {member.title}
                    </Typography>
                    <Typography className="location" variant="body1">
                      {member.location}
                    </Typography>
                  </Label>
                </LabelWrapper>
              </ImageWrapper>
              <ContactWrapper>

          <a href={member.github ? member.github : member.portfolio} > <Github><i className={member.github ? "fa fa-github" : "fa fa-lightbulb-o"}></i></Github></a>
          <a href={member.linkedin}> <Linkedin><i className="fa fa-linkedin-square"></i></Linkedin></a>
          <a href={member.twitter}>   <Twitter><i className="fa fa-twitter"></i></Twitter></a>
              </ContactWrapper>
            </Raindrop>
          ))}
            </div>
        </StyledDiv>
        <Footer />
      </>
    );
  }
}

export default MeetTheTeam;

const StyledDiv = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 116px;
  flex-direction: column;
  align-items: center;
  div {
  @media (min-width: 692px) {
    display: flex;
    flex-direction: row;
    margin-right: 8px;
    flex-wrap: wrap;
    max-width: 1000px;
  }
  }

  .intro {
    /* color: red; */
    font-family: "Raleway";
    margin-top: 6px;
    margin-bottom: 20px;
    padding: 0px 34px;
    color: #484848;
    margin-bottom: 16px;
    @media(min-width: 692px) {
      margin-top: 24px;
      margin-bottom: 24px;
    max-width: 608px;
    font-size: 21px;
    line-height: 1.4;
  

    }

  }
  
`;

const CloudContainer = styled.div`
  background-image: url(${teamcloud});
  width: 110vw;
  height: 170px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  margin-bottom: 16px;
  @media (max-width: 370px) {

  background-size: 350px 138px;
  }
  .MuiTypography-h2 {
      font-size: 32px;
    font-weight: bold;
    text-align: center;
 
  }

  @media (max-width: 390px) {
    width: 300px;
  }
  @media (min-width: 692px) {
    background-size: 100% 100%;
    height: 400px;
    .MuiTypography-h2 {
    font-size: 48px;
    font-weight: bold;
    text-align: center;
  
  }

  }


`;

const Raindrop = styled.div`
  background-image: url(${raindrop});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  padding: 47px;
  margin: 8px auto;
  /* width: 500px; */
  background-size: 100% 100%;
  @media (min-width: 692px) {
    padding: 20px;
    padding-left: 40px;
    padding-top: 30px;
  }
  

`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin-top: 60px;
  /* margin-bottom: 12px; */
  /* margin-left: 20px; */
  img {
    width: 100%;
  }
`;

const Label = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100;
  background-color: white;
  opacity: 0.93;

  .name {
    font-weight: 600;
    width: 100%;
  }
  .role {
    font-size: 14px;
    color: #478529;
    width: 100%;
  }
  .location {
    font-size: 12px;
    color: #484848;
    width: 100%;
  }

  @media (min-width: 692px) {

    height: 70px;
    text-align: center;

    
  }
`;

const LabelWrapper = styled.div`
  height: 126px;
  display: flex;
  align-items: flex-end;
  
  @media (min-width: 692px) {
    margin-top: -110px;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 110px;
    width: 205px;
    justify-content: center;
  }


  
`;

const ContactWrapper = styled.div`
margin-top: 200px;
z-index: 1;
a {
    text-decoration: none;
  }
`

const Github = styled.div`

  border: 1px solid #979797;
  background-color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-left: -280px;
  background-size: 50% 50%;
  background-position: center;
  display:flex;
  align-items: center;
  justify-content: center;

  color: #969696;
  @media (min-width: 692px) {
    margin-top: -60px;
  }
  i {
    font-size: 36px;
  }
  `;

const Linkedin = styled.div`
  border: 1px solid #979797;
  background-color: white;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin-left: -260px;
  margin-top: 8px;
  display:flex;
  align-items: center;
  justify-content: center;

  color: #969696;
  @media (min-width: 692px) {
    margin-top: 10px;
    margin-left: -270px;
  }
  i {
    font-size: 36px;
  }
`;

const Twitter = styled.div`
  border: 1px solid #979797;
  background-color: white;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin-left: -220px;
  margin-top: 4px;
  display:flex;
  align-items: center;
  justify-content: center;

  color: #969696;
  @media (min-width: 692px) {
    margin-top: 72px;
    margin-left: -240px;
  }
  i {
    font-size: 36px;
  }

`;
const Portfolio = styled.div`
  border: 1px solid #979797;
  background-color: white;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin-left: -260px;
`;

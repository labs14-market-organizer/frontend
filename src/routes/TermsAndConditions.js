import React, { Component } from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Typography } from "@material-ui/core";
import teamcloud from "../assets/teamcloud.svg"

class TermsAndConditions extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "TERMS" };
  }

  render() {
    return (
      <>
        <Navbar />
        <StyledDiv>
          <CloudContainer>
            <Typography variant="h2">Terms & Conditions</Typography>
          </CloudContainer>
          <div className="wrapper">
            <Typography className="bold1" variant="body1">
            Welcome to Cloud Stands
            </Typography>
            <Typography className="paragraph" variant="body1">
            These terms and conditions outline the rules and regulations for the use of Cloud Stands's Website.
            </Typography>
            <Typography className="paragraph" variant="body1">
            Cloud Stands is located at:<br />
            921 Crescent Ct. San Ramon, CA 94582<br />
            United States<br />
            (800) 883-1943
            </Typography>
            <Typography className="paragraph" variant="body1">
            By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Cloud Stands's website if you do not accept all of the terms and conditions stated on this page.
            </Typography>
            <Typography className="paragraph" variant="body1">
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services/products, in accordance with and subject to, prevailing law of . Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </Typography>
            <Typography className="bold2" variant="body1">
            Cookies
            </Typography>
            <Typography className="paragraph" variant="body1">
            We employ the use of cookies. By using Cloud Stands's website you consent to the use of cookies in accordance with Cloud Stands's privacy policy.Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.
            </Typography>
            <Typography className="bold2" variant="body1">
            License
            </Typography>
            <Typography className="paragraph" variant="body1">
            Unless otherwise stated, Cloud Stands and/or it's licensors own the intellectual property rights for all material on Cloud Stands. All intellectual property rights are reserved. You may view and/or print pages from https://www.cloudstands.com/ for your own personal use subject to restrictions set in these terms and conditions.
            </Typography>
            <Typography className="paragraph" variant="body1">
            You must not: Republish material from https://www.cloudstands.com/; Sell, rent or sub-license material from https://www.cloudstands.com/; Reproduce, duplicate or copy material from https://www.cloudstands.com/; Redistribute content from Cloud Stands (unless content is specifically made for redistribution).
            </Typography>
            <Typography className="bold2" variant="body1">
            Hyperlinking to our Content
            </Typography>
            <Typography className="paragraph" variant="body1">
            The following organizations may link to our Web site without prior written approval: Government agencies; Search engines; News organizations; Online directory distributors when they list us in the directory may link to our Web site in the same manner as they hyperlink to the Web sites of other listed businesses; and Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
            </Typography>
            <Typography className="paragraph" variant="body1">
            These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.
            </Typography>
            <Typography className="paragraph" variant="body1">
            We may consider and approve in our sole discretion other link requests from the following types of organizations: commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile Association, AARP and Consumers Union; dot.com community sites; associations or other groups representing charities, including charity giving sites, online directory distributors; internet portals; accounting, law and consulting firms whose primary clients are businesses; and educational institutions and trade associations.
            </Typography>
            <Typography className="paragraph" variant="body1">
            We will approve link requests from these organizations if we determine that: (a) the link would not reflect unfavorably on us or our accredited businesses (for example, trade associations or other organizations representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed to link); (b)the organization does not have an unsatisfactory record with us; (c) the benefit to us from the visibility associated with the hyperlink outweighs the absence of ; and (d) where the link is in the context of general resource information or is otherwise consistent with editorial content in a newsletter or similar product furthering the mission of the organization.
            </Typography>
            <Typography className="paragraph" variant="body1">
            These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and it products or services; and (c) fits within the context of the linking party's site.
            </Typography>
            <Typography className="paragraph" variant="body1">
            If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an e-mail to cloudstandsapp@gmail.com.
            </Typography>
            <Typography className="paragraph" variant="body1">
            Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.
            </Typography>
            <Typography className="paragraph" variant="body1">
            Approved organizations may hyperlink to our Web site as follows: By use of our corporate name; or By use of the uniform resource locator (Web address) being linked to; or By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party's site.
            </Typography>
            <Typography className="paragraph" variant="body1">
            No use of Cloud Stands's logo or other artwork will be allowed for linking absent a trademark license agreement.
            </Typography>
            <Typography className="bold2" variant="body1">
            Iframes
            </Typography>
            <Typography className="paragraph" variant="body1">
            Without prior approval and express written permission, you may not create frames around our Web pages or use other techniques that alter in any way the visual presentation or appearance of our Web site. 
            </Typography>
            <Typography className="bold2" variant="body1">
            Reservation of Rights
            </Typography>
            <Typography className="paragraph" variant="body1">
            We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.
            </Typography>
            <Typography className="bold2" variant="body1">
            Removal of links from our website
            </Typography>
            <Typography className="paragraph" variant="body1">
            If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.
            </Typography>
            <Typography className="paragraph" variant="body1">
            Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.
            </Typography>
            <Typography className="bold2" variant="body1">
            Content Liability
            </Typography>
            <Typography className="paragraph" variant="body1">
            We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </Typography>
            <Typography className="bold2" variant="body1">
            Disclaimer
            </Typography>
            <Typography className="paragraph" variant="body1">
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will: limit or exclude our or your liability for death or personal injury resulting from negligence; limit or exclude our or your liability for fraud or fraudulent misrepresentation; limit any of our or your liabilities in any way that is not permitted under applicable law; or exclude any of our or your liabilities that may not be excluded under applicable law.
            </Typography>
            <Typography className="paragraph" variant="body1">
            The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.
            </Typography>
            <Typography className="paragraph" variant="body1">
            To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
            </Typography>
            <Typography className="bold2" variant="body1">
            Credit & Contact Information
            </Typography>
            <Typography className="paragraph" variant="body1">
            This Terms and conditions page was created at termsandconditionstemplate.com generator. If you have any queries regarding any of our terms, please contact us.
            </Typography>
          </div>
        </StyledDiv>
      <Footer/>
      </>
    );
  }
}

export default TermsAndConditions;

const StyledDiv = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 116px;
  flex-direction: column;
  align-items: center;
  text-align: left;
  max-width: 623px;

  .wrapper {
    width: 100%;
  }

  .paragraph {
    font-family: "Roboto";
    // margin-top: 6px;
    margin-bottom: 20px;
    padding: 0px 34px;
    color: #484848;
  }

  .bold1 {
    font-family: "Roboto";
    font-weight: bold;
    margin-top: 6px;
    margin-bottom: 20px;
    padding: 0px 34px;
    color: #484848;
  }

  .bold2 {
    font-family: "Roboto";
    font-weight: bold;
    margin-top: 6px;
    padding: 0px 34px;
    color: #484848;
  }
`;

const CloudContainer = styled.div`
background-image: url(${teamcloud});
width: 100%;
height: 170px;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
background-position: center;
 
@media (max-width: 390px) {
  max-width: 100vw;
}

.MuiTypography-h2 {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  padding: 0px 34px;
}
`;

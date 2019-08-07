import React, { Component } from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Typography } from "@material-ui/core";
import teamcloud from "../assets/teamcloud.svg"

class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "PRIVACY" };
  }

  render() {
    return (
      <>
        <Navbar />
        <StyledDiv>
          <CloudContainer>
            <Typography variant="h2">Privacy Policy</Typography>
          </CloudContainer>
          <div className="wrapper">
            <Typography className="bold1" variant="body1">
              Welcome to our Privacy Policy
            </Typography>
            <Typography className="paragraph" variant="body1">
            Your privacy is critically important to us.
            </Typography>
            <Typography className="paragraph" variant="body1">
            Cloud Stands is located at:<br />
            921 Crescent Ct. San Ramon, CA 94582<br />
            United States<br />
            (800) 883-1943
            </Typography>
            <Typography className="paragraph" variant="body1">
            It is Cloud Stands's policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to https://www.cloudstands.com/ (hereinafter, "us", "we", or "https://www.cloudstands.com/"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.
            </Typography>
            <Typography className="paragraph" variant="body1">
            This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.
            </Typography>
            <Typography className="bold2" variant="body1">
            Website Visitors
            </Typography>
            <Typography className="paragraph" variant="body1">
            Like most website operators, Cloud Stands collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Cloud Stands's purpose in collecting non-personally identifying information is to better understand how Cloud Stands's visitors use its website. From time to time, Cloud Stands may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.
            </Typography>
            <Typography className="paragraph" variant="body1">
            Cloud Stands also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on https://www.cloudstands.com/ blog posts. Cloud Stands only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.
            </Typography>
            <Typography className="bold2" variant="body1">
            Gathering of Personally-Identifying Information
            </Typography>
            <Typography className="paragraph" variant="body1">
            Certain visitors to Cloud Stands's websites choose to interact with Cloud Stands in ways that require Cloud Stands to gather personally-identifying information. The amount and type of information that Cloud Stands gathers depends on the nature of the interaction. For example, we ask visitors who sign up for a blog at https://www.cloudstands.com/ to provide a username and email address.
            </Typography>
            <Typography className="bold2" variant="body1">
            Security
            </Typography>
            <Typography className="paragraph" variant="body1">
            The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
            </Typography>
            <Typography className="bold2" variant="body1">
            Advertisements
            </Typography>
            <Typography className="paragraph" variant="body1">
            Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Cloud Stands and does not cover the use of cookies by any advertisers.
            </Typography>
            <Typography className="bold2" variant="body1">
            Links To External Sites
            </Typography>
            <Typography className="paragraph" variant="body1">
            Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.
            </Typography>
            <Typography className="paragraph" variant="body1">
            We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.
            </Typography>
            <Typography className="bold2" variant="body1">
            Protection of Certain Personally-Identifying Information
            </Typography>
            <Typography className="paragraph" variant="body1">
            Cloud Stands discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on Cloud Stands's behalf or to provide services available at Cloud Stands's website, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using Cloud Stands's website, you consent to the transfer of such information to them. Cloud Stands will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, Cloud Stands discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when Cloud Stands believes in good faith that disclosure is reasonably necessary to protect the property or rights of Cloud Stands, third parties or the public at large.
            </Typography>
            <Typography className="paragraph" variant="body1">
            If you are a registered user of https://www.cloudstands.com/ and have supplied your email address, Cloud Stands may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what's going on with Cloud Stands and our products. We primarily use our blog to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. Cloud Stands takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.
            </Typography>
            <Typography className="bold2" variant="body1">
            Aggregated Statistics
            </Typography>
            <Typography className="paragraph" variant="body1">
            Cloud Stands may collect statistics about the behavior of visitors to its website. Cloud Stands may display this information publicly or provide it to others. However, Cloud Stands does not disclose your personally-identifying information.
            </Typography>
            <Typography className="bold2" variant="body1">
            Cookies
            </Typography>
            <Typography className="paragraph" variant="body1">
            To enrich and perfect your online experience, Cloud Stands uses "Cookies", similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.
            </Typography>
            <Typography className="paragraph" variant="body1">
            A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. Cloud Stands uses cookies to help Cloud Stands identify and track visitors, their usage of https://www.cloudstands.com/, and their website access preferences. Cloud Stands visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Cloud Stands's websites, with the drawback that certain features of Cloud Stands's websites may not function properly without the aid of cookies.
            </Typography>
            <Typography className="paragraph" variant="body1">
            By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Cloud Stands's use of cookies.
            </Typography>
            <Typography className="bold2" variant="body1">
            E-commerce
            </Typography>
            <Typography className="paragraph" variant="body1">
            Those who engage in transactions with Cloud Stands – by purchasing Cloud Stands's services or products, are asked to provide additional information, including as necessary the personal and financial information required to process those transactions. In each case, Cloud Stands collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor's interaction with Cloud Stands. Cloud Stands does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.
            </Typography>
            <Typography className="bold2" variant="body1">
            Privacy Policy Changes
            </Typography>
            <Typography className="paragraph" variant="body1">
            Although most changes are likely to be minor, Cloud Stands may change its Privacy Policy from time to time, and in Cloud Stands's sole discretion. Cloud Stands encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.
            </Typography>
            <Typography className="bold2" variant="body1">
            Credit & Contact Information
            </Typography>
            <Typography className="paragraph" variant="body1">
            This privacy policy was created at https://termsandconditionstemplate.com/privacy-policy-generator/. If you have any questions about this Privacy Policy, please contact us via email or phone.
            </Typography>
          </div>
        </StyledDiv>
      <Footer/>
      </>
    );
  }
}

export default PrivacyPolicy;

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
      width: 300px;
    }

.MuiTypography-h2 {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}
`

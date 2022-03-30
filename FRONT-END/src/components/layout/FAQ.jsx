import { Accordion } from "react-bootstrap";
import Footer from "./footer";
import MainNavbar from "./Mainnavbar";
import Faqpage from "../Images/Faqpage.png";

function FAQ() {
  return (
    <div>
      <MainNavbar />
      <div>
        <img
          src={Faqpage}
          style={{ objectFit: "cover" }}
          width="100%"
          height="300px"
        />
      </div>
      <div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What are some frequently asked questions for new Learning Pie
              users?
            </Accordion.Header>
            <Accordion.Body>
              Figured this out: - You can follow people, questions, and topics,
              but they're listed in different places. - The people you follow
              and who follow you are listed under your picture on your own
              profile page, which can be found by clicking on your name in the
              upper right. The topics you follow are listed there too. -
              Importing from Twitter automatically adds followers.
              (Unfortunately, it can't be used for login.)
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              My application was unsuccessful. What could be the reason?
            </Accordion.Header>
            <Accordion.Body>
              Based on our expert hiring policy, we do not disclose reasons for
              an unsuccessful candidature. Becoming a Learning Pie expert is a
              privilege and all application are reviewed on their merits.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              I successfully completed all the required steps. Is there still
              something I am expected to do?
            </Accordion.Header>
            <Accordion.Body>
              Based on our expert hiring policy, we do not disclose reasons for
              an unsuccessful candidature. Becoming a Learning Pie expert is a
              privilege and all application are reviewed on their merits.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              My application was unsuccessful. What could be the reason?
            </Accordion.Header>
            <Accordion.Body>
              In case you have successfully completed all steps till OTP
              verification, please allow our team 10 working days to verify your
              candidature and get back. Please continue to check your inbox for
              an email notification.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Questions related to the Russia-Ukraine war.
            </Accordion.Header>
            <Accordion.Body>Search on google bro</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;

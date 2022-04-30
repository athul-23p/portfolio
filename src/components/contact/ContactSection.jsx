import { Col, Row } from "antd";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";
import ContactInfo from "./ContactInfo";
const ContactSectionWrapper = styled.div`
   & {
     margin: 10px;
   }
  .content {
    width: 95%;
    margin: auto;
    border-radius: 7px;
    transition: 0.7s;
  }
  
  .content:hover{
    box-shadow: 5px 5px 18px 1px darkorchid;
    position: relative;
    top:-5px;
    left: -5px;

  }

  .left,
  .right {
    border-radius: 7px;
    padding: 20px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    
    background: rgb(99, 90, 185);
    h3 {
      color: white;
    }
  }
`;

function ContactSection() {
  return (
    <ContactSectionWrapper>
      <Row>
        <SectionHeader heading="Contact" />
      </Row>
      <div className="content">
        <Row>
          <Col span={12} className="left">
            <h3>Get in touch</h3>
          </Col>
          <Col span={12} className="right">
            <ContactInfo />
          </Col>
        </Row>
      </div>
    </ContactSectionWrapper>
  );
}

export default ContactSection;

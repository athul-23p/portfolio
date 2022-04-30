import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Row, Button } from "antd";
import styled from "styled-components";

const ContactInfoWrapper = styled.div``;
function ContactInfo() {
  return (
    <ContactInfoWrapper>
      <div>
        <Row>
          <Button type="link" href="mailto:athul238p@gmail.com">
            <MailOutlined />
            <span id="mailID">athul238p@gmail.com</span>
          </Button>
        </Row>
        <Row>
          <Button type="link" href="https://github.com/athul-23p">
            <GithubOutlined />
            <span>Github</span>
          </Button>
        </Row>
        <Row>
          <Button type="link" href="https://www.linkedin.com/in/athul-ponthen/">
            <LinkedinOutlined />
            <span>Linkedin</span>
          </Button>
        </Row>
        <Row>
          <Button type="link">
            <PhoneOutlined style={{ color: "blue" }} />
            <span>+918848154291</span>
          </Button>
        </Row>
      </div>
    </ContactInfoWrapper>
  );
}

export default ContactInfo;

import { Col, Image, Row } from "antd";
import styled from "styled-components";
import programmer from "../../assets/images/programmer.jpg";
const AboutWrapper = styled.div`
  img {
    border-radius: 7px;
  }
  .about-me {
    display: flex;
    align-items: center;
  }
`;

function About() {
  return (
    <AboutWrapper>
      <Row>
        <Col span={12}>
          <Image src={programmer} preview={false} height="300px" /> <br />
          <a href="https://www.freepik.com/vectors/backend">
            Backend vector created by storyset - www.freepik.com
          </a>
        </Col>
        <Col span={12} className="about-me">
          <p>
            I'm Athul P, an aspiring full-stack web developer, specializing in
            MERN stack. I like coding & reading stories and for me, a
            well-written code is similar to a well-written story, where
            everything connects together to form a perfect whole. That's what I
            want to achieve. write story-like code.
          </p>
        </Col>
      </Row>
    </AboutWrapper>
  );
}

export default About;

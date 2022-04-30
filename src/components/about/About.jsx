import { Col, Image, Row } from 'antd';
import styled from 'styled-components';
import programmer from '../../assets/images/programmer.jpg';
const AboutWrapper = styled.div`
 img{
     border-radius: 7px;
 }
 .about-me{
     display: flex;
     align-items: center;
 }
`;


function About (){

    return (
      <AboutWrapper>
        <Row>
          <Col span={12}>
            <Image src={programmer} preview={false} height="300px"/> <br />
            <a href="https://www.vecteezy.com/free-vector/background">
              Background Vectors by Vecteezy
            </a>
          </Col>
          <Col span={12} className="about-me">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora animi excepturi beatae corporis vitae, dignissimos ad assumenda similique! Debitis, repudiandae repellat. Vero quasi officiis similique provident doloribus, rem dolores?</p>
          </Col>
        </Row>
      </AboutWrapper>
    );
}

export default About;
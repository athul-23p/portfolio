import { Button, Col, Image, Row } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  width: 280px;
  /* text-align: center; */
  box-sizing: border-box;
  border: 4px solid darkorchid;
  border-radius: 12px;
  transition: 1s;
  padding: 2px;
  
  img{
    border-radius: 7px;
  }
`;


function Project({ project }) {
  return (
    <ProjectWrapper>
      <Row justify="center">
        <Col span={22}>
          <Image src={project.image} />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={20}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={6} >
          <Button type="link" href={project.live}>
            Live Demo
          </Button>
        </Col>
        <Col span={3} offset={2}>
          <Button type="link" href={project.github}>
            <GithubOutlined />
          </Button>
        </Col>
      </Row>
    </ProjectWrapper>
  );
}

export default Project;
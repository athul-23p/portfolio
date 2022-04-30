import { Button, Col, Image, Row } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  width: 280px;
  /* text-align: center; */
  box-sizing: border-box;
  /* border: 4px solid darkorchid; */
  border-radius: 12px;
  transition: 0.7s;
  padding: 2px;

  img {
    border-radius: 7px;
  }
  &:hover {
    box-shadow: 5px 5px 18px 1px #9932cc76;
    position: relative;
    top: -5px;
    left: -5px;
  }
`;


function Project({ project }) {
  return (
    <ProjectWrapper>
      <Row justify="center">
        <Col
          span={24}
          style={{
            padding: "3px",
          }}
        >
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
        <Col span={6}>
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

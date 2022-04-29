import Project from "./Project";
import styled from "styled-components";
import revvImg from "../../assets/images/revv-landing-page.png";
import naukriImg from "../../assets/images/naukri-landing-page.png";
import { Col, Row } from "antd";
const ProjectSectionWrapper = styled.div``;

function ProjectSection() {
  const projects = [
    {
      title: "Naukri.com",
      image: naukriImg,
      github: "https://github.com/satyadav123/Naukriportal",
      live: "https://naukri-clone-f36472.netlify.app",
      description:
        "Nuakri.com is a very famous site for finding job according to your skills and experiences.",
    },
    {
      title: "Revv.co.in",
      image: revvImg,
      github: "https://github.com/satyadav123/revvgroup-frontend",
      live: "https://revv-clone-project.netlify.app",
      description:
        "Revv Cars is an Indian self-drive mobility startup. Car subscription from Revv provides the flexibility of having a car anytime you want, as well as the assurance of a sanitized and virus-free vehicle for your own self-drive. ",
    },
  ];
  return (
    <ProjectSectionWrapper>
      <h2>Projects</h2>
      <div>
        <Row
          gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
          justify="space-evenly"
        >
          {projects.map((project) => (
            <Col>
              {" "}
              <Project project={project} />
            </Col>
          ))}
        </Row>
      </div>
    </ProjectSectionWrapper>
  );
}

export default ProjectSection;

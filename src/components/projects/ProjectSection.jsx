import Project from "./Project";
import styled from "styled-components";
import revvImg from "../../assets/images/revv-landing-page.png";
import naukriImg from "../../assets/images/naukri-landing-page.png";
import { Col, Row } from "antd";
import SectionHeader from "../SectionHeader";
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
        "Revv Cars is an Indian self-drive mobility startup which lets the user to rent cars from major cities across India. ",
    },
  ];
  return (
    <ProjectSectionWrapper>
      <div>
        <Row>
          <SectionHeader heading="Projects" />
        </Row>
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

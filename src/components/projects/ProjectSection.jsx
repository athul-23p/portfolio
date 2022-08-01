import Project from "./Project";
import styled from "styled-components";
import revvImg from "../../assets/images/revv-landing-page.png";
import naukriImg from "../../assets/images/naukri-landing-page.png";
import todoImg from "../../assets/images/todo-app.png"
import portfolioImg from "../../assets/images/portfolio.png";
import bathandbodyworksImg from "../../assets/images/bath-and-body-works.png"

import { Col, Row } from "antd";
import SectionHeader from "../SectionHeader";
const ProjectSectionWrapper = styled.div`
  min-height: 60vh;
`;

function ProjectSection() {
  const projects = [
    {
      title: "Bath and Body Works",
      image: bathandbodyworksImg,
      github: "https://github.com/athul-23p/bath_and_body_works",
      live: "https://bathandbodyworksc3.netlify.app/",
      description:
        "Bath and Body Works is an american company which specializes in selling products such as soaps, lotions , candles etc.",
      stack: ["React", "JavaScript", "Chakra-UI", "Express", "MongoDB"],
    },
    {
      title: "Naukri.com",
      image: naukriImg,
      github: "https://github.com/satyadav123/Naukriportal",
      live: "https://naukri-clone-f36472.netlify.app",
      description:
        "Nuakri.com is a very famous site for finding job according to your skills and experiences.",
      stack: ["HTML", "JavaScript", "CSS"],
    },
    {
      title: "Revv.co.in",
      image: revvImg,
      github: "https://github.com/satyadav123/revvgroup-frontend",
      live: "https://revv-clone-project.netlify.app",
      description:
        "Revv Cars is an Indian self-drive mobility startup which lets the user to rent cars from major cities across India. ",
      stack: ["HTML", "JavaScript", "NodeJS", "CSS"],
    },
    {
      title: "Todo App",
      image: todoImg,
      github: "https://github.com/athul-23p/react-todos",
      live: "https://react-todos-ten.vercel.app/",
      description:
        " A simple todo app created using React. Allows the user to add,toggle & delete todo",
      stack: ["React", "JavaScript", "HTML"],
    },
    {
      title: "Portfolio",
      image: portfolioImg,
      github: "https://github.com/athul-23p/portfolio",
      live: "https://athul-p.vercel.app/",
      description:
        " A portfolio created using React, Ant Design, Styled-components. The portfolio has sections for home, about, skills,project & contact info",
      stack: ["React", "JavaScript", "Ant Design"],
    },
  ];
  return (
    <ProjectSectionWrapper>
      <div id="project-section">
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

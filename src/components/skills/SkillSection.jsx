/**
 *
 *
 */
import { Col, Row } from "antd";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";
import Skill from "./Skill";

const SkillSectionWrapper = styled.div`
  /* border: 2px solid purple; */
  @import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");
  h3 {
    font-weight: 500;
    font-size: 18px;
    font-family: "Acme", sans-serif;
    padding: 5px;
  }
`;

function SkillSection() {
  const frontend = [
    {
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
      name: "HTML",
    },
    {
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
      name: "JavaScript",
    },
    { icon: "https://img.icons8.com/color/48/000000/css3.png", name: "CSS" },
    {
      icon: "https://img.icons8.com/office/80/000000/react.png",
      name: "React",
    },
    { icon: "https://img.icons8.com/color/48/000000/redux.png", name: "Redux" },
  ];

  const backend = [
    {
      icon: "https://img.icons8.com/fluency/48/000000/node-js.png",
      name: "Node Js",
    },
    {
      icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
      name: "Express JS",
    },
    {
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png",
      name: "MongoDB",
    },
  ];
  return (
    <SkillSectionWrapper>
      <div>
        <Row>
          <SectionHeader heading="Skills" />
        </Row>
        <Row>
          <h3>Frontend</h3>
        </Row>

        <Row
          gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
          justify="space-evenly"
        >
          {frontend.map((skill) => (
            <Skill skill={skill} />
          ))}
        </Row>
      </div>
      <div>
        <Row>
          <h3>Backend</h3>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-evenly">
          {backend.map((skill) => (
            <Skill skill={skill} />
          ))}
        </Row>
      </div>
    </SkillSectionWrapper>
  );
}

export default SkillSection;

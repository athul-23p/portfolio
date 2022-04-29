import { Card, Image } from 'antd';
import styled from 'styled-components';

const SkillWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Patrick+Hand&display=swap");

  .skill-card {
    border: 5px solid darkorchid;
    width: 150px;
    height: 180px;
    text-align: center;
    box-sizing: border-box;
    padding-top: 30px;
    border-radius: 12px;
    transition: 1s;
    p {
      margin-top: 5px;
      font-weight: 500;
      font-family: "Patrick Hand", cursive;
    }
    img {
      min-height: 30px;
    }
    &:hover {
      box-shadow: 5px 5px 18px 1px #9932cc76;
      position: relative;
      top: -5px;
      left: -5px;
    }
  }
`;

function Skill({skill}){
    return (
      <SkillWrapper>
        <Card
          hoverable
          className="skill-card"
        >
        <Image src={skill.icon} preview={false} width="48px"/>
         <p>{skill.name}</p>
        </Card>
      </SkillWrapper>
    );
}


export default Skill;
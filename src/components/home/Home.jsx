import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import styled from "styled-components";
import profile from "../../assets/images/profile.png";
const HomeWrapper = styled.div`
  background: linear-gradient(rgba(12, 81, 109, 0.774), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1658696971350-cd59d6b18f6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    color: white;
    font-size: 80px;
  }
  p {
    font-size: 48px;
  }
  #profile-pic {
    width: 100%;
    border-radius: 50%;
    max-width: 200px;
  }
  .resume-btn-div {
    display: flex;
    justify-content: center;
  }
  .resume-btn {
    background-color: #2048ce;
    color: white;
  }

  .resume-btn:hover {
    background-color: #4465d1;
  }

  @media (max-width: 767.98px) {
    flex-direction: column-reverse;
    h1 {
      font-size: 42px;
      text-align: center;
    }

    p {
      font-size: 28px;
      text-align: center;
    }
  }
`;

function Home() {
  return (
    <HomeWrapper>
      <div>
        <h1>Hi, I'm Athul P</h1>
        <p>A Fullstack Web Developer</p>
        <div className="resume-btn-div">
          <Button
            type="link"
            href="https://drive.google.com/file/d/1RQyKzlBeLq2VCeSWYSDT-vOFBziFQ9Hm/view?usp=share_link"
            target={'_blank'}
            className="resume-btn"
          >
            Resume
          </Button>
          <Button type="link" href="https://github.com/athul-23p">
            <GithubOutlined />
            <span>Github</span>
          </Button>
          <Button type="link" href="https://www.linkedin.com/in/athul-ponthen/">
            <LinkedinOutlined />
            <span>Linkedin</span>
          </Button>
        </div>
      </div>
      <div id="pic-container">
        <img id="profile-pic" src={profile} alt="" />
      </div>
      <div></div>
    </HomeWrapper>
  );
}

export default Home;

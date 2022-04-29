import { Col, Row } from "antd";
import styled from "styled-components";
import profile from "../../assets/images/profile.png";
const HomeWrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1650793039336-808955e86912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
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
        </div>
        <div id='pic-container'>
          <img id="profile-pic" src={profile} alt="" />
        </div>
      
    </HomeWrapper>
  );
}

export default Home;

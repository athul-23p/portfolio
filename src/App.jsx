import { UpOutlined } from "@ant-design/icons";
import { BackTop, Button } from "antd";
import "./App.css";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import HomeSection from "./components/home/HomeSection";
import NavBar from "./components/Navbar";
import ProjectSection from "./components/projects/ProjectSection";
import SkillSection from "./components/skills/SkillSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="content">
      <HomeSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection id="project-section" />
        <ContactSection />
        <BackTop>
          <Button shape="round" style={{ backgroundColor: "#2048ce" ,color:"white"}}>
            <UpOutlined />
          </Button>
        </BackTop>
      </div>
    </div>
  );
}

export default App;

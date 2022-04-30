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
        <HomeSection id="home-section" />
      <div id="content">
        <AboutSection id="about-section" />
        <SkillSection id="skill-section" />
        <ProjectSection id="project-section" />
        <ContactSection id="contact-section" />
      </div>
    </div>
  );
}

export default App;

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
        <HomeSection />
      <div id="content">
        <AboutSection />
        <SkillSection />
        <ProjectSection id="project-section" />
        <ContactSection  />
      </div>
    </div>
  );
}

export default App;

import styled from "styled-components";
import Home from "./Home";

const HomeSectionWrapper = styled.div``;

function HomeSection() {
  return (
    <HomeSectionWrapper>
      <di id="home-section">
        <Home />
      </di>
    </HomeSectionWrapper>
  );
}

export default HomeSection;

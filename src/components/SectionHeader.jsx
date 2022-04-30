import styled from "styled-components";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");
  h2 {
    padding: 5px;
    font-weight: 500;
    font-size: 28px;
    font-family: "Acme", sans-serif;
    background: rgb(99, 90, 185);
    /* background: linear-gradient(
      18deg,
      rgba(63, 165, 251, 1) 0%,
      rgba(207, 76, 142, 1) 9%,
      rgba(50, 10, 133, 1) 100%
    ); */
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    margin-top: 50px;
  }
`;

function SectionHeader({heading}){
    
    return(<Wrapper>
        <h2>{heading}</h2>
    </Wrapper>)
}

export default SectionHeader;
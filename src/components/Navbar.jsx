import { Col, Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import "./Navbar.css";

function NavBar({refs,handleNav}) {
  return (
    <Header
      style={{
        backgroundColor: "white",
        position: "sticky",
        top: "0px",
        zIndex: "10",
      }}
    >
      <Row>
        <Col span={3}>
          <h2 id="header-name"> &lt;Athul /&gt;</h2>
        </Col>

        <Col offset={5} span={2}>
          <h3>Home</h3>
          {/* <a href="#home-section">Home</a> */}
        </Col>
        <Col span={2}>
          <h3>About</h3>
        </Col>
        <Col span={2}>
          <h3>Skills</h3>
        </Col>
        <Col span={3}>
          <h3>Projects</h3>
        </Col>
        <Col span={2}>
          <h3>Contact</h3>
        </Col>
      </Row>
    </Header>
  );
}

export default NavBar;

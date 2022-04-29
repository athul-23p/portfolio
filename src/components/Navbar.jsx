import { Col, Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import "./Navbar.css";

function NavBar() {
  return (
    // <div id="navbar-container">
    //   <div id="nav-logo"><p>placeholder</p></div>
    //   <div id="nav-links">
    //     <div>About</div>
    //     <div>Skills</div>
    //     <div>Projects</div>
    //     <div>Contact me</div>
    //   </div>
    // </div>
    <Header style={{ backgroundColor: "white",position:"sticky",top:"0px",zIndex:"10" }}>
      <Row>
        <Col span={3}>
          <h2 id='header-name'> &lt;Athul /&gt;</h2>
        </Col>
        <Col offset={6} span={2}>
          <h3>Home</h3>
        </Col>
        <Col span={2}>
          <h3>About</h3>
        </Col>
        <Col span={2}>
          <h3>Skills</h3>
        </Col>
        <Col span={2}>
          <h3>Projects</h3>
        </Col>
        <Col span={2}>
          <h3>Contact</h3>
        </Col>
        {/* <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={new Array(5).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      /> */}
      </Row>
    </Header>
  );
}

export default NavBar;

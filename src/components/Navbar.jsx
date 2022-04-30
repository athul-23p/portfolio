import { Col, Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import "./Navbar.css";
import { Anchor } from "antd";
const { Link } = Anchor;
function NavBar({ refs, handleNav }) {
  return (
    <Header
      style={{
        backgroundColor: "white",
        position: "sticky",
        top: "0px",
        zIndex: "10",
      }}
    >
      <div id="header">
        <div>
          <h2 id="header-name"> &lt;Athul /&gt;</h2>
        </div>

        <Anchor affix={false}>
          <Row>
            <Col>
              <Link href="#home-section" title="Home" />
            </Col>
            <Col>
              <Link href="#about-section" title="About" />
            </Col>
            <Col>
              <Link href="#skill-section" title="Skills" />
            </Col>
            <Col>
              <Link href="#project-section" title="Projects" />
            </Col>
            <Col>
            <Link href="#contact-section" title="Contact"/></Col>
          </Row>
        </Anchor>
      </div>
    </Header>
  );
}

export default NavBar;

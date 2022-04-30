import { Col, Dropdown, Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import "./Navbar.css";
import { Anchor } from "antd";
import { DownOutlined } from "@ant-design/icons";
const { Link } = Anchor;
function NavBar({ refs, handleNav }) {
const menu = (
  <Menu
    items={[
      {
        label: (
          <a rel="noopener noreferrer" href="#home-section">
            Home
          </a>
        ),
      },
      {
        label: (
          <a rel="noopener noreferrer" href="#about-section">
            About
          </a>
        ),
      },
      {
        label: (
          <a rel="noopener noreferrer" href="#skill-section">
            Skills
          </a>
        ),
      },
      {
        label: (
          <a rel="noopener noreferrer" href="#project-section">
            Projects
          </a>
        ),
      },
      {
        label: (
          <a rel="noopener noreferrer" href="#contact-section">
            Contact
                      </a>
        ),
      },
    ]}
  />
);
  


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

        <Anchor affix={false} offsetTop={50} className="anchor-links">
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
              <Link href="#contact-section" title="Contact" />
            </Col>
          </Row>
        </Anchor>
        <Dropdown overlay={menu} className="dropdown-menu">
              <a onClick={(e) => e.preventDefault()}>
                <DownOutlined />
              </a>
        </Dropdown>
      </div>
    </Header>
  );
}

export default NavBar;

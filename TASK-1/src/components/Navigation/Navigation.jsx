import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg" className="p-4">
    <Navbar.Brand as={Link} to="/">
      My Portfolio
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/background">
          Background
        </Nav.Link>
        <Nav.Link as={Link} to="/projects">
          Projects
        </Nav.Link>
        <Nav.Link as={Link} to="/skills">
          Skills
        </Nav.Link>
        <Nav.Link as={Link} to="/experience">
          Experience
        </Nav.Link>
        <Nav.Link as={Link} to="/testimonials">
          Testimonials
        </Nav.Link>
        <Nav.Link as={Link} to="/blog">
          Blog
        </Nav.Link>
        <Nav.Link as={Link} to="/achievements">
          Achievements
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;

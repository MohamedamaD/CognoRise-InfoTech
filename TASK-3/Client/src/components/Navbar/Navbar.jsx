import { useMemo } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { appLinks, authLinks } from "../../constants/links";
import { useLogout } from "../../hooks";

const NavBar = () => {
  const { mutate } = useLogout();
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const linksList = useMemo(
    () => (isLoggedIn ? appLinks : authLinks),
    [isLoggedIn]
  );
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Travel Booking System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            {linksList.map((link, index) => (
              <Nav.Link as={NavLink} key={index} to={link.to}>
                {link.text}
              </Nav.Link>
            ))}
            {isLoggedIn && (
              <Button className="fw-medium" onClick={() => mutate(user)}>
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

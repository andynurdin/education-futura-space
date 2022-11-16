import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navs = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid className="contianer">
        <NavLink to="/" className="navbar-brand">
          <img src="images/logo2.png" alt="" style={{ width: "71.69px", height: "30px" }} />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/onlineLearn" className="nav-link">
              Online Learning
            </NavLink>
            <NavLink to="/offlineLearn" className="nav-link">
              Offline Learning
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </Nav>
          <Nav className="ms-auto">
            <NavLink to="/login">
              <Button variant="warning" className="button">Sign Up</Button>
              <Button variant="warning" className="button">Login</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
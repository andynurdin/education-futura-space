import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo2.png";

const Navs = () => {
  return (
    <Navbar sticky="top" variant="dark" expand="lg" className="navbar">
      <Container fluid>
        <NavLink to="/" className="navbar-brand">
          <img
            src={logo}
            alt=""
            style={{ width: "100px", height: "auto", marginLeft: "50px" }}
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
            <NavLink to="/signUp">
              <button className="button-1">Sign Up</button>
            </NavLink>
            <NavLink to="/login">
              <button className="button-2">Login</button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;

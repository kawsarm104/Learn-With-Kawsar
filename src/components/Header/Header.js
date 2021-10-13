import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = { color: "#fa00e5" };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // bg="dark"
      variant=""
      sticky="top"
      className="p-3 navbar-container "
    >
      <Container fluid className="">
        <Navbar.Brand
          as={Link}
          activeStyle={activeStyle}
          className="nav-container"
          to="/"
        >
          Learn with Kawsar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-container">
            <NavLink
              activeStyle={activeStyle}
              className="nav-container"
              to="/home"
            >
              Home
            </NavLink>

            <NavLink
              activeStyle={activeStyle}
              className="nav-container "
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              className="nav-container"
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              className="nav-container"
              to="/contact"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

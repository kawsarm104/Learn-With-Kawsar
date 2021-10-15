import Button from "@restart/ui/esm/Button";
import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  const activeStyles = { color: "#fa00e5" };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // bg="dark"
      variant="dark"
      sticky="top"
      className="p-3 navbar-container "
    >
      <Container fluid className="">
        <Navbar.Brand
          as={Link}
          activeStyle={activeStyles}
          className="nav-container"
          to="/"
        >
          Learn with Kawsar
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav "
          className="nav-toggler"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-container pe-3">
            <NavLink
              activeStyle={activeStyles}
              className="nav-container"
              to="/home"
            >
              Home
            </NavLink>

            <NavLink
              activeStyle={activeStyles}
              className="nav-container "
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              activeStyle={activeStyles}
              className="nav-container"
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              activeStyle={activeStyles}
              className="nav-container"
              to="/contact"
            >
              Contact
            </NavLink>

            {user.displayName? (
              <div className="">
                <Navbar.Text className="wellcome-text">
                  Wellcome:{user?.displayName}
                </Navbar.Text>
                
                <img
                  src={user.photoURL}
                  className="img-fluid rounded-circle user-image"
                  alt=""
                />
                <Button
                  className="logout-button"
                  onClick={logOut}
                  variant="light"
                >
                  Logout
                </Button>
                
              </div>
            ) : (
              <NavLink
                activeStyle={activeStyles}
                className="nav-container"
                to="/login"
              >
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

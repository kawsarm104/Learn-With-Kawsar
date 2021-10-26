import Button from "@restart/ui/esm/Button";
import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
            
            {user.displayName ? (
              <NavDropdown
                className="me-4 w-25 bg-danger"
                title={
                  <img
                    src={user.photoURL}
                    className="img-fluid rounded-circle user-image"
                    alt=""
                  />
                }
                id="basic-nav-dropdown"
              >
                <div className="">
                  {/* <Navbar.Text className="wellcome-text">
                  Wellcome:{user?.displayName}
                </Navbar.Text> */}
{/* 
                  <img
                    src={user.photoURL}
                    className="img-fluid rounded-circle user-image "
                    alt=""
                  /> */}
                  <NavDropdown.Item
                  className=" bg-warning me-0 pe-0">
                    <Button
                      className="logout-button"
                      onClick={logOut}
                      // variant="light"
                    >
                      Logout
                    </Button>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            ) : (
              <NavLink
                activeStyle={activeStyles}
                className="nav-container"
                to="/login"
              >
                Login
              </NavLink>
            )}
            

            {/* <NavDropdown
              className="pe-3"
              title=""
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

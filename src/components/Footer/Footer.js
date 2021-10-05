import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Container
        fluid
        className="mt-3 g-3  p-4 col-container"
        style={{
          backgroundColor: "#282d32",
          color: "#f0f9ff",
             
        }}
        sticky="bottom"
      >
        <Row>
          <Col sm={12} md={4} className=" ">
            <h3>Cources</h3>{" "}
            <ul>
              <li>Programming Language</li>
              <li>Machine Learning</li>
              <li>Artificial Intelligence </li>{" "}
            </ul>
          </Col>
          <Col sm={12} md={4} className="    ">
            <h3>About</h3>
            <ul>
              <li>Company</li>
              <li>Pricing</li>
            </ul>
          </Col>
          <Col sm={12} md={4} className="   ">
            <h3>Learn with Kawsar</h3>
            <p>
              Hey!! Dont waste more time ..LIfe is short if you want to earn
              something valueable then just enroll on the Course you like
              .Remember Your today's hardwrok will tell you where you will go
              What life you will live
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

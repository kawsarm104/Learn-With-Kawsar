import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container className=" mb-5">
        <Row>
          <Col sm={12} md={4}>
            <h2>
              Hello. Our school has been present for over 20 years. We make the
              most of all our students.
            </h2>
          </Col>
          <Col sm={12} md={4}>
            <p>
              Phasellus enim libero, blandit vel sapien vitae, condimentum
              ultricies magna et. Quisque euismod orci ut. Phasellus enim
              libero, blandit vel sapien vitae, condimentum ultricies magna et.
              Quisque euismod orci ut.
            </p>
          </Col>
          <Col sm={12} md={4}>
            <p>
              Phasellus enim libero, blandit vel sapien vitae, condimentum
              ultricies magna et. Quisque euismod orci ut. Phasellus enim
              libero, blandit vel sapien vitae, condimentum ultricies magna et.
              Quisque euismod orci ut.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;

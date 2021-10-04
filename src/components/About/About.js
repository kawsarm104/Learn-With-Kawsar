import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Teachers from "./Teachers";

const About = () => {
  return (
    <>
      <Container className="mt-3 mb-5 g-3 ">
        <Row>
          <Col sm={12} md={4} className="    p-2 rounded">
            <h2>
              Hello. Our school has been present for over 20 years. We make the
              most of all our students.
            </h2>
          </Col>
          <Col sm={12} md={4} className="    p-2">
            <p>
              Phasellus enim libero, blandit vel sapien vitae, condimentum
              ultricies magna et. Quisque euismod orci ut. Phasellus enim
              libero, blandit vel sapien vitae, condimentum ultricies magna et.
              Quisque euismod orci ut.
            </p>
          </Col>
          <Col sm={12} md={4} className="   p-2">
            <p>
              Phasellus enim libero, blandit vel sapien vitae, condimentum
              ultricies magna et. Quisque euismod orci ut. Phasellus enim
              libero, blandit vel sapien vitae, condimentum ultricies magna et.
              Quisque euismod orci ut.
            </p>
          </Col>
        </Row>
          </Container>
          {/* Teachers component  */}
      <Teachers></Teachers>
      <Container className=" mb-5">
        <Row>
          <Col sm={12} md={6} className="   p-2">
            <h1>
              <span className="text-danger"> 01. </span>Experience
            </h1>
            <p>
              Phasellus enim libero, blandit vel sapien vitae, condimentum
              ultricies magna et. Quisque euismod orci ut et lobortis. Blandit
              vel sapien vitae, condimentum ultricies magna et orci ut et
              lobortis.
            </p>
          </Col>
          <Col sm={12} md={6} className="   p-2">
            <h1>
              <span className="text-danger"> 02. </span>Professionality
            </h1>
            <p>
              Phasellus enim libero, blandit vel sapien vitae, condimentum
              ultricies magna et. Quisque euismod orci ut et lobortis. Blandit
              vel sapien vitae, condimentum ultricies magna et orci ut et
              lobortis.
            </p>
          </Col>
          <Col sm={12} md={6} className="   p-2">
            <h1>
              <span className="text-info"> 02. </span>Guarantee
            </h1>
            <p>
              Phasellus enim libero, blandit vel sapien vitae, condimentum
              ultricies magna et. Quisque euismod orci ut et lobortis. Blandit
              vel sapien vitae, condimentum ultricies magna et orci ut et
              lobortis.
            </p>
          </Col>
          <Col sm={12} md={6} className="   p-2">
            <h1>
              <span className="text-info"> 02. </span>Quality
            </h1>
            <p>
              Phasellus enim libero, blandit vel sapien vitae, condimentum
              ultricies magna et. Quisque euismod orci ut et lobortis. Blandit
              vel sapien vitae, condimentum ultricies magna et orci ut et
              lobortis.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;

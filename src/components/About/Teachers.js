import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import teacherImg1 from "../../images/team-1.jpg";
import teacherImg2 from "../../images/team-2.jpg";
import teacherImg3 from "../../images/team-3.jpg";
const Teachers = () => {
  return (
    <>
      <Container className="mt-3 mb-5 container-fluid ">
        <h1 className="mb-3">Our Teacher </h1>
        <Row>
          <Col sm={12} md={4}>
            <img src={teacherImg1} alt="" className="img-fluid" />
            <h4 className="text-center mb-3">Mandy Jackson</h4>
            <div className="d-flex align-items-end">
              <Button variant="" className="btn btn-outline-info w-100">
                Know More
              </Button>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <img src={teacherImg2} alt="" className="img-fluid" />
            <h4 className="text-center mb-3">Jane Taylor</h4>
            <div className="d-flex align-items-end">
              <Button variant="" className="btn btn-outline-info w-100">
                Know More
              </Button>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <img src={teacherImg3} alt="" className="img-fluid" />
            <h4 className="text-center mb-3">Abbey Brown</h4>
            <div className="d-flex align-items-end">
              <Button variant="" className="btn btn-outline-info w-100">
                Know More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Teachers;

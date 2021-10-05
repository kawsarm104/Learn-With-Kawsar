import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import teacherImg1 from "../../images/team-1.jpg";
import teacherImg2 from "../../images/team-2.jpg";
import teacherImg3 from "../../images/team-3.jpg";
const Teachers = () => {
  return (
    <div className=" ">
      <Container className="mt-3 mb-5 container-fluid ">
        <h1 className="mb-3">Our Teacher </h1>
        <Row>
          <Col sm={12} md={4} className="mt-3">
            <Card className=" shadow h-100 m-auto ">
              <Card.Img variant="top" src={teacherImg1} className="img-fluid" />
              <Card.Body className="">
                <Card.Title>Mandy Jackson</Card.Title>
              </Card.Body>

              <Card.Footer className="d-flex justify-content-end card-footer">
                <Button
                  variant=""
                  className="btn btn-outline-info text-dark button-style"
                >
                  View Details
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} md={4} className="mt-3">
            <Card className=" shadow h-100 m-auto ">
              <Card.Img variant="top" src={teacherImg2} className="img-fluid" />
              <Card.Body className="">
                <Card.Title>Jane Taylor</Card.Title>
              </Card.Body>

              <Card.Footer className="d-flex justify-content-end card-footer">
                <Button
                  variant=""
                  className="btn btn-outline-info text-dark button-style"
                >
                  View Details
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} md={4} className="mt-3">
            <Card className=" shadow h-100 m-auto ">
              <Card.Img variant="top" src={teacherImg3} className="img-fluid" />
              <Card.Body className="">
                <Card.Title>Abbey Brown</Card.Title>
              </Card.Body>

              <Card.Footer className="d-flex justify-content-end card-footer">
                <Button
                  variant=""
                  className="btn btn-outline-info text-dark button-style"
                >
                  View Details
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Teachers;

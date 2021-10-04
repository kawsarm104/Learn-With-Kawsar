import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import "./RegisterNow.css";

const RegisterNow = () => {
  return (
    <div className="d-flex justify-content-around   container-fluid  ">
      <Row className="bg-info ">
        <Col sm={12} md={3}>
          <div className="next-course bg-danger w-100 container-fluid">
            <h1 className="text-uppercase">Next all course</h1>
            <h2>Available Now</h2>
          </div>
        </Col>
      </Row>
      <div>
        <Row>
          <Col sm={12} md={9}>
            <Form className="shadow rounded p-3 mt-5 mb-5  ">
              <h2 className="text-center">Register Now</h2>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridname">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridSurname">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control type="surname" placeholder="Enter Surname" />
                </Form.Group>{" "}
              </Row>
              <Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="Subject" placeholder="Subject" />
                </Form.Group>
              </Row>

              <Row>
                <Form.Label className="mt-2">Write your Message</Form.Label>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  className="mt-2"
                  label=" &nbsp;Message"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Row>

              <Button
                // variant="light"
                className="btn btn-outline-light text-dark mt-3"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RegisterNow;

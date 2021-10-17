import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
// import useAuth from "../../Hooks/useAuth";
// import useCourses from "../../Hooks/useCourses";

const Servicedetails = () => {
  const { serviceId } = useParams();
 
  return (
    <Container>
      <Row>
        <Col sm={12} md={8}>
          <div className="bg-danger">
            {/* <img src= alt="" /> */}
            <h1>service details for {serviceId} will be here </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Servicedetails;

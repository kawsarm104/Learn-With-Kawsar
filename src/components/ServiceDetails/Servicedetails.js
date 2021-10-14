import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
// import useCourses from "../../Hooks/useCourses";

const Servicedetails = () => {
  const { serviceId } = useParams();
  // console.log(props,"from service details")
  // const {img} =
  const [service, setService] = useState({});
  useEffect(() => {
    //   fetching fake data
    fetch(`./fakedata.json/courses/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        console.log(data, "from service details");
        // console.log(data,"from custom hooks")
        // console.log(data.courses,"from custom hooks")
      });
  }, []);
  // console.log(service,"from service id")
  return (
    <Container>
      <Row>
        <Col sm={12} md={8}>
          <div className="bg-danger">
            {/* <img src= alt="" /> */}
            <h1>service details will be here {serviceId} </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Servicedetails;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DownloadArea from "./DownloadArea";
import FindCourse from "./FindCourse";
import OpeningHours from "./OpeningHours";
import Slider from "./Slider/Slider";
const Home = () => {
  return (
    <>
      <Slider></Slider>
      <Container className="">
        <Row>
          <Col  sm={12} md={4} >
            <DownloadArea></DownloadArea>
          </Col>
          <Col  sm={12} md={4}>
            <OpeningHours></OpeningHours>
          </Col>
          <Col  sm={12} md={4}>
            <FindCourse></FindCourse>
          </Col>
        </Row>
      </Container>

      {/* <div className="container row  mb-1">
        <div className="col-8">
          <div className="d-flex ">
            <DownloadArea></DownloadArea>
            <OpeningHours></OpeningHours>
          </div>
        </div>
        <div className="col-4 ">
          <FindCourse></FindCourse>
        </div>
      </div> */}
    </>
  );
};

export default Home;

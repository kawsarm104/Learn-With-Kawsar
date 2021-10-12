import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useCourses from "../../Hooks/useCourses";
import Service from "../Service/Service";
// import Service from "../Service/Service";
import DownloadArea from "./DownloadArea";
import FindCourse from "./FindCourse";
import OpeningHours from "./OpeningHours";
// import RegisterNow from "./RegisterNow/RegisterNow";
// import SliceData from "./SliceData/SliceData";
import Slider from "./Slider/Slider";
const Home = () => {
  const [courses] = useCourses();
  return (
    <>
      <Slider></Slider>
      <Container className=" mb-5">
        <Row className="">
          <Col sm={12} md={4} className="bg-info p-2 ">
            <DownloadArea></DownloadArea>
          </Col>
          <Col sm={12} md={4} className="bg-warning p-2">
            <OpeningHours></OpeningHours>
          </Col>
          <Col sm={12} md={4}>
            <FindCourse></FindCourse>
          </Col>
        </Row>
      </Container>
      {/* Showing only 4 cards in homepage  */}

      <div className="row container-fluid mx-auto ">
        <h1 className="">Our Courses </h1>
        {courses.slice(0, 4).map((course) => (
          <Service key={course.id} course={course}></Service>
        ))}
      </div>
      {/* Showing register now  */}
      {/* <RegisterNow></RegisterNow> */}
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [courses, setCourses] = useState([]);
  // console.log("tui to kaj kor")

  useEffect(() => {
    //   fetching fake data
    fetch("./fakedata.JSON")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses);
      });
  }, []);
  return (
    <div className="container-fluid row ">
      <h1>{courses.length} results</h1>
      {courses.map((course) => (
        <Service key={course.id} course={course}></Service>
      ))}
    </div>
  );
};

export default Services;

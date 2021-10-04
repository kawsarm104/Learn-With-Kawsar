import React from "react";
import useCourses from "../../Hooks/useCourses";

import Service from "./Service";

const Services = () => {
const [courses] = useCourses();
  // console.log("line 11",courses)
  return (
    <>
      <div className="container-fluid row">
        <h1  className="mt-3 mb-3">{courses.length} Courses Available</h1>

        {/* Showing in services page  */}
        
        {courses.map((course) => (
          <Service key={course.id} course={course}></Service>
        ))}
      </div>
    </>
  );
};

export default Services;

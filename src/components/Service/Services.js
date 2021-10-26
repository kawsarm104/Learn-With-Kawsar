import React from "react";
import useCourses from "../../Hooks/useCourses";
import Service from "./Service";

const Services = () => {
  const [courses] = useCourses();

  return (
    <>
      <div className="container-fluid row  mt-3 mx-auto">
        <h1 className=" mb-3">{courses.length} Courses Available</h1>

        {/* Showing in services page  */}

        {courses.map((course) => (
          <Service key={course.id} course={course}></Service>
        ))}
      </div>
    </>
  );
};

export default Services;

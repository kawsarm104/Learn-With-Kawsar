import { useEffect, useState } from "react";
const useCourses = () => {
  const [courses, setCourses] = useState([]);

  // console.log("tui to kaj kor")

  useEffect(() => {
    //   fetching fake data
    // fetch("./fakedata.json")
    const url = "http://localhost:3001/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        // console.log(data,"from custom hooks")
        // console.log(data.courses,"from custom hooks")
      });
  }, []);
  return [courses, setCourses];
};
export default useCourses;
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AllCourses = () => {
  const courseList = ["HTML", "CSS", "JavaScript", "ReactJs", "Angular"];
  return (
    <div className="container2">
      <h2 className="all-courses">
        All Courses
        <ul className="ultag">
          {courseList.map((course) => (
            <NavLink
              className="navlink"
              key={course}
              to={`/courses/allcourses/${course}`}
            >
              <li className="litag">{course}</li>
            </NavLink>
          ))}
        </ul>
        <Outlet />
      </h2>
    </div>
  );
};

export default AllCourses;

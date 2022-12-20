import React from "react";
import { Link, Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div className="container">
      <h1 className="course">My Courses</h1>
      <p className="details">
        These Are The details about all of our courses and bundles.
      </p>
      <div className="buttons">
        <Link className="courses" to="/courses/allcourses">
          Courses
        </Link>
        <Link className="bundles" to="/courses/bundles">
          Bundles
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Courses;

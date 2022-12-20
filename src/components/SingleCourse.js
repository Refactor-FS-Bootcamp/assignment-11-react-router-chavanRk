import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SigleCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-title">
        <h5 className="coursename">Course Name:</h5>
        <p className="para">{id}</p>
        <a
          className="moreinfo"
          onClick={() => navigate("/dashboard", { state: id })}
        >
          More Info
        </a>

        <Link to="/dashboard" state={"ReactJs Testing"} className="test-course">
          Test Course
        </Link>
      </div>
    </div>
  );
};

export default SigleCourse;

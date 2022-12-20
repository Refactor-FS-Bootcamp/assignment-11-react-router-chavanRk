import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="head">
      <h1 className="head2">Home component</h1>
      <Link to="/courses" className="link1">
        All Courses
      </Link>
    </div>
  );
};

export default Home;

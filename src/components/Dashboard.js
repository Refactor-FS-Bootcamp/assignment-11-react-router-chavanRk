import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div className="card">
      <div className="card-title">
        <h5>{location.state}</h5>
        <p>Learn from the indusrty expert in live one to one session</p>
      </div>
    </div>
  );
};

export default Dashboard;

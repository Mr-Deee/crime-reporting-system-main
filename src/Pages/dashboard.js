import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <Link to="/assigncrime">
        <div className="card">Crimes</div>
      </Link>

      <Link to="/pendingcases">
        <div className="card">Pending Cases</div>
      </Link>

      <Link to="/solvedcases">
        <div className="card">Solved Cases</div>
      </Link>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Link } from "react-router-dom";
import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>CMAM Program Dashboard</h1>
      <div className="analytics-cards">
        <AnalyticsCard title="Active Patients" value="120" />
        <AnalyticsCard title="Patients at Risk" value="15" />
        <AnalyticsCard title="Graduated Patients" value="50" />
      </div>
      <div className="actions">
        <Link to="/view-patients">
          <button>View Patients</button>
        </Link>
        <Link to="/add-patient">
          <button>Add New Patient</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

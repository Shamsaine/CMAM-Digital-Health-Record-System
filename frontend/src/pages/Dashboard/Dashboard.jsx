import React from "react";
import { Link } from "react-router-dom";
import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.module.css'; // Import custom CSS for additional styling

function Dashboard() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">CMAM Program Dashboard</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <AnalyticsCard title="Active Patients" value="120" />
        </div>
        <div className="col-md-4 mb-4">
          <AnalyticsCard title="Patients at Risk" value="15" />
        </div>
        <div className="col-md-4 mb-4">
          <AnalyticsCard title="Graduated Patients" value="50" />
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/view-patients" className="btn btn-primary me-2">
          View Patients
        </Link>
        <Link to="/add-patient" className="btn btn-success">
          Add New Patient
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPatients } from "../../services/api"; // Import the fetchPatients function

function ViewPatients() {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPatients()
      .then((data) => {
        console.log("Fetched patients data:", data); // Debugging: Log fetched data
        setPatients(data);
      })
      .catch((error) => {
        console.error("An error occurred:", error); // Debugging: Log error
        setError(error.message);
      });
  }, []);

  return (
    <div className="view-patients">
      <h1>Registered Patients</h1>
      {error && <p className="error">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Program Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.length > 0 ? (
            patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.patient_id}</td>
                <td>{`${patient.first_name} ${patient.last_name}`}</td>
                <td>{new Date().getFullYear() - new Date(patient.date_of_birth).getFullYear()}</td>
                <td>{patient.program_status}</td>
                <td>
                  <Link to={`/patient/${patient.id}`}>View Details</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No patients found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewPatients;

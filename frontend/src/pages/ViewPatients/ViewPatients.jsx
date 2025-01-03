import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewPatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("/api/patients/")
      .then((response) => response.json())
      .then((data) => setPatients(data));
  }, []);

  return (
    <div className="view-patients">
      <h1>Registered Patients</h1>
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
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.patient_id}</td>
              <td>{`${patient.first_name} ${patient.last_name}`}</td>
              <td>{new Date().getFullYear() - new Date(patient.date_of_birth).getFullYear()}</td>
              <td>{patient.program_status}</td>
              <td>
                <Link to={`/patient/${patient.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewPatients;

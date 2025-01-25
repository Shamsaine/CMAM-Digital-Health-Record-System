import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewPatients.module.css'; // Import custom CSS for additional styling

function ViewPatients() {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      const token = localStorage.getItem('accessToken');
      try {
        const response = await fetch('http://127.0.0.1:8000/api/patients/', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Fetched patients data:", data); // Debugging: Log fetched data
        setPatients(data);
      } catch (error) {
        console.error("An error occurred:", error); // Debugging: Log error
        setError(error.message);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Registered Patients</h1>
      {error && <p className="text-danger text-center">{error}</p>}
      <table className="table table-striped">
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
                  <Link to={`/patient/${patient.id}`} className="btn btn-primary me-2">View Details</Link>
                  <Link to={`/update-record/${patient.id}`} className="btn btn-warning">Update Record</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No patients found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewPatients;

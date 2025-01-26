import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import WeightChart from "./Charts/WeightChart";
import MUACChart from "./Charts/MUACChart";
import WHZChart from "./Charts/WHZChart";

function PatientDetails() {
  const { id } = useParams(); // Get patient ID from the URL
  const [patient, setPatient] = useState(null);
  const [progress, setProgress] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/patients/${id}/`)
      .then((response) => response.json())
      .then((data) => setPatient(data));

    fetch(`/api/progress-records/?patient=${id}`)
      .then((response) => response.json())
      .then((data) => setProgress(data));
  }, [id]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  const dates = progress.map((record) => record.date);
  const weights = progress.map((record) => record.weight);
  const muacs = progress.map((record) => record.muac);
  const whzScores = progress.map((record) => record.whz_score);

  return (
    <div className="patient-details">
      <h1>Patient Details: {patient.first_name} {patient.last_name}</h1>
      <div className="patient-info">
        <p><strong>Patient ID:</strong> {patient.patient_id}</p>
        <p><strong>Age:</strong> {new Date().getFullYear() - new Date(patient.date_of_birth).getFullYear()} years</p>
        <p><strong>Gender:</strong> {patient.gender === "M" ? "Male" : "Female"}</p>
        <p><strong>Guardian:</strong> {patient.guardian_name}</p>
        <p><strong>Guardian Phone:</strong> {patient.guardian_phone}</p>
        <p><strong>Program Status:</strong> {patient.program_status}</p>
      </div>

      <div className="progress-analytics">
        <h2>Progress Analytics</h2>
        <WeightChart labels={dates} data={weights} />
        <MUACChart labels={dates} data={muacs} />
        <WHZChart labels={dates} data={whzScores} />
      </div>

      <div className="actions">
        <button onClick={() => alert("Marked as Critical!")}>Mark as Critical</button>
        <button onClick={() => alert("Marked as Defaulter!")}>Mark as Defaulter</button>
        <button onClick={() => navigate(`/add-progress-record/${id}`)} className="btn btn-primary">Add Progress Record</button> {/* Button to redirect to AddProgressRecord page */}
      </div>
    </div>
  );
}

export default PatientDetails;

import React, { useState } from "react";
import { createProgressRecord } from "../../services/api"; // Import the createProgressRecord function
import 'bootstrap/dist/css/bootstrap.min.css';

function AddProgressRecord({ patientId }) {
  const [formData, setFormData] = useState({
    patient: patientId,
    date: "",
    weight: "",
    height: "",
    muac: "",
    whz_score: "",
    health_status: "",
    therapeutic_food_provided: false,
    supplements: "",
    lab_results: "",
    follow_up_notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting progress record data:", formData); // Debugging: Log form data
    createProgressRecord(formData)
      .then((data) => {
        console.log("Response data:", data); // Debugging: Log response data
        alert("Progress record added successfully!");
        setFormData({
          patient: patientId,
          date: "",
          weight: "",
          height: "",
          muac: "",
          whz_score: "",
          health_status: "",
          therapeutic_food_provided: false,
          supplements: "",
          lab_results: "",
          follow_up_notes: "",
        });
      })
      .catch((error) => {
        console.error("An error occurred:", error.response ? error.response.data : error.message); // Debugging: Log error
        alert(`An error occurred: ${error.response ? JSON.stringify(error.response.data) : error.message}`);
      });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="container">
      <h2>Add Progress Record</h2>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="date" className="form-label">Date</label>
          <input type="date" className="form-control" id="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="weight" className="form-label">Weight (kg)</label>
          <input type="number" className="form-control" id="weight" name="weight" value={formData.weight} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="height" className="form-label">Height (cm)</label>
          <input type="number" className="form-control" id="height" name="height" value={formData.height} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="muac" className="form-label">MUAC (cm)</label>
          <input type="number" className="form-control" id="muac" name="muac" value={formData.muac} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="whz_score" className="form-label">WHZ Score</label>
          <input type="number" className="form-control" id="whz_score" name="whz_score" value={formData.whz_score} onChange={handleChange} />
        </div>
        <div className="col-12">
          <label htmlFor="health_status" className="form-label">Health Status</label>
          <textarea className="form-control" id="health_status" name="health_status" value={formData.health_status} onChange={handleChange} required></textarea>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="therapeutic_food_provided" name="therapeutic_food_provided" onChange={handleChange} checked={formData.therapeutic_food_provided} />
            <label className="form-check-label" htmlFor="therapeutic_food_provided">
              Therapeutic Food Provided
            </label>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="supplements" className="form-label">Supplements</label>
          <textarea className="form-control" id="supplements" name="supplements" value={formData.supplements} onChange={handleChange}></textarea>
        </div>
        <div className="col-12">
          <label htmlFor="lab_results" className="form-label">Lab Results</label>
          <textarea className="form-control" id="lab_results" name="lab_results" value={formData.lab_results} onChange={handleChange}></textarea>
        </div>
        <div className="col-12">
          <label htmlFor="follow_up_notes" className="form-label">Follow-up Notes</label>
          <textarea className="form-control" id="follow_up_notes" name="follow_up_notes" value={formData.follow_up_notes} onChange={handleChange}></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add Record</button>
        </div>
      </form>
    </div>
  );
}

export default AddProgressRecord;
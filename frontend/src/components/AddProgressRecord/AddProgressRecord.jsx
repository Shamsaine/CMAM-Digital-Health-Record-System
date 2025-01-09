import React, { useState } from "react";

function AddProgressRecord({ patientId }) {
  const [formData, setFormData] = useState({
    patient_id: patientId,
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
    fetch("/api/progress-records/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Progress record added successfully!");
          setFormData({
            patient_id: patientId,
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
        } else {
          alert("Failed to add progress record. Please try again.");
        }
      })
      .catch(() => alert("An error occurred."));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="add-progress-record">
      <h2>Add Progress Record</h2>
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" onChange={handleChange} value={formData.date} required />
        <input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} value={formData.weight} required />
        <input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} value={formData.height} />
        <input type="number" name="muac" placeholder="MUAC (cm)" onChange={handleChange} value={formData.muac} required />
        <input type="number" name="whz_score" placeholder="WHZ Score" onChange={handleChange} value={formData.whz_score} />
        <textarea name="health_status" placeholder="Health Status" onChange={handleChange} value={formData.health_status} required />
        <label>
          <input type="checkbox" name="therapeutic_food_provided" onChange={handleChange} checked={formData.therapeutic_food_provided} />
          Therapeutic Food Provided
        </label>
        <textarea name="supplements" placeholder="Supplements" onChange={handleChange} value={formData.supplements} />
        <textarea name="lab_results" placeholder="Lab Results" onChange={handleChange} value={formData.lab_results} />
        <textarea name="follow_up_notes" placeholder="Follow-up Notes" onChange={handleChange} value={formData.follow_up_notes} />
        <button type="submit">Add Progress Record</button>
      </form>
    </div>
  );
}

export default AddProgressRecord;
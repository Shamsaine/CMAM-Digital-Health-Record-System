import React, { useState } from "react";

function AddPatient() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    guardian_name: "",
    guardian_phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/patients/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Patient registered successfully!");
          setFormData({
            first_name: "",
            last_name: "",
            date_of_birth: "",
            gender: "",
            guardian_name: "",
            guardian_phone: "",
          });
        } else {
          alert("Registration failed. Please try again.");
        }
      })
      .catch(() => alert("An error occurred."));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-patient">
      <h1>Register New Patient</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} value={formData.first_name} required />
        <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} value={formData.last_name} required />
        <input type="date" name="date_of_birth" onChange={handleChange} value={formData.date_of_birth} required />
        <select name="gender" onChange={handleChange} value={formData.gender} required>
          <option value="">Select Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <input type="text" name="guardian_name" placeholder="Guardian Name" onChange={handleChange} value={formData.guardian_name} required />
        <input type="tel" name="guardian_phone" placeholder="Guardian Phone" onChange={handleChange} value={formData.guardian_phone} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default AddPatient;

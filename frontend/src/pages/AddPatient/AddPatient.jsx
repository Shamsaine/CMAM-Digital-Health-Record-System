import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPatient } from "../../services/api"; // Import the createPatient function
import 'bootstrap/dist/css/bootstrap.min.css';

function AddPatient() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    address: "",
    guardian_name: "",
    guardian_phone: "",
    guardian_relationship: "",
    emergency_contact_name: "",
    emergency_contact_phone: "",
    enrollment_date: "",
    program_status: "active",
    facility: "",
    ethnicity: "",
    nationality: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData); // Debugging: Log form data
    createPatient(formData)
      .then((data) => {
        console.log("Response data:", data); // Debugging: Log response data
        if (data.patient_id) {
          alert("Patient registered successfully!");
          navigate(`/patient/${data.patient_id}`); // Redirect to PatientDetails page
        } else {
          alert("Registration failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error); // Debugging: Log error
        alert(`An error occurred: ${error.message}`);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1>Register New Patient</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="first_name" className="form-label">First Name</label>
          <input type="text" className="form-control" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="last_name" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="date_of_birth" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" id="date_of_birth" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select id="gender" className="form-select" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Choose...</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="guardian_name" className="form-label">Guardian Name</label>
          <input type="text" className="form-control" id="guardian_name" name="guardian_name" value={formData.guardian_name} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="guardian_phone" className="form-label">Guardian Phone</label>
          <input type="tel" className="form-control" id="guardian_phone" name="guardian_phone" value={formData.guardian_phone} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="guardian_relationship" className="form-label">Guardian Relationship</label>
          <input type="text" className="form-control" id="guardian_relationship" name="guardian_relationship" value={formData.guardian_relationship} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="emergency_contact_name" className="form-label">Emergency Contact Name</label>
          <input type="text" className="form-control" id="emergency_contact_name" name="emergency_contact_name" value={formData.emergency_contact_name} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="emergency_contact_phone" className="form-label">Emergency Contact Phone</label>
          <input type="tel" className="form-control" id="emergency_contact_phone" name="emergency_contact_phone" value={formData.emergency_contact_phone} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="enrollment_date" className="form-label">Enrollment Date</label>
          <input type="date" className="form-control" id="enrollment_date" name="enrollment_date" value={formData.enrollment_date} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="program_status" className="form-label">Program Status</label>
          <select id="program_status" className="form-select" name="program_status" value={formData.program_status} onChange={handleChange} required>
            <option value="active">Active</option>
            <option value="discharged">Discharged</option>
            <option value="graduated">Graduated</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="facility" className="form-label">Facility</label>
          <input type="text" className="form-control" id="facility" name="facility" value={formData.facility} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="ethnicity" className="form-label">Ethnicity</label>
          <input type="text" className="form-control" id="ethnicity" name="ethnicity" value={formData.ethnicity} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="nationality" className="form-label">Nationality</label>
          <input type="text" className="form-control" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
}

export default AddPatient;

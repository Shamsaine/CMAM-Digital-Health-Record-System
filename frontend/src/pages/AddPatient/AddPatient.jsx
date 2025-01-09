import React, { useState } from "react";
import AddProgressRecord from "../../components/AddProgressRecord/AddProgressRecord"; // Import the AddProgressRecord component

function AddPatient() {
  const [formData, setFormData] = useState({
    patient_id: "",
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

  const [patientId, setPatientId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData); // Debugging: Log form data
    fetch("/api/patients/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(JSON.stringify(errorData));
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data); // Debugging: Log response data
        if (data.id) {
          alert("Patient registered successfully!");
          setPatientId(data.id);
          setFormData({
            patient_id: "",
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
    <div className="add-patient">
      <h1>Register New Patient</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="patient_id" placeholder="Patient ID" onChange={handleChange} value={formData.patient_id} required />
        <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} value={formData.first_name} required />
        <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} value={formData.last_name} required />
        <input type="date" name="date_of_birth" onChange={handleChange} value={formData.date_of_birth} required />
        <select name="gender" onChange={handleChange} value={formData.gender} required>
          <option value="">Select Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <textarea name="address" placeholder="Address" onChange={handleChange} value={formData.address} />
        <input type="text" name="guardian_name" placeholder="Guardian Name" onChange={handleChange} value={formData.guardian_name} required />
        <input type="tel" name="guardian_phone" placeholder="Guardian Phone" onChange={handleChange} value={formData.guardian_phone} required />
        <input type="text" name="guardian_relationship" placeholder="Guardian Relationship" onChange={handleChange} value={formData.guardian_relationship} />
        <input type="text" name="emergency_contact_name" placeholder="Emergency Contact Name" onChange={handleChange} value={formData.emergency_contact_name} />
        <input type="tel" name="emergency_contact_phone" placeholder="Emergency Contact Phone" onChange={handleChange} value={formData.emergency_contact_phone} />
        <input type="date" name="enrollment_date" onChange={handleChange} value={formData.enrollment_date} required />
        <select name="program_status" onChange={handleChange} value={formData.program_status} required>
          <option value="active">Active</option>
          <option value="discharged">Discharged</option>
          <option value="graduated">Graduated</option>
        </select>
        <input type="text" name="facility" placeholder="Facility" onChange={handleChange} value={formData.facility} />
        <input type="text" name="ethnicity" placeholder="Ethnicity" onChange={handleChange} value={formData.ethnicity} />
        <input type="text" name="nationality" placeholder="Nationality" onChange={handleChange} value={formData.nationality} />
        <button type="submit">Register</button>
      </form>
      {patientId && <AddProgressRecord patientId={patientId} />} {/* Include the AddProgressRecord component */}
    </div>
  );
}

export default AddPatient;

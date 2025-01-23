import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PasswordResetPage.module.css';

const PasswordResetPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/users/password-reset/', { email });
      setMessage('A password reset link has been sent to your email.');
    } catch (err) {
      setMessage('Failed to send password reset email. Please try again.');
    }
  };

  return (
    <div className="password-reset-page d-flex justify-content-center align-items-center vh-100">
      <div className="password-reset-container p-4 border rounded bg-light">
        <h2 className="mb-4 text-center">Password Reset</h2>
        <p className="text-center">Enter your email to receive a password reset link.</p>
        <form className="password-reset-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Reset Link</button>
          {message && <p className="message text-center mt-3">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default PasswordResetPage;

import React, { useState } from 'react';
import axios from 'axios';
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
    <div className="password-reset-container">
      <form className="password-reset-form" onSubmit={handleSubmit}>
        <h2>Password Reset</h2>
        <p>Enter your email to receive a password reset link.</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default PasswordResetPage;

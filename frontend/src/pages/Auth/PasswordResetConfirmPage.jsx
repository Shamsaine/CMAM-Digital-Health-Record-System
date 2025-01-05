import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PasswordResetPage.module.css';

const PasswordResetConfirmPage = () => {
  const { uidb64, token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://127.0.0.1:8000/users/password-reset-confirm/${uidb64}/${token}/`, { password });
      setMessage('Password has been reset successfully. You can now log in.');
    } catch (err) {
      setMessage('Failed to reset password. The token might have expired.');
    }
  };

  return (
    <div className="password-reset-confirm-container">
      <form className="password-reset-confirm-form" onSubmit={handleSubmit}>
        <h2>Reset Your Password</h2>
        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default PasswordResetConfirmPage;

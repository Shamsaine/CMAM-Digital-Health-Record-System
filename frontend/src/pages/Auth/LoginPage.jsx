import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/api'; // Import the login function from api.js
import './LoginPage.module.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials.username, credentials.password);
      setError('');
      alert('Login successful');
      navigate('/dashboard');
    } catch (err) {
      setError(err.detail || 'Invalid username or password');
    }
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
          <div className="password-reset-link">
            <a href="/password-reset">Forgot Password?</a>
          </div>
        </form>
      </div>
      <footer className="footer">
        <p>&copy; 2025 CMAM Digital Health Record System</p>
      </footer>
    </div>
  );
};

export default LoginPage;

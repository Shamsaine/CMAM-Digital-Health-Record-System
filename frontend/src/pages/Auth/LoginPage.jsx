import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm'; // Import the LoginForm component from the same folder
import { login } from '../../services/api'; // Import the login function from api.js
import './LoginPage.module.css';

const LoginPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    try {
      await login(username, password);
      setError('');
      alert('Login successful');
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.detail || 'Invalid username or password');
    }
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <LoginForm onLogin={handleLogin} /> {/* Use the LoginForm component */}
        <div className="password-reset-link">
          <a href="/password-reset">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

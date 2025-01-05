import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LoginPage.module.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/token/', credentials);
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      setError('');
      alert('Login successful');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
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
        <button type="submit"><Link to="/dashboard">Login</Link></button>
        <div className="password-reset-link">
          <a href="/password-reset">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

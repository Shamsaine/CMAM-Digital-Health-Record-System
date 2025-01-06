import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/api'; // Import the login function from api.js
import './LoginPage.module.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the login API function
      /*const response = await login(credentials.username, credentials.password);*/
      await login(credentials.username, credentials.password);
      setError('');
      alert('Login successful');

      // Navigate to dashboard on successful login
      navigate('/dashboard');
    } catch (err) {
      // Set a more descriptive error message if available
      setError(err.detail || 'Invalid username or password');
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
        <button type="submit">Login</button>
        <div className="password-reset-link">
          <a href="/password-reset">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

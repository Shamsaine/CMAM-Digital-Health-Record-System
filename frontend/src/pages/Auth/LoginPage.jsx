import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/api'; // Import the login function from api.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.module.css'; // Import custom CSS for additional styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await login(username, password);
      console.log('Login successful:', response);
      alert('Login successful');
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="login-container p-4 m-5 border rounded bg-light">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          {error && <div className="error text-danger text-center">{error}</div>}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

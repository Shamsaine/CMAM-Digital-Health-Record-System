import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm'; // Import the LoginForm component from the same folder
import { login } from '../../services/api'; // Import the login function from api.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.module.css'; // Import custom CSS for additional styling

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
      setError(err.detail || 'Invalid username or password');
    }
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="login-container p-4 m-5 border rounded bg-light">
        {error && <p className="text-danger text-center">{error}</p>}
        <LoginForm onLogin={handleLogin} /> {/* Use the LoginForm component */}
        <div className="text-center mt-3">
          <a href="/password-reset" className="text-decoration-none">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

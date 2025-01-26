import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navbar.module.css'; // Import custom CSS for additional styling

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Example state for authentication
  const navigate = useNavigate(); // Hook to access the navigate function

  useEffect(() => {
    // Example: Check if the user is authenticated
    const token = localStorage.getItem('accessToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    // Clear tokens from local storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsAuthenticated(false);
    // Redirect to the login page or home page
    navigate('/login');
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">CMAM Records Manager</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link" id="dataDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Data
              </button>
              <ul className={`dropdown-menu ${styles.dropdownMenu}`} aria-labelledby="dataDropdown">
                <li><Link className="dropdown-item" to="/data/overview">Overview</Link></li>
                <li><Link className="dropdown-item" to="/data/statistics">Statistics</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link" id="researchDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Research
              </button>
              <ul className={`dropdown-menu ${styles.dropdownMenu}`} aria-labelledby="researchDropdown">
                <li><Link className="dropdown-item" to="/research/papers">Papers</Link></li>
                <li><Link className="dropdown-item" to="/research/projects">Projects</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-patient">Add Patient</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/patients">View Patients</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
          </ul>
          <form className="d-flex ms-3">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
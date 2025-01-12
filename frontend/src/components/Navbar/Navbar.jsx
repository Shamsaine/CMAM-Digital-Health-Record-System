import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Example state for authentication

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">CMAM Records Manager</Link>
      </div>
      <div className={styles.toggleButton} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <div className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/research">Research</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        {isAuthenticated && (
          <>
            <Link to="/add-patient">Add Patient</Link>
            <Link to="/patients">View Patients</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/logout">Logout</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

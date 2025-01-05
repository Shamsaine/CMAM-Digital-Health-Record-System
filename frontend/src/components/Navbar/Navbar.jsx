import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>CMAM Records Manager</div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/patients">View Patients</Link></li>
        <li><Link to="/add-patient">Add Patient</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>CMAM Records Manager</div>
      <ul className={styles.navLinks}>
      <li><a href="/">Home</a></li>
      <li><a href="/research">Research</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

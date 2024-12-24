import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 CMAM Records Manager. All rights reserved.</p>
      <div className={styles.links}>
        <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;

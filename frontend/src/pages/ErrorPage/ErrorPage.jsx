// ErrorPage.jsx
import React from 'react';
import styles from './ErrorPage.module.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.title}>404: Oops! You're Lost in the Nutrition Aisle 🥕</h1>
      <p className={styles.message}>
        Looks like you’ve bitten off more than you can chew! But don’t worry, you’re not
        malnourished on options.
      </p>
      <p className={styles.pun}>
        Let's lettuce guide you back to the <Link to="/" className={styles.link}>home page</Link>, 
        so you can kale the right page!
      </p>
      <img
        src="/images/404-error-veggies.png" // Replace with an appropriate image
        alt="Cute veggies lost in a maze"
        className={styles.image}
      />
    </div>
  );
};

export default ErrorPage;

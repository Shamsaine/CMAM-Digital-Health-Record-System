import React from 'react';
import Feed from '../../components/Feed/Feed'; // Ensure Feed is correctly implemented
import styles from './Home.module.css'; // Ensure styles are defined in Home.module.css
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <div class='container-fluid'>
          <div className={styles.home}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <h1>Streamline CMAM Program Data Management</h1>
        <p>
          Empowering healthcare professionals with tools to track, analyze, and optimize nutrition data.
        </p>
        <button className={styles.cta}>Learn More</button>
      </header>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <h2>Key Features</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Digital Record-Keeping</h3>
            <p>Easily store and manage patient records digitally.</p>
          </div>
          <div className={styles.card}>
            <h3>Supervisor Dashboard</h3>
            <p>Monitor data with an intuitive interface.</p>
          </div>
          <div className={styles.card}>
            <h3>Advanced Analytics</h3>
            <p>Leverage insights for better decision-making.</p>
          </div>
          <div className={styles.card}>
            <h3>Research and Report</h3>
            <p>Publishing research and analytical reports on the program</p>
          </div>
        </div>
      </section>

      {/* Feed Section */}
      <section id="feed" className={styles.feed}>
        <h2>Recent Posts</h2>
        <Feed /> {/* Ensure Feed handles cases where there is no data */}
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <h2>About the Platform</h2>
        <p>
          Born out of a need to address challenges in the CMAM program, this platform simplifies record-keeping
          and data analysis for healthcare professionals.
        </p>
      </section>
    </div>
    </div>
  );
};

export default Home;

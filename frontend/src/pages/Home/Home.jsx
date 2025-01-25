import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Home.module.css'; // Import custom CSS for additional styling
import { FaRegFileAlt, FaTachometerAlt, FaChartLine, FaBook } from 'react-icons/fa';
import Feed from '../../components/Feed/Feed'; // Ensure Feed component is imported

function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className="container text-center">
          <h1>Streamline CMAM Program Data Management</h1>
          <p>Empowering healthcare professionals with tools to track, analyze, and optimize nutrition data.</p>
          <Link to="#about" className={`btn btn-primary ${styles.cta}`}>Learn More</Link> {/* CTA button linking to the About page */}
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className="container">
          <h2>Key Features</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Digital Record-Keeping</h3>
              <p>Easily store and manage patient records digitally.</p>
              <div className={styles.icon}>
                <FaRegFileAlt size={32} />
              </div>
            </div>
            <div className={styles.card}>
              <h3>Supervisor Dashboard</h3>
              <p>Monitor data with an intuitive interface.</p>
              <div className={styles.icon}>
                <FaTachometerAlt size={32} />
              </div>
            </div>
            <div className={styles.card}>
              <h3>Advanced Analytics</h3>
              <p>Leverage insights for better decision-making.</p>
              <div className={styles.icon}>
                <FaChartLine size={32} />
              </div>
            </div>
            <div className={styles.card}>
              <h3>Research and Report</h3>
              <p>Publishing research and analytical reports on the program.</p>
              <div className={styles.icon}>
                <FaBook size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feed Section */}
      <section id="feed" className={styles.feed}>
        <div className="container">
          <h2>Recent Posts</h2>
          <Feed /> {/* Ensure Feed handles cases where there is no data */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className="container">
          <h2>About CMAM Digital Health Record System</h2>
          <p>
            The CMAM Digital Health Record System is a robust and innovative solution designed to support the Community-based Management of Acute Malnutrition. This system streamlines the process of managing patient records, tracking progress, and monitoring resources in healthcare facilities. By leveraging modern technologies, it ensures efficient data storage, real-time updates, and personalized dashboards for each patient. Additionally, the platform empowers researchers with tools to collect and analyze malnutrition-related data, facilitating evidence-based decision-making. With a user-friendly interface and scalable design, the CMAM system is dedicated to improving the quality of care and combating malnutrition in vulnerable communities.<br></br>
          </p>
          <h3>Our Mission</h3>
          <p>
            To revolutionize the fight against malnutrition by providing a cutting-edge digital platform that enhances healthcare delivery, empowers healthcare workers, and drives impactful research to improve the lives of vulnerable populations.<br></br>
          </p>
          <h3>Our Vision</h3>
          <p>
            To build a world where malnutrition is eradicated through the seamless integration of technology, enabling communities to thrive with better access to healthcare, data-driven insights, and sustainable management solutions.<br></br>
          </p>
          <Link to="/about" className="btn btn-secondary mt-3">Read More About Us</Link> {/* Button linking to the About page */}
        </div>
      </section>
    </div>
  );
}

export default Home;

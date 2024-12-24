// About.jsx
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <header className={styles.hero}>
        <h1>About the Platform</h1>
        <p>
          Empowering healthcare professionals to streamline data management for better nutritional outcomes.
        </p>
      </header>

      {/* About the Platform Section */}
      <section className={styles.platform}>
        <h2>Our Mission</h2>
        <p>
          To revolutionize the management of nutrition and health-related data, empowering healthcare workers to
          deliver better outcomes with ease and efficiency. We aim to bridge gaps in healthcare delivery through
          technology and data-driven solutions.
        </p>

        <h2>Our Vision</h2>
        <p>
          A world where technology simplifies healthcare, improves patient outcomes, and enhances decision-making
          for sustainable development in the nutrition and health sectors.
        </p>
      </section>

      {/* About CMAM Program Section */}
      <section className={styles.cmam}>
        <h2>About the CMAM Program</h2>
        <p>
          The Community-based Management of Acute Malnutrition (CMAM) program was established in 2007 as a
          comprehensive approach to managing acute malnutrition in children. It focuses on delivering care at the
          community level, ensuring accessibility to treatment for children and families in underserved areas.
        </p>
        <p>
          Over the years, CMAM has been instrumental in reducing child mortality rates caused by severe acute
          malnutrition. The program leverages simple, effective, and community-driven approaches to bring
          life-saving solutions closer to the people who need them the most.
        </p>

        <h3>Purpose of CMAM</h3>
        <p>
          - To identify and treat children with acute malnutrition early.<br />
          - To build capacity within local communities to prevent and manage malnutrition.<br />
          - To integrate malnutrition treatment into routine health services.
        </p>

        <h3>Journey So Far</h3>
        <p>
          Since its inception, CMAM has expanded to multiple regions, adapting to the unique challenges of each
          community. With millions of children treated and countless lives saved, the program continues to evolve,
          focusing on sustainability and long-term impact.
        </p>
      </section>

      {/* Download PDF Section */}
      <section className={styles.download}>
        <h2>Learn More</h2>
        <p>
          Download our comprehensive guide to the CMAM program, detailing its objectives, methodology, and success
          stories.
        </p>
        <a
          href="/path-to-cmam-guide.pdf" // Replace with the actual PDF path
          download
          className={styles.downloadButton}
        >
          Download PDF
        </a>
      </section>
    </div>
  );
};

export default About;

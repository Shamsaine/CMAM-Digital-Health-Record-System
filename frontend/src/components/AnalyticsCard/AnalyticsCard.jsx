import React from "react";
import styles from './AnalyticsCard.module.css';

function AnalyticsCard({ title, children }) {
  return (
    <div className={styles["analytics-card"]}>
      <h3 className={styles["analytics-card-title"]}>{title}</h3>
      <div className={styles["analytics-card-content"]}>{children}</div>
    </div>
  );
}

export default AnalyticsCard;

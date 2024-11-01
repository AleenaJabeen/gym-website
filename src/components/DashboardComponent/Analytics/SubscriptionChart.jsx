import React from "react";
import styles from "../../../styles/DashboardStyles/Analytics/SubscriptionChart.module.css";

const SubscriptionChart = () => {
  return (
    <div className={styles.chartContainer}>
      <h2>Today Subscriptions</h2>
      <div className={styles.container}>
      <div className={styles.circle}>
        <div className={styles.circleText}>
          <span className={styles.number}>233</span>
          <span className={styles.label}>Subscriptions</span>
        </div>
      </div>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={styles.basic}></div>
          Basic Gym Plan
        </div>
        <div className={styles.legendItem}>
        <div className={styles.standard}></div>
          Standard Gym Plan
        </div>
        <div className={styles.legendItem}>
        <div className={styles.premium}></div>
          Premium Gym Plan
        </div>
      </div>
    </div>
    </div>
  );
};

export default SubscriptionChart;

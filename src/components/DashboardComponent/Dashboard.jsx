import React from "react";
import styles from "../../styles/DashboardStyles/Dashboard.module.css";
import Analytics from "./Analytics/Analytics";

function Dashboard() {
  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.wrapper}>
          <Analytics />
        </div>
      </div>
    </>
  );
}

export default Dashboard;

import React from "react";
import styles from "../../../styles/DashboardStyles/Analytics/Gymplan.module.css";
import Plans from "./Plans";

function Gymplan() {
  return (
    <div className={styles.gymPlans}>
      <Plans title="Basic" color="rgba(197, 241, 55, 1)" />
      <Plans title="Standard" color="rgba(254, 215, 132, 0.8)" />
      <Plans title="Premium" color="rgba(137, 192, 255, 0.8)" />
    </div>
  );
}

export default Gymplan;

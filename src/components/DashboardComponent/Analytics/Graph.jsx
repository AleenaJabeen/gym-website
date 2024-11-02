import React from "react";
import styles from "../../../styles/DashboardStyles/Analytics/Graph.module.css";

function Graph() {
  return (
    <>
      <div className={styles.graph}>
        <p>Monthly Registered Users</p>
        <h3>24000</h3>
        <div className={styles.graphBars}>
          <div className={styles.bar}>
            <div className={styles.bar1}></div>Jan
          </div>
          <div className={styles.bar}>
            <div className={styles.bar2}></div>Feb
          </div>
          <div className={styles.bar}>
            <div className={styles.bar3}></div>Mar
          </div>
          <div className={styles.bar}>
            <div className={styles.bar4}></div>Apr
          </div>
          <div className={styles.bar}>
            <div className={styles.bar5}></div>May
          </div>
          <div className={`${styles.bar} ${styles.hide}`}>
            <div className={styles.bar6}></div>
            <span>Jun</span>
          </div>
          <div className={`${styles.bar} ${styles.hide}`}>
            <div className={styles.bar7}></div>
            <span>Jul</span>
          </div>
          <div className={`${styles.bar} ${styles.hide}`}>
            <div className={styles.bar8}>
              <div className={styles.unique}>22-30% &#8593;</div>
              <div className={styles.circle}></div>
              <span>Sep</span>
            </div>
          </div>
          <div className={`${styles.bar} ${styles.hide}`}>
            <div className={styles.bar9}></div>
            <span>Oct</span>
          </div>
          <div className={`${styles.bar} ${styles.hide}`}>
            <div className={styles.bar10}></div>
            <span>Nov</span>
          </div>
          <div className={`${styles.bar} ${styles.hide}`}>
            <div className={styles.bar11}></div>
            <span>Dec</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Graph;

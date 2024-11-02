import React from "react";
import Workouts from "./Workouts";
import styles from "../../../styles/DashboardStyles/Analytics/Workouts.module.css";
import rating from "../images/rating.png";

function RatedWorkout() {
  return (
    <>
      <div className={styles.ratedWorkout}>
        <div className={styles.header}>
          <img src={rating} alt="Rating" />
          <h2>Most Rated Workouts</h2>
        </div>
        <div className={styles.listedWorkout}>
          <Workouts />
          <Workouts />
          <Workouts />
          <Workouts />
          <Workouts />
          <Workouts />
        </div>
      </div>
    </>
  );
}

export default RatedWorkout;

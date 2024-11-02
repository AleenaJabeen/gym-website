import React from "react";
import UserInfo from "../images/UserInfo.png";
import styles from "../../../styles/DashboardStyles/Analytics/User.module.css";

function User() {
  return (
    <>
      <div className={styles.user}>
        <div className={styles.profileInfo}>
          <img src={UserInfo} alt="User Image" />
          <div className={styles.userInfo}>
            <div className={styles.userStatus}>New User</div>
            <div className={styles.userAnalytics}>
              <p>Weight: 58kgs</p>
              <p>Height:176cms</p>
            </div>
          </div>
        </div>
        <p>11 Sep,2024</p>
        <h3>Selena John</h3>
        <hr />
        <div className={styles.userNameInfo}>
          <div className={styles.nametext}>
            <h3>Female</h3>
            <p>30yrs old</p>
          </div>
          <div className={styles.gymPlan}>Basic Gym Plan</div>
        </div>
      </div>
    </>
  );
}

export default User;

import React from 'react';
import image from '../../VerificationComponent/images/image.png';
import rating from '../images/rating.png';
import styles from '../../../styles/DashboardStyles/Analytics/Workouts.module.css'

function Workouts() {
  return (
    <>
    <div className={styles.workout}>
        <img src={image} alt="Arm Exercising" />
        <h4>Arms Exercise</h4>
        <div className={styles.ratings}>
            <img src={rating} alt="Rate" />
            <img src={rating} alt="Rate" />
            <img src={rating} alt="Rate" />
            <img src={rating} alt="Rate" />
            <img src={rating} alt="Rate" />
            4.3 ratings
        </div>
    </div>
      
    </>
  )
}

export default Workouts

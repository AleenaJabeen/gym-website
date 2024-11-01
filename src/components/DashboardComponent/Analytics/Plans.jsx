import React from 'react';
import styles from '../../../styles/DashboardStyles/Analytics/Gymplan.module.css';
import basicPlan from '../images/basic.png'
function Plans(props) {
  return (
    <>
    <div className={styles.plan} style={{background:`${props.color}`}}>
        <div className={styles.icon}>
            <img src={basicPlan} alt="Plan Icon" /></div>
       <h4>{props.title} Gym Plan</h4>
       <h3>24</h3>
    </div>
      
    </>
  )
}

export default Plans;

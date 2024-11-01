import React from 'react';
import Introbar from '../Introbar';
import Gymplan from './Gymplan';
import User from './User';
import Graph from './Graph';
import SubscriptionChart from './SubscriptionChart';
import RatedWorkout from './RatedWorkout'
import styles from '../../../styles/DashboardStyles/Analytics/Analytics.module.css'

function Analytics() {
  return (
    <>
    <div className={styles.analytics}>
    <Introbar/>
    <div className={styles.analyticsTop}>
      <Gymplan/>
      <User/>
      <User/>
    </div>
    <div className={styles.analyticsMiddle}>
      <Graph/>
<SubscriptionChart/>
    </div>
    <div className={styles.anaylticsLower}>
      <RatedWorkout/>

    </div>
    </div>
    
    </>
  )
}

export default Analytics

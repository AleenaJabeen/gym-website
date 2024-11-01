import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar';
import styles from '../../styles/DashboardStyles/Dashboard.module.css'
import Analytics from './Analytics/Analytics'

function Dashboard() {
  return (
    <>
<div className={styles.dashboard}>
        <Sidebar/>
      <div className={styles.wrapper}>
      <Topbar/> 
    <Analytics/>
    </div>
    </div>
     
    </>
  )
}

export default Dashboard

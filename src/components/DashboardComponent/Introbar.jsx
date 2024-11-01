import React from 'react';
import styles from '../../styles/DashboardStyles/Introbar.module.css';
import hi from './images/HI.png'

function Introbar() {
  return (
    <>
    <div className={styles.introbar}>
        <div className={styles.welcome}>
            <img src={hi} alt="Hello emoji" />
            <div className={styles.text}>
                <h3>Welcome <span>JHON,</span></h3>
                <p>Hello, here you can manage your business by zone</p>
            </div>
        </div>
        <div className={styles.zones}>
            <select name="zones" id="zones">
                <option value="All zones">All zones</option>
            </select>
        </div>
    </div>
      
    </>
  )
}

export default Introbar

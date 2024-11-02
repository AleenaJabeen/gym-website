import React from 'react';
import styles from '../../styles/DashboardStyles/Topbar.module.css';
import search from './images/search2.png';
import notifi from './images/notification.png';
import cart from './images/cart.png';
import flag from './images/flag.png';
import profile from './images/img.png';


function Topbar() {
  return (
    <>
    <section className={styles.topbar}>  
        <div className={styles.search}>
            <img src={search} alt="search icon" />
            <input type="text" placeholder='Search here...'/>
        </div>
        <div className={styles.notification}>
            <img src={notifi} alt="notification icon" />
        </div>
        <div className={styles.cart}>
            <img src={cart} alt="cart icon" />
        </div>
        <div className={styles.language}>
            <img src={flag} alt="usa flag" />
            <select name="language">
                <option value="EN">EN</option>
            </select>
        </div>
        <div className={styles.profile}>
            <img src={profile} alt="Profile pic" />
            <div className={styles.online}></div>
            <div className={styles.name}>
                <h3>Jhon Doe</h3>
                <p>admin@admin.com</p>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Topbar

import React from "react";
import Footer from "../ReusableComponents/Footer";
import styles from "../../styles/DashboardStyles/Sidebar.module.css";
import DashboardIcon from './images/Dashboard.png';
import UsersIcon from './images/UsersIcon.png';
import SubscriptionsIcon from './images/SubscriptionsIcon.png';
import VideoIcon from './images/VideoIcon.png';
import logo from './images/logo.png';
import play from './images/play.png';
import search from './images/search.png';

const items = ["Dashboard", "Users", "Subscriptions", "Video"];

// Map each item to its respective icon
const itemIcons = {
  Dashboard: DashboardIcon,
  Users: UsersIcon,
  Subscriptions: SubscriptionsIcon,
  Video: VideoIcon,
};

function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
      <div className={styles.header}>
            <h3>ANDREWS</h3>
          </div>
        <div className={styles.inner}>
        <div className={styles.searchbar}>
            <img src={search} alt="searchicon" />
            <div><input type="text" placeholder="Search Menu..." /></div>
          </div>
          <nav className={styles.menu}> 
            {items.map((item, index) => (
              <li key={index} className={styles.menuItem}>
                <img src={itemIcons[item]} alt={item} className={styles.icon} />
                <p>{item}</p>
              </li>
            ))}
          </nav>
            <button className={styles.liveBtn}><img src={play} alt="Play" />Go Live</button>
          <img src={logo} alt="" />
          <Footer/>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

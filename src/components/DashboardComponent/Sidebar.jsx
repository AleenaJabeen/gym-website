import React,{useEffect,useState} from "react";
import Footer from "../ReusableComponents/Footer";
import styles from "../../styles/DashboardStyles/Sidebar.module.css";
import DashboardIcon from './images/Dashboard.png';
import UsersIcon from './images/UsersIcon.png';
import SubscriptionsIcon from './images/SubscriptionsIcon.png';
import VideoIcon from './images/VideoIcon.png';
import logo from './images/logo.png';
import play from './images/play.png';
import search from './images/search.png';
import img from './images/img.png'

const items = ["Dashboard", "Users", "Subscriptions", "Video"];

// Map each item to its respective icon
const itemIcons = {
  Dashboard: DashboardIcon,
  Users: UsersIcon,
  Subscriptions: SubscriptionsIcon,
  Video: VideoIcon,
};

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 900);
  // Effect to handle resize and update isCollapsed state
  useEffect(() => {
    const handleResize = () => setIsCollapsed(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    
    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
    <div className={isCollapsed ? styles.collapsed : ''}>
    <nav className={styles.sidebar}>
      <div className={styles.sidebarTopWrapper}>
        <div className={styles.sidebarTop}>
          <img src={img} alt="profile" />
          <span className={styles.hide}>ANDREW'S</span>
        </div>
      </div>
      <div className={styles.searchWrapper}>
        <img src={search} alt="search icon"/>
        <input type="text" placeholder="Search Menu..." />
      </div>
     
       
<div className={styles.sidebarHash}>
      <div className={styles.sidebarLinks}>
          <ul> 
            {items.map((item, index) => (
              <li key={index} className={styles.menuItem}>
                <img src={itemIcons[item]} alt={item} className={styles.icon} />
                <span className={`${styles.link} ${styles.hide}`}>{item}</span>
              </li>
            ))}
            </ul>
          </div> 
<div className={`${styles.bottomLinks} ${styles.sidebarLinks}`}>
  <ul>
    <li>
        <img src={play} alt="play icon" />
        <p className={`${styles.link} ${styles.hide}`}>Go Live</p>
    </li>
  </ul>
</div>
<div className={styles.gymProfile}>
  <img src={logo} alt="logo" />
  <Footer/>
</div>
</div>
          </nav>
          </div>
          

            
    </>
  );
}

export default Sidebar;

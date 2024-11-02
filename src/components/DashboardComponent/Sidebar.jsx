import React, { useEffect, useState } from "react";
import Footer from "../ReusableComponents/Footer";
import styles from "../../styles/DashboardStyles/Sidebar.module.css";
import DashboardIcon from "./images/Dashboard.png";
import UsersIcon from "./images/UsersIcon.png";
import SubscriptionsIcon from "./images/SubscriptionsIcon.png";
import VideoIcon from "./images/VideoIcon.png";
import logo from "./images/logo.png";
import play from "./images/play.png";
import search from "./images/search.png";
import { Link, useLocation } from "react-router-dom";
import img from "./images/img.png";

const items = ["Dashboard", "Users", "Subscriptions", "Video"];

const itemIcons = {
  Dashboard: DashboardIcon,
  Users: UsersIcon,
  Subscriptions: SubscriptionsIcon,
  Video: VideoIcon,
};

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 900);
  const location = useLocation(); // Hook to get current route path
  useEffect(() => {
    const handleResize = () => setIsCollapsed(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className={isCollapsed ? styles.collapsed : ""}>
        <nav className={styles.sidebar}>
          <div className={styles.sidebarTopWrapper}>
            <div className={styles.sidebarTop}>
              <img src={img} alt="profile" />
              <span className={styles.hide}>ANDREW'S</span>
            </div>
          </div>
          <div className={styles.searchWrapper}>
            <img src={search} alt="search icon" />
            <input type="text" placeholder="Search Menu..." />
          </div>

          <div className={styles.sidebarHash}>
            <div className={styles.sidebarLinks}>
              <ul>
                {items.map((item, index) => {
                  const itemPath = `/${item.toLowerCase()}`; // Define the path for each item
                  const isActive = location.pathname === itemPath; // Check if the current path matches item path
                  return (
                    <li
                      key={index}
                      className={`${isActive ? styles.active : ""}`}
                    >
                      <img
                        src={itemIcons[item]}
                        alt={item}
                        className={styles.icon}
                      />
                      <Link
                        to={itemPath}
                        className={`${styles.link} ${styles.hide}`}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
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
              <Footer />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;

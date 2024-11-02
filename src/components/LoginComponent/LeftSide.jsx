import React from "react";
import styles from "../../styles/LoginComponentStyles/Login.module.css";
import logo from "./images/logo.png";
import lock from "./images/lock.png";
import google from "./images/google.png";
import fb from "./images/fb.png";
import apple from "./images/apple.png";
import Footer from "../ReusableComponents/Footer";
import { Link } from "react-router-dom";

function LeftSide() {
  return (
    <div className={styles.leftSide}>
      <img src={logo} alt="Gym logo" className={styles.logo} />
      <p>Managing made delightful. Login now to experience it.</p>
      <form className={styles.loginForm}>
        <fieldset>
          <legend>Enter Email Address</legend>
          <input type="email" placeholder="jhon324@gmail.com" />
        </fieldset>
        <div className={styles.passwordField}>
          <img src={lock} alt="Lock" />
          <input type="password" placeholder="Password" />
        </div>
        <p>Forgot Password?</p>
        <div className={styles.checkbox}>
          <input type="checkbox" />
          <p>Remember me</p>
        </div>
        <div className={styles.btn}>
          <Link to={"/verification"} className={styles.verifyBtn}>
            Login
          </Link>
        </div>
        <div className={styles.SignUp}>
          <hr />
          <p>
            Don’t have an account? <span>Sign Up</span>
          </p>
          <hr />
        </div>
      </form>
      <div className={styles.socialIcons}>
        <img src={google} alt="Google logo" />
        <img src={fb} alt="Facebook logo" />
        <img src={apple} alt="Apple logo" />
      </div>
      <Footer />
    </div>
  );
}

export default LeftSide;

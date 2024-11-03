import React from "react";
import styles from "../../styles/LoginComponentStyles/Login.module.css";
import logo from "./images/logo.png";
import google from "./images/google.png";
import fb from "./images/fb.png";
import apple from "./images/apple.png";
import Footer from "../ReusableComponents/Footer";
import { Link } from "react-router-dom";

function LeftSide() {
  return (
    <div className={styles.leftSide}>
    <img src={logo} alt="Gym logo" />
    <p>Managing made delightful. Login now to experience it.</p>
    <form className={styles.loginForm}>
        <fieldset>
            <legend>Enter Email Address</legend>
            <input type="email" placeholder='abc@gmail.com'/>
        </fieldset>
        <fieldset>
            <legend>Password</legend>
            <input type="password"  placeholder='Password'/>
        </fieldset>
        <div className={styles.frgtPass}>Forgot Password?</div>
        <div className={styles.rmberMe}><input type="checkbox" /><span>Remember Me</span></div>
      <Link to={'/verification'}className={styles.loginBtn} >Login</Link>
       
    </form>
    <div className={styles.signUp}>
            <hr />
            <p>Don’t have an account? <span>Sign Up</span></p>
            <hr />
        </div>

  <div className={styles.socialIcons}>
    <div className={styles.icons}>
        <img src={google} alt="Google logo" />
    </div>
    <div className={styles.icons}>
        <img src={fb} alt="Facebook Logo" />
    </div>
    <div className={styles.icons}>
        <img src={apple} alt="Apple logo" />
    </div>
  </div>
  <div className={styles.loginFooter}>
    <Footer/>
  </div>
    </div>
  );
}

export default LeftSide;

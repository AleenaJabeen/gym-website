import React from "react";
import styles from "../../styles/VerificationStyles/Verification.module.css";
import logo from "../LoginComponent/images/logo.png";
import { Link } from "react-router-dom";
import Footer from "../ReusableComponents/Footer";
function VerificationForm() {
  return (
    <div className={styles.verificationForm}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.text}>
        <h2>Verification Code</h2>
        <p>
          We have sent you a verification code on your give email address and
          phone number +92*********
        </p>
      </div>
      <div className={styles.verifyCode}>
        <div className={styles.code}>
          <input type="text" maxLength="1" placeholder="*" />
        </div>
        <div className={styles.code}>
          <input type="text" maxLength="1" placeholder="*" />
        </div>
        <div className={styles.code}>
          <input type="text" maxLength="1" placeholder="*" />
        </div>
        <div className={styles.code}>
          <input type="text" maxLength="1" placeholder="*" />
        </div>
      </div>
      <p className={styles.resend}>Resend Code?</p>
      <p className={styles.chngCode}>Change Phone Number or Email Address</p>
      <Link to={"/dashboard"} className={styles.btn}>
        Confirm
      </Link>
      <Footer />
    </div>
  );
}

export default VerificationForm;

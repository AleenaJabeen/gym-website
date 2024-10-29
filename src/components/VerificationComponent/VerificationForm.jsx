import React from 'react';
import styles from '../../styles/VerificationStyles/Verification.module.css';
import Button from '../ReusableComponents/Button';
import logo from '../LoginComponent/images/logo.png';
import pin from './images/steric.png'
import Footer from '../ReusableComponents/Footer';
function VerificationForm() {
  return (
    <div className={styles.verificationForm}>
      <img src={logo} alt="Logo"  className={styles.logo}/>
      <div className={styles.text}>
        <h2>Verification Code</h2>
        <p>We have sent you a verification code on your give email address and phone number  +92*********</p>
      </div>
      <div className={styles.verifyCode}>
        <div className={styles.code}><img src={pin} alt="pin" /></div>
      </div>
      <p className={styles.resend}>Resend Code?</p>
      <p className={styles.chngCode}>Change Phone Number or Email Address</p>
      <Button title="Confirm"/>
      <Footer/>
    </div>
  )
}

export default VerificationForm

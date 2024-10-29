import React from 'react';
import styles from '../../styles/VerificationStyles/Verification.module.css';
import RightSide from '../LoginComponent/RightSide';
import image from './images/image.png'
import VerificationForm from './VerificationForm';

function Verfication() {
  return (
    <div className={styles.verification}>
      <div className={styles.wrapper}>
       <VerificationForm/>
        <RightSide img={image}/>
      </div>
    </div>
  )
}

export default Verfication

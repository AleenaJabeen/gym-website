import React from 'react';
import styles from '../../styles/ReusableStyles/Reusable.module.css'

function Button(props) {
  return (
    <>
      <button className={styles.btn}>{props.title}</button>
    </>
  )
}

export default Button

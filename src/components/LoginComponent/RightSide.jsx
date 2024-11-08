import React from "react";
import styles from "../../styles/LoginComponentStyles/Login.module.css";
import quote from "./images/quote.png";

function RightSide({ img }) {
  return (
    
    <div className={styles.rightSide}>
    <img src={img} alt="Image of Man exercising" />
    <div className={styles.quoteBlock}>
        <img src={quote} alt="Quotation Mark" />
        <p>Find reliable and highly rated babysitters that fit your schedule effortlessly. </p>
    </div>
    </div>
  );
}

export default RightSide;

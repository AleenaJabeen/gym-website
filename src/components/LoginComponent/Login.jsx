import React from "react";
import styles from "../../styles/LoginComponentStyles/Login.module.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import image from "./images/image.png";

function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <LeftSide />
        <RightSide img={image} />
      </div>
    </div>
  );
}

export default Login;

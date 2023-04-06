import React from 'react'
import styles from "./HtmlHeader.module.css"

const HtmlHeader = () => {
  return (
    <div className={styles.webHeader}>
      <div className={styles.logo}>
       <img src="images/Logo1282.png" className={styles.logo} alt="Logo"></img>
      </div>
    </div>
  );
};

export default HtmlHeader
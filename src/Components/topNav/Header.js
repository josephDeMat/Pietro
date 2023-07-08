import React from "react";
import styles from "./Header.module.css";

const Header = () => {

    const hiwClicked = () =>{
        console.log('hiw clicked')
    }

    const aboutClicked = () =>{
        console.log('about clicked')
    }

    const loginClicked = () =>{
        console.log('login clicked')
    }

  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>sas logo</h1>
      <button className={styles.button} onClick={hiwClicked}> how it works </button>
      <button className={styles.button} onClick={aboutClicked}> about</button>
      <button className={styles.button} onClick={loginClicked}> login</button>
    </div>
  );
};

export default Header;

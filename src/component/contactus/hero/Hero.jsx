import React from 'react'
import styles from "./Hero.module.css"

function Hero() {
  return (
    <div className={styles.Hero}>
        <div className={styles.image}>
          <img src="https://i.pinimg.com/736x/94/84/1e/94841e4bd098959bf7173166f7e67495.jpg"/></div>
        <div className={styles.Name}>Contact Us </div>
        {/* <div className={styles.sentence}>Devcons Software Solution..!!</div> */}
        <div className={styles.Line}>We bring a personal and effective approach to every project we work on.</div>
          
    </div>
  )
}

export default Hero

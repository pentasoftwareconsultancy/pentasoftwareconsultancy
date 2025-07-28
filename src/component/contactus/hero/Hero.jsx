import React from 'react'
import styles from "./Hero.module.css"

function Hero() {
  return (
    <div className={styles.Hero}>
        <div className={styles.image}>
          <img src="https://i.pinimg.com/1200x/6a/9a/66/6a9a661a89881207fcc24bf0c16e5bf5.jpg"/></div>
        <div className={styles.Name}>Contact Us </div>
        {/* <div className={styles.sentence}>Devcons Software Solution..!!</div> */}
        <div className={styles.Line}>We bring a personal and effective approach<br/> to every project we work on.</div>
          
    </div>
  )
}

export default Hero

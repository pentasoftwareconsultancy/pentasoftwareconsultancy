import React from 'react'
import styles from "./Hero.module.css"

function Hero() {
  return (
    <div className={styles.Hero}>
        <div className={styles.image}>
          <img src="https://pngtree.com/freebackground/simple-background-banner-contact-us_226318.html"/></div>
        <div className={styles.Name}>Contact Us </div>
        {/* <div className={styles.sentence}>Devcons Software Solution..!!</div> */}
        <div className={styles.Line}>We bring a personal and effective approach to every project we work on.</div>
          
    </div>
  )
}

export default Hero

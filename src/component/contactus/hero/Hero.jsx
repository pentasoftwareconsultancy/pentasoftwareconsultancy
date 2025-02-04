import React from 'react'
import styles from "./Hero.module.css"

function Hero() {
  return (
    <div className={styles.Hero}>
        <div className={styles.image}>
          <img src="https://i.pinimg.com/736x/e7/c1/ce/e7c1ce896b06f7a917a1a441feaef538.jpg"/></div>
        <div className={styles.Name}>Contact Us </div>
        {/* <div className={styles.sentence}>Devcons Software Solution..!!</div> */}
        <div className={styles.Line}>We bring a personal and effective approach to every project we work on.</div>
          
    </div>
  )
}

export default Hero

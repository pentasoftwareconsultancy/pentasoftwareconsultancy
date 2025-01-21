import React from 'react'
import styles from "./Hero.module.css"

function Hero() {
  return (
    <div className={styles.Hero}>
        <div className={styles.image}>
            <img src="https://i.pinimg.com/736x/41/23/05/41230590a0ff35dd78f8856bd993affb.jpg"/>
        </div>
       <div className={styles.Name}>APPLICATION SERVICES</div>
    </div>
  )
}

export default Hero

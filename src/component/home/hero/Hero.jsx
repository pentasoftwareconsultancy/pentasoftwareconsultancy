import React from 'react'
import styles from "./Hero.module.css"

function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.Line}>
      Penta is a global leader in IT services
      </div>
      <div className={styles.sentence}>
      digital and business solutions that partners with its clients to simplify, strengthen and transform their businesses.<br/>
      We ensure the highest levels of certainty and satisfaction through a deep-set commitment to our client
      </div>
      <div className={styles.React}>
      <div className={styles.Button}>
       Start a Project
      </div>
      <div className={styles.Button1}>
       Our Work
      </div>
      </div>
       <div className={styles.video}>
                     <video autoPlay muted width="100%">
                       <source src="https://videos.pexels.com/video-files/6774633/6774633-uhd_2560_1440_30fps.mp4" />
                     </video>
                 </div>
    </div>
  )
}

export default Hero

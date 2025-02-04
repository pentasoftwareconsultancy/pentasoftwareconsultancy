import React from 'react'
import styles from "./Hero.module.css"


function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.Section1}>
      <div className={styles.image}>
      <img src="https://i.pinimg.com/736x/e2/a9/a7/e2a9a7de4b728e985cfd7b430325aebf.jpg"/>
      </div>
      {/* <div className={styles.box}>
     
    </div> */}
      <div className={styles.line}>
        CREATE  SOFTWARE SOLUTION..!!
      </div>
      <div className={styles.sent}>
        At your price Business traval solution
      </div>
     
      </div>
     
    </div>
  )
}

export default Hero


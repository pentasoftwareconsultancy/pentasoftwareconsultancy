import React from 'react'
import styles from "./Card.module.css"




function Card() {
  return (
    <div className={styles.Card}>
        <div className={styles.Section}>
        <div className={styles.Box}>
          
        </div>
        <div className={styles.Box1}>
        <div className={styles.Line}>Penta Software Consultancy Services </div>
            <div className={styles.sent}>
        Penta Software Consultancy Services(I) Pvt Ltd (PSCS) is a Global leader in IT services,<br/>
        Digital and business solutions that partners with its clients to simplify,<br/>
        strengthen and transform their businesses. We ensure the highest levels of<br/>
        certainty and satisfaction through a deep-set commitment to our clients, <br/>
        comprehensive industry expertise and a global network of innovation and delivery <br/>
        canters. PSCS has been recognized by Brand Finance as one of the Big 4 Global IT<br/>
        Services Brands. Our continued industry-leading growth is a testament<br/>
        to the certainty our clients experience every day.</div>
        </div>
    </div>    
    </div>
  )
}

export default Card

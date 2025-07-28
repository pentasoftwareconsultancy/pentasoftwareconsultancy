import React from 'react';
import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.Card}>
        <div className={styles.VideoContainer}>
          <video className={styles.Video} autoPlay loop muted playsInline>
            <source src="https://devconsoftware.com/assets/img/3209211-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className={styles.Content}>
          <h2 className={styles.Title}>Penta Software Consultancy Services</h2>
          <p className={styles.Description}>
            Penta Software Consultancy Services(I) Pvt Ltd (PSCS) is a Global leader in IT services,
            Digital and business solutions that partners with its clients to simplify,
            strengthen and transform their businesses. We ensure the highest levels of
            certainty and satisfaction through a deep-set commitment to our clients,
            comprehensive industry expertise and a global network of innovation and delivery
            centers. PSCS has been recognized by Brand Finance as one of the Big 4 Global IT
            Services Brands. Our continued industry-leading growth is a testament
            to the certainty our clients experience every day.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
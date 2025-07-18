import React from 'react';
import styles from "./RPA.module.css"
import RPAData from './rpa/RPAData';

function RPA() {
  
  return (
    <div className={styles.RPA}> 
      <div className={styles.box}>
        <div className={styles.image}>
          <img src="https://i.pinimg.com/1200x/18/4e/1c/184e1c21132513a91cc4782b769a9d80.jpg" />
        </div>
        <div className={styles.Name}>With RPA, software users create software robots, or “bots”, that can learn, mimic, and then execute rules-based business processes.</div>
        <div className={styles.sent}>Robotic Process Automation (RPA) is software technology <br/>that’s easy for anyone to use to automate digital tasks.</div>

        <div className={styles.Section}>
          <div className={styles.Section1}>
            <div className={styles.image1}>
              <img src="https://i.pinimg.com/736x/ac/0d/b5/ac0db576e93585f04a1a8c7e5f3939e0.jpg" />
            </div>
            <div className={styles.data}>
            <div className={styles.data1}>What can RPA do for me</div>
            <div className={styles.data2}>
             With RPA, software users create software robots, or “bots”, that can learn, mimic, and then execute rules-based business processes. RPA 
             automation enables users to create bots by observing human digital actions. Show your bots what to do, then let them do the work. Robotic Process Automation software bots can interact with any application or system the same way people do—except that RPA bots can operate around the clock, nonstop, much faster and with 100% reliability and precision.
             <br/><br/>Discover and document processes to accelerate automation all in a single intelligent automation platform
            </div>
            </div>
          </div>

          <div className={styles.Section2}>
            <div className={styles.cloud}>
              Following are the key business Goals achieved by using the Service Cloud
            </div>
            <div className={styles.Box}>
              {RPAData.map((feature, index) => (
                <div key={index} className={styles[`Box${index + 1}`]}>
                  <div className={styles[`Title${index + 1}`]}>{feature.title}</div>
                  <div className={styles[`dis${index + 1}`]}>{feature.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className={styles.Section3}>
          <div className={styles.No}>For More Information To Contact US</div>
          <div className={styles.No1}>
            <div className={styles.No2}>
              <div className={styles.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7563.012036084115!2d73.7924737861964!3d18.596296398765094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b99f72cd3403%3A0xbe5c15b8aa9ba6e5!2sDTDC%20COURIER%20SERVICES!5e0!3m2!1sen!2sin!4v1737458215624!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default RPA;


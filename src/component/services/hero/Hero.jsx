import React from 'react';
import styles from "./Hero.module.css";
import { PiGenderIntersexFill } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { FaCreativeCommons } from "react-icons/fa";
import { SiSecurityscorecard } from "react-icons/si";

function Hero() {
  return (
    <div className={styles.Hero}>
      {/* Background image container - only addition */}
      <div className={styles.backgroundImageContainer}>
        <img 
          src="https://i.pinimg.com/736x/2d/a1/01/2da1016a3fca7c352c878f3bbbcc26c9.jpg" 
          // alt="background" 
          className={styles.backgroundImage}
        />
      </div>
      
      {/* Your existing code remains completely unchanged below */}
      <div className={styles.image}>
        <div className={styles.gradientBackground}></div>
        <div className={styles.Line}></div>
        <div className={styles.Line1}>
          Penta is a global leader in IT services..!!
        </div>
        <div className={styles.Line3}>
          Penta Software Consultancy Services(I) Pvt Ltd (PSCS) is a Global leader<br/>
          in IT services, Digital and business solutions that partners with its clients <br/>
          to simplify, strengthen and transform their businesses.
        </div>
        <div className={styles.box}>
          <div className={`${styles.card} ${styles.card1}`}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.logo1}><PiGenderIntersexFill size={80}/></div>
                <div className={styles.Name1}>strategy</div>
              </div>
              <div className={styles.cardBack}>
                <div className={styles.No1}>Agile model to make higher quality software. Manual and Automation testing on every aspect of software applications.</div>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.card2}`}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.logo2}><GrTechnology size={80} /></div>
                <div className={styles.Name2}>Technology</div>
              </div>
              <div className={styles.cardBack}>
                <div className={styles.No2}>MVC Architecture technology which help to rapid Software Application Development.AngularJS and Jquery to make design effective.</div>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.card3}`}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.logo3}><FaCreativeCommons size={80}/></div>
                <div className={styles.Name3}>Creativity</div> 
              </div>
              <div className={styles.cardBack}>
                <div className={styles.No3}>Creative animation and graphics which leads business growth. Logo and graphics help your bussiness to achieve your goal.</div>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.card4}`}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.logo4}><SiSecurityscorecard size={80}/></div>
                <div className={styles.Name4}>Security</div>
              </div>
              <div className={styles.cardBack}>
                <div className={styles.No4}>Highly encrypted code that lead secure operation on system is the first priority that SMART SOFTWARE SERVICES offer you.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
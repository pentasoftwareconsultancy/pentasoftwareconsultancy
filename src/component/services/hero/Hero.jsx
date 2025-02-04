import React from 'react'
import styles from "./Hero.module.css"
import { PiGenderIntersexFill } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { FaCreativeCommons } from "react-icons/fa";
import { SiSecurityscorecard } from "react-icons/si";


function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.image}>
        <img src="https://promwad.com/sites/default/files/web-development_0.jpg"/>
        <div className={styles.Line}></div>
        <div className={styles.Line1}>
        Penta is a global leader in IT services..!!
        </div>
        <div className={styles.Line3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
            Quae numquam nulla nobis laboriosam sint alias inventore? <br/>
            Illo sapiente totam reiciendis magnam vitae voluptas.<br/>
        </div>
        <div className={styles.box}>
            <div className={styles.box1}>
                <div className={styles.logo1}><PiGenderIntersexFill size={80}/></div>
                <div className={styles.Name1}>strategy</div>
                <div className={styles.No1}>Agile model to make higher quality <br/>
                software. Manual and Automation <br/>testing on every aspect of <br/>software applications.</div>
            </div>

            <div className={styles.box2}>
                 <div className={styles.logo2}><GrTechnology size={80} /></div>
                <div className={styles.Name2}>Technology</div>
               <div className={styles.No2}>MVC Architecture technology<br/>
               which help to rapid Software<br/>Application Development.<br/>
                AngularJS and Jquery to <br/>make design effective.</div>
            </div>

            <div className={styles.box3}>
                <div className={styles.logo3}><FaCreativeCommons size={80}/></div>
                <div className={styles.Name3}>Creativity</div> 
                <div className={styles.No3}>Creative animation and graphics<br/>
                which  leads business growth. <br/>
                Logo and graphics help your <br/>bussiness to achieve your goal.</div>
            </div>

            <div className={styles.box4}>
                <div className={styles.logo4}><SiSecurityscorecard size={80}/></div>
                <div className={styles.Name4}>Security</div>
                <div className={styles.No4}>Highly encrypted code that lead<br/> secure operation on system is the<br/>
                 first priority that SMART <br/>SOFTWARE SERVICES offer you.</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

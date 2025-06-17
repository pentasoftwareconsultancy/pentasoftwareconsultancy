import React from 'react'
import styles from "./Footer.module.css"
import { BsLinkedin } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
  return (
    <div className={styles.Footer}>
       <div className={styles.Section}>
          <div className={styles.Section1}>
             <div className={styles.Name}>Penta Software Consultancy<br/>Services(I) Pvt Ltd</div>
             <div className={styles.Line}>Penta Software Consultancy Services(I) Pvt Ltd <br/>
             (PSCS) is a Global leader in IT services, Digital and <br/>
             business solutions that partners with its clients to <br/>
             simplify, strengthen and transform their businesses. <br/>
             We ensure the highest levels of certainty and satisfaction<br/>
             through a deep-set commitment to our clients, <br/>comprehensive
             industry expertise and a global network <br/>
             of innovation and delivery canters</div>
          </div>
        
              <div className={styles.Section3}>
               <div className={styles.Name3}>Contacts</div>
                <div className={styles.box1}>
                <div className={styles.logo1}><IoLocation size={20}/></div>
                <div className={styles.Address}>Survey No. 21, Govind Garden, Office No. 102-C,<br/>
                 First Floor Ganesham Commercial A, 18-21/24,<br/>
                BRTS Road, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027
                </div></div>
                <div className={styles.box2}>
                <div className={styles.logo2}><FaPhoneAlt size={20} /></div>
                <div className={styles.No}>+91 7066541234 / 8329498294</div>
                </div>
                <div className={styles.box3}>
                <div className={styles.logo3}><GrMail size={20}/></div>
                <div className={styles.Mail}>
                  hr@pentasoftwarereconsultancy.com</div>
               
              </div>

        </div>
       
        <div className={styles.Section2}>
           <div className={styles.line}> </div>
           <div className={styles.No}>
           
           <div className={styles.Logo}><BsLinkedin  size={20} />
            <FaFacebookSquare size={20}/><IoLogoYoutube size={20} />
            <FaInstagramSquare size={20}/></div></div>
        </div>
        <div className={styles.Copy}>Copyright © 2024 - All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer

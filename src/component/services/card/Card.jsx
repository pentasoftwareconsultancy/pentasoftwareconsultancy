import React from 'react'
import styles from "./Card.module.css"
import { GrWindows } from "react-icons/gr";
import { SiJsonwebtokens } from "react-icons/si";
import { FaMedapps } from "react-icons/fa6";
import { IoLogoIonic } from "react-icons/io5";
import { SiBrandfolder } from "react-icons/si";
import { CgPlayPauseO } from "react-icons/cg";
import { MdOutlineWebhook } from "react-icons/md";
import { SiDigitalocean } from "react-icons/si";



function Card() {
  return (
    <div className={styles.Card}> 
       <div className={styles.Section}>
        <div className={styles.word}>Our Services</div>
        <div className={styles.Section1}>
          <div className={styles.Box}>
             <div className={styles.Box1}>
                <div className={styles.Logo1}><GrWindows size={50}/></div>
                <div className={styles.Name1}>Software Designing</div>
                <div className={styles.Line1}>We provide all commercial <br/>
                or organizational software <br/>
                development service at minimal cost.</div>
              </div>

              <div className={styles.Box2}>
                <div className={styles.Logo2}><SiJsonwebtokens size={50}/></div>
                <div className={styles.Name2}>Web Designing</div>
                <div className={styles.Line2}>We make web designing responsive so <br/>
                you can use your website on<br/>
                all modern devices like <br/>
                smartphone, tablet, or desktop.</div>
             </div>
              
             <div className={styles.Box3}>
                <div className={styles.Logo3}><FaMedapps size={50}/></div>
                <div className={styles.Name3}>App Development</div>
                <div className={styles.Line3}>If you want to expand your<br/>
                business with android app, <br/>
                SMART SOFTWARE SERVICES is<br/> the right thing.</div>
             </div>

             <div className={styles.Box4}>
                <div className={styles.Logo4}><IoLogoIonic size={50}/></div>
                <div className={styles.Name4}>Logo Designing</div>
                <div className={styles.Line4}>We have certified designer who <br/>
                make logo to keep in mind<br/> with company motto.</div>
             </div>
             </div>
        
        </div>


        <div className={styles.Section2}>
              <div className={styles.box}>
               <div className={styles.box1}>
                  <div className={styles.logo1}><SiBrandfolder size={50}/></div>
                  <div className={styles.name1}>Branding </div>
                  <div className={styles.line1}>Smart Software provide <br/>
                  branding service to <br/>growth your bussiness.</div>
              </div>

              <div className={styles.box2}>
                   <div className={styles.logo2}><CgPlayPauseO size={50}/></div>
                   <div className={styles.name2}>SEO</div>
                   <div className={styles.line2}>Our team help your <br/>bussiness with search
                   <br/> engine optimazation.</div>
              </div>

              <div className={styles.box3}>
                   <div className={styles.logo3}><MdOutlineWebhook size={50}/></div>
                   <div className={styles.name3}>Web Hosting  </div>
                   <div className={styles.line3}>Digital marketing is the right <br/>
                   solution for your bussiness<br/> then get back with us.</div>
              </div>

              <div className={styles.box4}>
                   <div className={styles.logo4}><SiDigitalocean size={50} /></div>
                   <div className={styles.name4}>Digital Marketing</div>
                   <div className={styles.line4}>We have certified designer <br/>
                   who make logo to keep <br/>in mind with company motto.</div>
              </div>
            </div>  
        </div>
       

       </div>
    </div>
  )
}

export default Card

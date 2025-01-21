import React from 'react'
import styles from "./Gallery.module.css"
import { IoMdArrowRoundForward } from "react-icons/io";
import { GiTwirlCenter } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { SiCoinmarketcap } from "react-icons/si";
import { MdOutlineAppRegistration } from "react-icons/md";



function Gallery() {
  return (
    <div className={styles.Gallery}>
      <div className={styles.section1}>
       <div className={styles.how}>
        HOW CAN WE HELP
       </div>
        <div className={styles.how2}>
            Special Outstanding Services<br/>
            For Startuos Business
        </div>
           <div className={styles.style}>
              <div className={styles.Button}>
               View More Services <IoMdArrowRoundForward /> </div>    
            </div>
          <div className={styles.Con}>
            <div className={styles.Box}>
               <div className={styles.logo}><GiTwirlCenter size={30} /></div>
               <div className={styles.Word}>
                Enterpenurce  </div>
                <div className={styles.line}>
                A<br/>
                B<br/>C</div>
                <div className={styles.sent}>
                Learn More<FaArrowRight /></div>
            </div>
            <div className={styles.Box2}>
               <div className={styles.logo2}><RiJavaLine size={30}/>
               </div>
               <div className={styles.Word2}>
                Business plan  </div>
                <div className={styles.line2}>
                A<br/>
                B<br/>C</div>
                <div className={styles.sent2}> Learn More<FaArrowRight />
                </div>
            </div>

            <div className={styles.Box3}>
               <div className={styles.logo3}><SiCoinmarketcap size={30}/>
               </div>
               <div className={styles.Word3}>
                Capital Markets </div>
                <div className={styles.line3}>
                A<br/>
                B<br/>C</div>
                <div className={styles.sent3}> Learn More<FaArrowRight />
                </div>
            </div>

            <div className={styles.Box4}>
               <div className={styles.logo4}><MdOutlineAppRegistration  size={30}/> </div>
               <div className={styles.Word4}>
                StartUp </div>
                <div className={styles.line4}>
                A<br/>
                B<br/>C</div>
                <div className={styles.sent4}> Learn More<FaArrowRight />
                </div>
            </div>
      </div>
      </div>
    </div>
  )
}

export default Gallery

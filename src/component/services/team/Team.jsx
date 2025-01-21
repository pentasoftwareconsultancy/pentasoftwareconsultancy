import React from 'react'
import styles from "./Team.module.css"

function Team() {
  return (
    <div className={styles.Team}>
        <div className={styles.section}>
            <div className={styles.Section1}>
              <div className={styles.image1}>
                <img src="https://smallbizclub.com/wp-content/uploads/2022/06/bigstock-Diversity-Multiethnic-Team-Gro-446118545.jpg"/>
              </div>
              <div className={styles.Word1}>Top Skilled Team </div>
               <div className={styles.line1}>We are skilled in ASP.NET, MVC Architecure, Android<br/>
                Application Development, Web Application Development,<br/>
                 Logo Designing, SEO, Hosting and Graphics Designing.</div>
            </div>

            <div className={styles.Section2}>
              <div className={styles.image2}>
                <img src="https://media.licdn.com/dms/image/v2/D4D12AQEliMGQklwSaA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710880132022?e=2147483647&v=beta&t=7wg85gzDBdcV3TqP1gH6o3l8WEQKEMu3qKHbNiWzhgA"/>
              </div>
              <div className={styles.Word2}>Better Customer Support</div>
               <div className={styles.line2}>SMART Software Services offer you awesome support <br/>
               24/7. We always think “Customer is King” at very phase<br/>
               of software Application Development.</div>
            </div>

            <div className={styles.Section3}>
              <div className={styles.image3}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-NbuiagjyCb78PEiJwxgl4yrwRGPINRDSWGTIVXQziCv7jGEKijBarLuD9x_vV4M5pQ&usqp=CAU"/>
              </div>
              <div className={styles.Word3}>Beautiful Office Space</div>
               <div className={styles.line3}>Company has multiple ofiice locations in <br/>pune and every office is awesome for working<br/>
                in company or meeting with clients.</div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Team

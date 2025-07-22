import React from 'react'
import styles from "./Card.module.css"
import { FaWindows } from "react-icons/fa";
import { FaSalesforce } from "react-icons/fa6";
import { FaAws } from "react-icons/fa6";
import { ImDatabase } from "react-icons/im";
import { GiRobotAntennas } from "react-icons/gi";
import { IoLogoAndroid } from "react-icons/io5";
import { RiJavaFill } from "react-icons/ri";
import { MdSettingsApplications } from "react-icons/md";


function Card() {
  return (
    <div className={styles.Card}>
      {/* Top Sections */}
      <div className={styles.topContainer}>
        <div className={styles.box}>
          <div className={styles.logo}><FaWindows size={50} />
          </div>
          <div className={styles.Word}>Software Testing </div>
          <div className={styles.Line}>
            Automation testing is a process of changing any manual test <br/>case into the test scripts by using automation<br/> testing tools,  scripting or programming 
          </div>
          <div className={styles.Button}>Read More</div>
          </div>
        
        <div className={styles.box}>
          <div className={styles.logo}><FaSalesforce size={50} />
          </div>
          <div className={styles.Word}>Sales Force Services</div>
          <div className={styles.Line}>
            This part of the Salesforce platform is focused <br /> on providing support and help to the customers. This<br /> helps in retaining the customers.
          </div>
          <div className={styles.Button}>Read More</div>
        </div>

        <div className={styles.box}>
          <div className={styles.logo}><FaAws size={50}/></div>
          <div className={styles.Word}>AWS Services</div>
          <div className={styles.Line}>
            AWS has significantly more services, and<br /> more features within those services, <br /> than any other cloud provider–from<br /> infrastructure technologies
          </div>
          <div className={styles.Button}>Read More</div>
        </div>
      </div>
        <div className={styles.Container2}>
        <div className={styles.box}>
          <div className={styles.logo}><ImDatabase size={50} />
          </div>
          <div className={styles.Word}>Data Science & Machine learning</div>
          <div className={styles.Line}>
            Data science and machine learning are two concepts that<br /> fall within the field of technology and<br /> using data to further how we create and innovate.
          </div>
          <div className={styles.Button}>Read More</div>
        </div>
      

      
     
        <div className={styles.box}>
          <div className={styles.logo}><GiRobotAntennas size={50}/></div>
          <div className={styles.Word}>RPA (Robotics Processing Automation)</div>
          <div className={styles.Line}>
            With RPA, software users create software robots, or “bots”, that <br/>can learn, mimic, and then execute rules-based business processes.
          </div>
          <div className={styles.Button}>Read More</div>
        </div>

        <div className={styles.box}>
          <div className={styles.logo}><IoLogoAndroid size={50}/></div>
          <div className={styles.Word}>Apps Development (Android & iOS)
          </div>
          <div className={styles.Line}>
          Modern companies are seeking to expand<br/>their business into the digital world and more<br/>
           and more companies 
          </div>
          <div className={styles.Button}>Read More</div>
        </div>
      </div>

      <div className={styles.Container3}>
        <div className={styles.box}>
          <div className={styles.logo}><RiJavaFill size={55}/>
          </div>
          <div className={styles.Word}>Java Technlogy
          </div>
          <div className={styles.Line}>
          Java is a programming language and Java is high-level, class-based, object-oriented programming language computing platform first released by Sun<br/>
           Microsystems in 1995 (now owned by Oracle).
          </div>
          <div className={styles.Button}>Read More</div>
        </div>  

        <div className={styles.box}>
          <div className={styles.logo}><MdSettingsApplications size={50}/>  </div>
          <div className={styles.Word}>SAP Application Support
          </div>
          <div className={styles.Line}>
          Most SAP user companies are facing the<br/>challenge of managing their investments in<br/>
           SAP system successfully and professionally 
          </div>
          <div className={styles.Button}>Read More</div>
        </div>
  
        </div>
    </div>  
  );
}

export default Card;

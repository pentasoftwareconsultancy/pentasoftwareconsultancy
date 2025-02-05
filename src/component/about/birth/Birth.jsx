import React from 'react'
import styles from "./Birth.module.css"
import { SiJavascript } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoAndroid } from "react-icons/io5";
import { TbBrandMysql } from "react-icons/tb";
import { FaSalesforce } from "react-icons/fa";
import { TbBrandAws } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";


function Birth() {
  return (
    <div className={styles.Birth}>
      <div className={styles.Box}>
           <div className={styles.Sec}>
            <img src="https://pentasoftwareconsultancy.com/wp-content/uploads/2022/07/team-1.jpg"/>
           </div>
           <div className={styles.sec1}>
            <div className={styles.Name}>Our Birth</div>
            <div className={styles.Line}>
            Penta Software Consultancy Services(I) Pvt Ltd (PSCS) started with<br/> Application development and 
            maintenance support & services in year<br/>of 2015 and continuously growing in its marketshare<br/>
             and employment as well. The company started<br/> with 5 individuals and now it’s having 75+ satisfied <br/>
             employees and management staff.<br/><br/>
             The company started with web application development from HTML <br/>
             and made some websites using web application development tools <br/>
             now its has certified .NET developer and Android developers,Java<br/>
             ,software testing ,mobile testing ,salesforce ,AWS services & RPA</div>
           </div>
      </div>

      <div className={styles.Box1}>
            <div className={styles.Sec3}>
             <div className={styles.Name1}>One Year Later</div>
             <div className={styles.Line1}>After making some development applications, company <br/>
             started with dynamic web applications and software development<br/>
             using .NET, JAVA and Android app technology. It has certified.<br/>
             NET and android developers who takes care of every line of code.</div>
             </div>
             <div className={styles.Sec4}>
             <img src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/44543_440518.png"/>
             </div>
      </div>

      <div className={styles.Box3}>
           <div className={styles.Sec5}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0q_XZ9H6R2A0qgrfKaeaEI4s-oQ8_FoQE-w&s"/>
             </div>
            <div className={styles.Sec6}>
             <div className={styles.Name3}>Primary Skills</div>
             <div className={styles.Line3}>For making Application development with Microsoft technology <br/>
             &responsive website we use HTML5, CSS3, JQuerry, Bootstrap<br/>
              and ASP.NET. and for Android applications we use JDK, Java<br/>
              Servlet and advance android development tools. Company has <br/>
              graphics designer who makes logo and SEO specialist to make your<br/>
               website in top 10 on current search engines</div>
             </div>
        </div>

          <div className={styles.Box4}>
            <div className={styles.Sec7}>
             <div className={styles.Name4}>Penta Software Consultancy <br/>Services(I) Pvt Ltd (PSCS)</div>
             <div className={styles.Line4}> provide you quality software which make your business<br/> growth respectively.<br/><br/>
             Technology we use is as ASP.NET,JAVA MySQL, JQuerry, MVC<br/>
              Architecture, Android Development, Salesforce ,AWS Services,<br/>
              RPA,Power BI ,Machine Learning ,Python ,Data Science,<br/>
              SAP, Web Application Development</div>
             </div>
             <div className={styles.Sec8}>
             <img src="https://pentasoftwareconsultancy.com/wp-content/uploads/2022/07/serv3.jpg"/>
             </div>
          </div>
            
          <div className={styles.Box5}>
             <div className={styles.Sec9}>
             <img src="https://pentasoftwareconsultancy.com/wp-content/uploads/2022/07/team-2.jpg"/>
             </div>
             <div className={styles.Sec10}>
             <div className={styles.Name5}>Three years later</div>
             <div className={styles.Line5}>We have completed 146 project till date. We celebrate<br/>
             every festival. Company focus on employee’s growth<br/> as well it’s own</div>
             </div>
           </div>

          <div className={styles.Box6}>
            <div className={styles.Name6}>Our Skills</div>
            <div className={styles.Line6}>We are specialized in</div>

                 <div className={styles.section}>
                 <div className={styles.section1}>
                 <div className={styles.box1}><div className={styles.logo1}><SiJavascript size={30} /></div>
                 <div className={styles.No1}>ASP.Net (MVC)& <br/>JAVA Technlogy</div></div>

                 <div className={styles.box2}><div className={styles.logo2}><DiCss3 size={30}/></div>
                 <div className={styles.No2}>HTML + CSS + Bpootstrap<br/> + JQuerry + AngularJS</div></div>

                 <div className={styles.box3}><div className={styles.logo3}><IoLogoAndroid size={30}/></div>
                 <div className={styles.No3}>Android SDK, Java Servlet</div></div>

                 <div className={styles.box4}><div className={styles.logo4}><TbBrandMysql size={30}/></div>
                 <div className={styles.No4}>PL SQL, MySQL</div></div>
                </div>
                <div className={styles.section2}>
                  <div className={styles.box5}><div className={styles.logo5}><FaSalesforce size={30}/></div>
                    <div className={styles.No5}>Salesforce Services</div></div>

                  <div className={styles.box6}><div className={styles.logo6}><TbBrandAws size={30} /></div>
                  <div className={styles.No6}>AWS Services</div></div>

                  <div className={styles.box7}><div className={styles.logo7}><FaHtml5 size={30}/></div>
                  <div className={styles.No7}>Data Science & ML</div></div>

                  <div className={styles.box8}><div className={styles.logo8}><FaMobileAlt size={30}/></div>
                  <div className={styles.No8}>Application Testing &<br/>Mobile Testing .</div></div>
                </div>


              
          </div>
           
            
          </div>
    </div>
  )
}

export default Birth

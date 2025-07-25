import React from 'react';
import styles from "./SAPSupport.module.css";
import SPASupportData from './sapsupport/SAPSupportData';

function SAPSupport() {
  return (
    <div className={styles.SAPSupport}>
      <div className={styles.box}>
        <div className={styles.image}>
          <img src="https://i.pinimg.com/736x/15/f5/da/15f5da1013f5f5e3f4f12448685dfbf7.jpg" alt="SAP Application Support" />
        </div>
        <div className={styles.Name}>SAP Application Support</div>
        <div className={styles.sent}>
          Most SAP user companies are facing the challenge of managing their investments<br />
          in SAP system successfully and professionally.
        </div>

        <div className={styles.Section}>
          <div className={styles.Section1}>
            <div className={styles.image1}>
              <img src="https://i.pinimg.com/736x/51/d5/3a/51d53a52081d348328a1463e897a848d.jpg" alt="SAP Support Details" />
            </div>
            <div className={styles.data}>
              <div className={styles.Data}>What is SAP Application Support</div>
              <div className={styles.Data1}>
                Most SAP user companies are facing the challenge of managing their investments in SAP system successfully and professionally. No matter how mature the SAP eco-system is, companies find it difficult to cope with the following constraints.
              </div>
              <div className={styles.Data3}>

                <li>Regulatory Changes</li>
                <li>Changing business requirements</li>
                <li>Advances in technology</li>
                <li>Geographical implications</li>
                <li>Non-availability of internal IT personnel</li>
                <li>Limited skilled internal IT resources</li>
                <li>Budgetary constraints</li>

              </div>
            </div>
          </div>

          <div className={styles.Section2}>
            <div className={styles.cloud}>
              Automatics SAP Application Management Services (AMS) portfolio:
            </div>
            <div className={styles.Box}>
              <div className={styles.Box1}>
              <div className={styles.Title1}>SAP Basis Support services</div>
              <div className={styles.dis2}>
              SAP System monitoring
              SAP performance tuning
              SAP system sizing analysis
              Application Interface management
              Transport management
              User and security management
              Housekeeping jobs / operations
              Backup monitoring</div>
              </div>

              <div className={styles.Box2}>
                <div className={styles.Title2}>SAP Functional Support</div>
                <div className={styles.dis2}>Day to day operational SAP help desk / end user support
                                        Trouble shooting
                                        EDI monitoring and support
                                        Deployment of new SAP functionalities
                                        Functional updates / functional enhancements
                                        Testing of new / enhanced functionalities
                                        Deployment of new regulations as per statutory requirements
                                        Application Enhancement – Change management
                                        SAP end user training / documentation</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.value}>
          <div className={styles.value1}> Value addition through Automatic's SAP Managed Services:</div>
          <div className={styles.value2}>
            <ul>
         <li>Flexible and tailored Services delivery model</li>
         <li>  Multi-site, multi-lingual SAP support coverage across various time-zones</li>
         <li> SLA based and ITIL framework compliant services delivery</li>
         <li> Flexible and extended hours. The SAP managed services team is available as per your</li>
         <li> specific support requirements including a 24 X 7 support</li>
         <li>Leveraging our proven expertise from our engagement in various Customer Center Of Excellence engagements</li>
          <li> Allows you to focus on your core business activities while we act as your extended team and take up the ownership of smooth SAP system management.</li>
          <li>The team works closely with customer’s internal IT team and key users not only to take care of the routine support activities but also to deploy various</li>
          <li>The team works closely with customer’s internal IT team and key users not only to take care of the routine support activities but also to deploy various improvement/enhancement measured based on our experience.</li>
        <li>  Establish an Extended team to your internal IT team through partnership model.</li>
        <li>Fixed cost model. Managed services model provides you a fixed annual cost based on the defined services agreement.</li>
        <li> Reduced cost through offshore delivery model. No need to retain specialized teams.</li>
        <li>Extensive knowledge base. Our experienced team of consultants from across multiple industry verticals ensures that your organization benefits from the vast knowledge base.</li>
        <li>Reduced risk. A larger support team ensures that your system management is risk free and person independent.</li>
        <li> 24 X 7 Techno-Functional SAP Application support / SAP User Help Desk </li>
          </ul>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default SAPSupport;

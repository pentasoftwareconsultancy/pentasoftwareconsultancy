import React from 'react';
import styles from "./AWSServices.module.css"
import AWSServiceData from './awsservice/AWSServiceData';

function AWSService() {
  
  return (
    <div className={styles.AWSService}> 
      <div className={styles.box}>
        <div className={styles.image}>
          <img src="https://i.pinimg.com/736x/5b/99/19/5b99195b845d6a95cad4df34c0e6132c.jpg" />
        </div>
        <div className={styles.Name}>Cloud computing with AWS</div>
        <div className={styles.sent}>Amazon Web Services (AWS) is the world’s most comprehensive<br/>
         and broadly adopted cloud platform, offering over 200<br/> fully featured services from data centers globally. </div>

        <div className={styles.Section}>
          <div className={styles.Section1}>
            <div className={styles.image1}>
              <img src="https://i.pinimg.com/736x/34/16/90/341690eb33f2fd5749851cb031ac5a1f.jpg" />
            </div>
            <div className={styles.data}>
              <div className={styles.Data}>Cloud computing with AWS</div>
              <div className={styles.Data1}>Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted<br/>
               cloud platform, offering over 200 fullyfeatured services from data centers globally.Millions<br/>
               of customers—including the fastest-growing startups,largest enterprises, and leading governmentagencies—are using AWS to lower costs, become more agile, and innovate faster.</div>
              <div className={styles.Data2}>Most functionality</div>
              <div className={styles.Data3}>AWS has significantly more services, and more features within those<br/>
               services, than any other cloud provider–from infrastructure technologies<br/>
                like compute, storage, and databases–to emerging technologies, such as machine <br/>
                learning and artificial intelligence, data lakes and analytics, and Internet of Things.</div>
            </div>
          </div>

          <div className={styles.Section2}>
            <div className={styles.cloud}>
              Following are the key business Goals achieved by using the Service Cloud
            </div>
            <div className={styles.Box}>
              {AWSServiceData.map((feature, index) => (
                <div key={index} className={styles[`Box${index + 1}`]}>
                  <div className={styles[`Title${index + 1}`]}>{feature.title}</div>
                  <div className={styles[`dis${index + 1}`]}>{feature.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.Section3}>
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
        </div>
      </div>
    </div>
  );
}

export default AWSService;

import React from 'react'
import styles from "./DataScience.module.css"
import DataScienceData from './datascience/DataScienceData'


function DataScience() {
  return (
    <div className={styles.DataScience}>
        
      <div className={styles.box}>
        <div className={styles.image}>
          <img src="https://i.pinimg.com/736x/c3/f2/d1/c3f2d1bc42b1a65bfc44bf533df88d03.jpg" />
        </div>
        <div className={styles.Name}>Data Science vs. Machine Learning: What’s the Difference?</div>
        <div className={styles.sent}>What is the difference between data science and machine learning? Which potential career path is right for you? Find out more here.</div>

        <div className={styles.Section}>
          <div className={styles.Section1}>
            <div className={styles.image1}>
              <img src="https://i.pinimg.com/736x/5f/25/0f/5f250fcb00cb3a15f33122682dbf5c89.jpg" />
            </div>
          
           
              <div className={styles.data}>
                <div className={styles.Data}>What is Data Science& Machine learning</div>
                <div className={styles.Data1}>
                Data science and machine learning are two concepts that fall within the<br/>
                field of technology and using data to further how we create and innovate products,<br/>
                services, infrastructural systems, and more. Both correspond with career paths<br/>
                that are in-demand and high-earning.
                </div>
            </div>
          </div>

          <div className={styles.Section2}>
            <div className={styles.cloud}>
              Following are the key business Goals achieved by using the Service Cloud
            </div>
            <div className={styles.Box}>
              {DataScienceData.map((feature, index) => (
                <div key={index} className={styles[`Box${index + 1}`]}>
                  <div className={styles[`Title${index + 1}`]}>{feature.title}</div>
                  <div className={styles[`dis${index + 1}`]}>{feature.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className={styles.Section3}>
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
        </div> */}
      </div>
      
    </div>
  )
}

export default DataScience

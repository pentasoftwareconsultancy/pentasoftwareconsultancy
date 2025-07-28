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
                Data science and machine learning are two concepts that fall within the<br />
                field of technology and using data to further how we create and innovate products,<br />
                services, infrastructural systems, and more. Both correspond with career paths<br />
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

      </div>

    </div>
  )
}

export default DataScience

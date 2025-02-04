import React from 'react';
import styles from "./AppsDevelopment.module.css"
import AppsDevelopmentData from './appsdevelopment/AppsDevelopmentData';

function AppsDevelopment() {
  
  return (
    <div className={styles.AppsDevelopment}> 
      <div className={styles.box}>
        <div className={styles.image}>
        <img src="https://i.pinimg.com/736x/df/81/ff/df81ff756d7b232bf5e54a82e9fb3243.jpg" />
        </div>
        <div className={styles.Name}>Build your first app</div>
        <div className={styles.sent}>This part of Salesforce platform is focused This section
        describes how to build a simple Android app. First, you learn how 
        to create a “Hello, World!” project with Android Studio and run it. then, you
        create a new interface for the app that takes user input and switches to a new
        screen in the app to display it.on providing support and help to the customers.</div>

        <div className={styles.Section}>
          <div className={styles.Section1}>
            <div className={styles.image1}>
              
              <img src="https://i.pinimg.com/474x/cd/61/e5/cd61e5ccb86b3be6a10042d7c8bb4c29.jpg" />
            </div>
          
           
              <div className={styles.data}>
                <div className={styles.Data}>What are the main advantages of the Android application development?</div>
                <div className={styles.Data1}>
                Modern companies are seeking to expand their business into the digital<br/>
                world and more and more companies invest in the development of websites,<br/>
                 personal software and mobile applications. Mobile devices today are so <br/>
                 advanced that we pretty much carry mini computers in our pockets. Escalating<br/>
                 use of smartphones and tablets in recent years has made businesses increasingly<br/>
                invest in mobile applications,<br/><br/>
                significantly boosting revenue and causing substantial business growth. The most<br/>
                popular and widely used platforms for creating mobile applications are Android and <br/>
                iOS. Google Marketplace and App Store are the most visited digital markets. Companies<br/>
                 around the world already have their apps that make it easier for customers and <br/>
                 employees to work, and they also often bring significant revenue to their owners.</div>
            </div>
          </div>

          <div className={styles.Section2}>
            <div className={styles.cloud}>
            Advantages of android application development
            </div>
            <div className={styles.Box}>
              {AppsDevelopmentData.map((feature, index) => (
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
  );
}

export default AppsDevelopment ;

import React from 'react';
import styles from "./AppsDevelopment.module.css"
import AppsDevelopmentData from './appsdevelopment/AppsDevelopmentData';

function AppsDevelopment() {
  
  return (
    <div className={styles.AppsDevelopment}> 
      <div className={styles.box}>
        <div className={styles.image}>
        <img src="https://i.pinimg.com/1200x/36/06/04/36060420232fb6efb66cc7c0589b9162.jpg" />
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

        </div>
    </div>
  );
}

export default AppsDevelopment ;

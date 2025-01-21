import React from "react";
import styles from "./SoftwareTesting.module.css";
import softwareTestingData from "./softwaretestingdata/SoftwareTestingData";

     
function SoftwareTesting() {
  return (
    <div className={styles.SoftwareTesting}>
      <div className={styles.box}>
        <div className={styles.image}>
          <img src="https://i.pinimg.com/736x/7e/d7/f7/7ed7f7841fe7f473b238aeac3463e173.jpg" alt="Testing Comparison" />
        </div>
        <div className={styles.Line}>{softwareTestingData.title}</div>
        <div className={styles.sentece}>{softwareTestingData.subtitle}</div>
      </div>


      {softwareTestingData.sections.map((section, index) => (
        <div key={index} className={styles.section}>
          {section.image && (
            <div className={styles.Section1}>
              <div className={styles.image1}>
                <img src={section.image} alt="Section Image" />
              </div>
            </div>
          )}
          <div className={styles.Section2}>
            <div className={styles.info}>
              {section.description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>
            {section.disadvantages && (
              <div className={styles.Line1}>
                {section.disadvantages.map((disadvantage, i) => (
                  <p key={i}>{disadvantage}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      
      <div className={styles.box4}>
        <div className={styles.Head}>{softwareTestingData.comparison.title}</div>
        <div className={styles.box5}>
          {softwareTestingData.comparison.parameters.map((param, index) => (
            <div key={index} className={styles[`box${index + 6}`]}>
              <div className={styles.Word5}>{param.name}</div>
              <div className={styles.Line4}>
              Definition<br/>Processing time  <br/>Exploratory Testing
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SoftwareTesting;

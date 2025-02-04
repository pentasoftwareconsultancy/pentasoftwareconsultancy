import React from 'react';
import styles from "./Info.module.css";
import InfoData from './info/InfoData';

const Info = () => {
  // Data array for sections

  return (
    <div className={styles.Info}>
      {/* Render first 4 sections */}
      <div className={styles.Section}>
        {InfoData.slice(0, 4).map((section, index) => (
          <div key={index} className={styles[`section${index + 1}`]}>
            <div className={styles[`Name${index + 1}`]}>{section.name}</div>
            <div className={styles[`Line${index + 1}`]}>{section.description}</div>
          </div>
        ))}
      </div>

      {/* Render remaining 4 sections */}
      <div className={styles.Box1}>
        {InfoData.slice(4).map((section, index) => (
          <div key={index + 4} className={styles[`section${index + 5}`]}>
            <div className={styles[`Name${index + 5}`]}>{section.name}</div>
            <div className={styles[`Line${index + 5}`]}>{section.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;

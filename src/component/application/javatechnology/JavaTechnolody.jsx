import React from 'react';
import styles from "./javatechnology.module.css";
import JavaTechnologyData from './javatechnology/JavaTechonologyData';

// Data for Java features

const JavaTechnology = () => {
  return (
    <div className={styles.JavaTechnology}>
      <div className={styles.Section}>
        {/* Main content sections */}
        <div className={styles.Box}>
          <div className={styles.image}>
            <img src="https://i.pinimg.com/736x/03/11/8d/03118dc0fb3049e18f97b6ac2b36cd8f.jpg" alt="Java Primary" />
          </div>
          <div className={styles.Name}>The primary objective of Java programming</div>
          <div className={styles.Line}>
            Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved from humble beginnings to power a large share of today’s digital world, by providing the reliable platform upon which many services and applications are built. New, innovative products and digital services designed for the future continue to rely on Java, as well.
          </div>
        </div>

        <div className={styles.Box1}>
          <div className={styles.image1}>
            <img src="https://i.pinimg.com/736x/ce/70/7a/ce707a6fe43cf83997f720716eff28b4.jpg" alt="Java Technology" />
          </div>
          <div className={styles.Box2}>
            <div className={styles.Name1}>What is Java technology and why do I need it?</div>
            <div className={styles.Line1}>
              Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved from humble beginnings to power a large share of today’s digital world, by providing the reliable platform upon which many services and applications are built. New, innovative products and digital services designed for the future continue to rely on Java, as well.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Section1}>
        {/* Map over javaFeatures to display dynamic content */}
        {JavaTechnologyData.map((feature, index) => (
          <div key={index} className={styles.No}>
            <div className={styles.Title}>{feature.title}</div>
            <div className={styles.des}>{feature.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JavaTechnology;

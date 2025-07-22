import React, { useState, useEffect } from 'react';
import styles from './Solution.module.css';
import { Link } from 'react-router-dom';

function Solution() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images for the carousel
  const images = [
    "https://www.greencubes.co.in/wp-content/uploads/2023/07/full-service-web-design-company.png",
    "https://i.pinimg.com/736x/b3/33/48/b33348c363142029f846acbfd54f9158.jpg",
    "https://i.pinimg.com/736x/3f/03/e3/3f03e3729367070cc115dd539f3795f3.jpg",
    "https://i.pinimg.com/736x/84/f9/bf/84f9bfeb52021281903a703d5d589a88.jpg",
    "https://i.pinimg.com/1200x/ef/15/01/ef1501ba923aa86850b08f3a1b05e13e.jpg"
  ];

  // Counter animations
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev >= 730 ? 730 : prev + 1);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount2(prev => prev >= 198 ? 198 : prev + 1);
    }, 15);
    return () => clearInterval(interval);
  }, []);

  // Image carousel animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.Solution}>
      <div className={styles.Container}>
        <div className={styles.Section}>
          <div className={styles.Web}>www.Devcon.com</div>
          
          <h1 className={styles.Line}>
            <span className={styles.Highlight}>We Provide IT Solution</span> & Services for any Startup
          </h1>
          
          <div className={styles.Sentence}>
            We are architects of innovation, trailblazers of technological
            advancement, and partners in your success. As a dynamic and
            forward-thinking organization.
          </div>

          <div className={styles.StatsContainer}>
            <div className={styles.StatItem}>
              <div className={styles.CounterWrapper}>
                <span className={styles.Counter}>{count}</span>
                <span className={styles.Plus}>+</span>
              </div>
              <div className={styles.CounterText}>Successfully Projects</div>
              <div className={styles.StatBar}></div>
            </div>
            
            <div className={styles.StatItem}>
              <div className={styles.CounterWrapper}>
                <span className={styles.Counter}>{count2}</span>
                <span className={styles.Plus}>+</span>
              </div>
              <div className={styles.CounterText}>Happy Clients</div>
              <div className={styles.StatBar}></div>
            </div>
          </div>
          
          <div className={styles.ButtonContainer}>
            <Link to="/about" className={styles.MoreButton}>
              More About
              <span className={styles.ButtonArrow}>→</span>
            </Link>
            <div className={styles.ButtonShadow}></div>
          </div>
        </div>
        
        <div className={styles.ImageSection}>
          <div className={styles.ImageContainer}>
            {images.map((img, index) => (
              <div 
                key={index}
                className={`${styles.ImageSlide} ${index === currentImageIndex ? styles.Active : ''}`}
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            ))}
            <div className={styles.ImageOverlay}></div>
            <div className={styles.ImageDecoration}></div>
          </div>
        </div>
      </div>
      
      {/* Floating animated elements */}
      <div className={styles.FloatingCircle1}></div>
      <div className={styles.FloatingCircle2}></div>
      <div className={styles.FloatingTriangle}></div>
    </div>
  );
}

export default Solution;
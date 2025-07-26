import React, { useState, useEffect } from 'react';
import styles from "./Hero.module.css";

const Hero = () => {
  const images = [
    {
      url: "https://i.pinimg.com/736x/fd/f7/68/fdf768b8e85144c668bd131c2269abb0.jpg",
      line: "WE'RE A CREATIVE I.T. FIRM",
      sentence: "At your price Business travel solution"
    },
    {
      url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      line: "INNOVATIVE SOLUTIONS",
      sentence: "Custom software for your business needs"
    },
    {
      url: "https://i.pinimg.com/736x/d2/e0/93/d2e0938bb5b399057db965e32d41e2bb.jpg",
      line: "DIGITAL TRANSFORMATION",
      sentence: "Leading your business into the future"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); // Matches transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={styles.hero} aria-label="Image slider">
      <div className={styles.imageContainer}>
        {images.map((image, index) => (
          <img
            key={image.url}
            src={image.url}
            alt={`Slide ${index + 1}`}
            className={`${styles.slideImage} ${
              index === currentIndex ? styles.active : ''
            }`}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      <div className={`${styles.content} ${isTransitioning ? styles.fadeOut : ''}`}>
        <h1 className={styles.headline}>{images[currentIndex].line}</h1>
        <p className={styles.subtext}>{images[currentIndex].sentence}</p>
      </div>
    </section>
  );
};

export default Hero;
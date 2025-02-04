import React, { useEffect } from 'react';
import styles from "./Hero.module.css";

function Hero() {
  useEffect(() => {
    let bubbleTimeout;
    let scrollFactor = 1; // Factor to scale bubble size on scroll

    // Handle mouse move for bubble creation
    const handleMouseMove = (e) => {
      const heroElement = document.querySelector(`.${styles.background}`);
      const bubble = document.createElement("span");
      const x = e.clientX - heroElement.getBoundingClientRect().left;
      const y = e.clientY - heroElement.getBoundingClientRect().top;
      const size = Math.random() * 150 + 150; // Random size between 10px to 60px
      const scaledSize = size * scrollFactor; // Scale size based on scroll

      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      bubble.style.width = `${scaledSize}px`;
      bubble.style.height = `${scaledSize}px`;
      bubble.style.position = "absolute";
      bubble.style.backgroundColor = "rgba(188, 34, 202, 0.6)"; // Faint pink color
      bubble.style.borderRadius = "50%";
      bubble.style.pointerEvents = "none";
      bubble.style.animation = `${styles.bubbleAnimation} 3s ease-out`;

      heroElement.appendChild(bubble);

      // Remove the bubble after animation
      setTimeout(() => {
        bubble.remove();
      }, 300);
    };

    // Handle scroll to adjust bubble size
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get current scroll position
      scrollFactor = 1 + scrollTop / 500; // Increase size factor based on scroll (adjust divisor for sensitivity)
    };

    // Attach event listeners
    const heroElement = document.querySelector(`.${styles.Hero}`);
    heroElement.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      heroElement.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(bubbleTimeout);
    };
  }, []);

  return (
    <div className={styles.Hero}>
      <div className={styles.background}></div>
      <div className={styles.Line}>
        Penta is a global leader in IT services
      </div>
      <div className={styles.sentence}>
        Digital and business solutions that partner with its clients to simplify, strengthen, and transform their businesses.<br />
        We ensure the highest levels of certainty and satisfaction through a deep-set commitment to our clients.
      </div>
      <div className={styles.React}>
        <div className={styles.Button}>
          Start a Project
        </div>
        <div className={styles.Button1}>
          Our Work
        </div>
      </div>
      <div className={styles.video}>
        <video autoPlay muted width="100%">
          <source src="https://videos.pexels.com/video-files/6774633/6774633-uhd_2560_1440_30fps.mp4" />
        </video>
      </div>
    </div>
  );
}

export default Hero;

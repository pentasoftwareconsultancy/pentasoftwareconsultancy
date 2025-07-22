import React, { useState, useEffect } from 'react';
import styles from "./Hero.module.css";

function Hero() {
  const [showWorkModal, setShowWorkModal] = useState(false);
  const [showCareerModal, setShowCareerModal] = useState(false);
  
  useEffect(() => {
    let bubbleTimeout;
    let scrollFactor = 1;

    const handleMouseMove = (e) => {
      const heroElement = document.querySelector(`.${styles.background}`);
      const bubble = document.createElement("span");
      const x = e.clientX - heroElement.getBoundingClientRect().left;
      const y = e.clientY - heroElement.getBoundingClientRect().top;
      const size = Math.random() * 150 + 150;
      const scaledSize = size * scrollFactor;

      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      bubble.style.width = `${scaledSize}px`;
      bubble.style.height = `${scaledSize}px`;
      bubble.style.position = "absolute";
      bubble.style.backgroundColor = "rgba(188, 34, 202, 0.6)";
      bubble.style.borderRadius = "50%";
      bubble.style.pointerEvents = "none";
      bubble.style.animation = `${styles.bubbleAnimation} 3s ease-out`;

      heroElement.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, 300);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      scrollFactor = 1 + scrollTop / 500;
    };

    const heroElement = document.querySelector(`.${styles.Hero}`);
    heroElement.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      heroElement.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(bubbleTimeout);
    };
  }, []);

  const openWorkModal = () => {
    setShowWorkModal(true);
    document.body.style.overflow = 'hidden';
  };

  const openCareerModal = () => {
    setShowCareerModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowWorkModal(false);
    setShowCareerModal(false);
    document.body.style.overflow = 'auto';
  };

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
        <div className={styles.Button} onClick={openWorkModal}>
          Start a Project
        </div>
        <div className={styles.Button1} onClick={openCareerModal}>
          Our Work
        </div>
      </div>
      <div className={styles.video}>
        <video autoPlay muted width="100%">
          <source src="https://videos.pexels.com/video-files/6774633/6774633-uhd_2560_1440_30fps.mp4" />
        </video>
      </div>

      {/* Work With Us Modal */}
      {showWorkModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>×</button>
            <h2>WORK WITH US</h2>
            <p className={styles.modalIntro}>
              Explore diverse roles matching your expertise and ambitions. Elevate your career with us, where innovation meets opportunity.
            </p>
            
            <div className={styles.modalSection}>
              <h3>Explore Opportunities</h3>
              <p>
                Browse through our current job listings spanning diverse fields and positions, 
                offering opportunities for growth and impact. Find the perfect match for your 
                skills and aspirations to begin your journey with us.
              </p>
            </div>
            
            <div className={styles.modalSection}>
              <h3>Apply with Ease</h3>
              <p>
                Submit your application effortlessly through our user-friendly platform, 
                where you can showcase your qualifications and enthusiasm for joining our team. 
                We value your unique talents and are excited to learn more about how you can 
                contribute to our mission.
              </p>
            </div>
            
            <div className={styles.modalSection}>
              <h3>Join Our Team</h3>
              <p>
                Take the next step in your career by becoming a part of our vibrant community, 
                where collaboration, innovation, and personal development thrive. Join us in 
                shaping the future as we work together towards our shared goals and success.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Career Growth Opportunities Modal */}
      {showCareerModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>×</button>
            <h2>CAREER GROWTH OPPORTUNITIES</h2>
            <p className={styles.modalIntro}>
              Join our team and unlock endless possibilities for professional development and career advancement. 
              We believe in fostering talent and providing opportunities for growth within our dynamic organization.
            </p>
            
            {/* <p className={styles.modalIntro}>
              Every day, we refine, iterate and explore how to make work better for everyone. Join us in
              creating a better future of work that's more connected, inclusive and flexible.
            </p> */}
            
            <div className={styles.featureGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>C</div>
                <h3>Connected</h3>
                <p>
                  We come together wherever we are across
                  time zones, regions, offices and screens.
                </p>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>I</div>
                <h3>Inclusive</h3>
                <p>
                  Our teams reflect the rich diversity of our world,
                  with equitable access to opportunity for everyone.
                </p>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>F</div>
                <h3>Flexible</h3>
                <p>
                  We believe in your freedom to work when
                  and how you work best, to help us all thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
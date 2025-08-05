import React, { useState, useEffect } from 'react';
import styles from "./Hero.module.css";

function Hero() {
  const [showWorkModal, setShowWorkModal] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    "https://videos.pexels.com/video-files/6774633/6774633-uhd_2560_1440_30fps.mp4",
    "https://devconsoftware.com/assets/img/team/3255275-hd_1920_1080_25fps.mp4",
    "https://videos.pexels.com/video-files/6774633/6774633-uhd_2560_1440_30fps.mp4",
  ];

  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 8000);
    return () => clearInterval(videoInterval);
  }, [videos.length]);

  const openWorkModal = () => {
    setShowWorkModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowWorkModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={styles.Hero}>
      {/* Video Background */}
      <div className={styles.videoBackground}>
        {videos.map((video, index) => (
          <video
            key={index}
            autoPlay
            muted
            loop
            playsInline
            className={`${styles.bgVideo} ${index === currentVideoIndex ? styles.active : ''}`}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
        <div className={styles.videoOverlay}></div>
      </div>

      {/* Hero Content */}
      <div className={styles.content}>
        <div className={styles.Line}>
          Penta is a global leader in IT services
        </div>
        <div className={styles.sentence}>
          Digital and business solutions that partner with its clients to simplify, strengthen, and transform their businesses.<br />
          We ensure the highest levels of certainty and satisfaction through a deep-set commitment to our clients.
        </div>
        <div className={styles.React}>
          <div className={styles.Button} onClick={openWorkModal}>
            Read More
          </div>
        </div>
      </div>

      {/* Modal */}
      {showWorkModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // Prevent close on inner click
          >
            <button
              className={styles.modalClose}
              onClick={(e) => {
                e.stopPropagation(); // Ensure close works on mobile
                closeModal();
              }}
              type="button"
            >
              ×
            </button>

            <h2>WORK WITH US</h2>
            <p className={styles.modalIntro}>
              Explore diverse roles matching your expertise and ambitions. Elevate your career with us, where innovation meets opportunity.
            </p>

            <div className={styles.modalSection}>
              <h3>Explore Opportunities</h3>
              <p>
                Browse through our current job listings spanning diverse fields and positions,
                offering opportunities for growth and impact.
              </p>
            </div>

            <div className={styles.modalSection}>
              <h3>Apply with Ease</h3>
              <p>
                Submit your application effortlessly through our user-friendly platform.
              </p>
            </div>

            <div className={styles.modalSection}>
              <h3>Join Our Team</h3>
              <p>
                Take the next step in your career by becoming a part of our vibrant community.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;

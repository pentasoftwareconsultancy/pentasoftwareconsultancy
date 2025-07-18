import React from 'react';
import styles from './Saleforce.module.css';
import SaleforceData from './saleforceservice/SaleforceData';

function Saleforce() {
  return (
    <div className={styles.Saleforce}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroImage}>
          <img 
            src="https://i.pinimg.com/736x/5b/e9/05/5be905bcc992b4a1efbfc89a9e3e09a7.jpg" 
            alt="Salesforce Service Cloud" 
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Salesforce - Service Cloud</h1>
          <p className={styles.heroSubtitle}>Transform customer service with powerful support solutions that increase satisfaction and loyalty</p>
        </div>
      </div>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <div className={styles.introImage}>
            <img 
              src="https://i.pinimg.com/736x/92/2e/84/922e84be28abe65515a16dd7c12f3d71.jpg" 
              alt="Service Cloud Benefits" 
              className={styles.floatingImage}
            />
          </div>
          <div className={styles.introContent}>
            <h2 className={styles.sectionTitle}>Elevate Your Customer Service</h2>
            <p className={styles.sectionText}>
              Service Cloud revolutionizes customer support by delivering faster resolutions, personalized attention, 
              and proactive solutions. This comprehensive platform enhances customer experiences, builds loyalty, 
              and ultimately drives business growth through exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Key Features of Service Cloud</h2>
          <p className={styles.sectionSubtitle}>Discover the powerful capabilities that transform customer service</p>
        </div>
        
        <div className={styles.featuresGrid}>
          {SaleforceData.map((feature, index) => (
            <div 
              key={index} 
              className={styles.featureCard}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardText}>{feature.description}</p>
              </div>
              <div className={styles.cardHoverEffect}></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Saleforce;
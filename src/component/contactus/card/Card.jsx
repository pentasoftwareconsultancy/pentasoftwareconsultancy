import React from 'react';
import CardData from './CardData';
// import styles from './card.module.css';
import styles from './card.module.css';

import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaPhone, FaFacebook, FaInstagram, } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.left}>
          {CardData.map((contact, index) => (
            <div key={index} className={styles.contactCard}>
              <h2>{contact.title}</h2>
              <div className={styles.socialIcons}>
                <FaFacebook className={styles.socialIcon} />
                <FaInstagram className={styles.socialIcon} />
                <FaYoutubeSquare className={styles.socialIcon} />
                <BsLinkedin className={styles.socialIcon} />
              </div>

              <div className={styles.contactInfo}>
                <div className={styles.infoItem}>
                  <MdLocationPin className={styles.infoIcon} />
                  <div>
                    <h3>Address:</h3>
                    <p>
                      Sr No 78/60, PI.No 1, Wing A, Office 26A, Sai Vision,<br />
                      Near Govind Garden,<br />
                      Pimple Saudagar, Pune - 411027
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <MdEmail className={styles.infoIcon} />
                  <div>
                    <h3>Mail ID:</h3>
                    <p>{contact.Mail_ID}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FaPhone className={styles.infoIcon} />
                  <div>
                    <h3>Contact:</h3>
                    <p>{contact.Contact_Us}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.right}>
          <form className={styles.form}>
            <h2 className={styles.formTitle}>Send Message</h2>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mobile">Mobile Number:</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="course">Course:</label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  placeholder="Enter the course name"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>

      

      <div className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7563.012036084115!2d73.7924737861964!3d18.596296398765094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b99f72cd3403%3A0xbe5c15b8aa9ba6e5!2sDTDC%20COURIER%20SERVICES!5e0!3m2!1sen!2sin!4v1737458215624!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Card;
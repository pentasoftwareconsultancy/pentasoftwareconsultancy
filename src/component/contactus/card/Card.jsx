import React from 'react';
import CardData from './CardData';
// import styles from './card.module.css';
// This must match the actual file name exactly (case-sensitive on Vercel)
import styles from './card.module.css';
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";



const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {CardData.map((contact, index) => (
          <div key={index} className={styles.contactCard}>
            <h2>{contact.title}</h2>
            <h1>{contact.logo}<FaFacebook color='#00d4ff' size={40} className={styles.logo}/>
            <FaInstagram  color='#00d4ff' size={40} className={styles.logo} />
            <FaYoutubeSquare color='#00d4ff' size={40} className={styles.logo}/>
            <BsLinkedin color='#00d4ff' size={36} className={styles.logo}/> </h1>
            {/* <p>{contact.para}</p> */}

            <div className={styles.ContactAdress}>
              <MdLocationPin color='#00d4ff' size={30} className={styles.locationicon} />
              <h3>Address:</h3>
            </div>
            <ul>
            sr No 78/60, PI.No 1,Wing A, Office 26A, Sai Vision,Near Govind Garden,PimPle saudagar, Pune - 411027
            </ul>

            <div className={styles.MailIcon}>
              <MdEmail color="#00d4ff" size={30} className={styles.mailIcon} />
              <h3>Mail ID:</h3>
              {contact.Mail_ID}
            </div>

            <div className={styles.ContactNo}>
              <FaPhone color="#00d4ff" size={30} className={styles.contacticon} />
              <h3>Contact:</h3>
              {contact.Contact_Us}
            </div>

          </div>
        ))}
      </div>


      

      <div className={styles.right}>
        <form className={styles.form}>
          <div className={styles.Righttitle}>Send Message</div>
          <div className={styles.NameMob}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                aria-required="true"
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
                aria-required="true"
              />
            </div>
          </div>

          <div className={styles.EmailCourse}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                aria-required="true"
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
                aria-required="true"
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
              aria-required="true"
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>

      <div className={styles.Section3}>
          {/* <div className={styles.No}>For More Information To Contact US</div> */}
          <div className={styles.No1}>
            <div className={styles.No2}>
              <div className={styles.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7563.012036084115!2d73.7924737861964!3d18.596296398765094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b99f72cd3403%3A0xbe5c15b8aa9ba6e5!2sDTDC%20COURIER%20SERVICES!5e0!3m2!1sen!2sin!4v1737458215624!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div> 
    </div>
  );
};

export default Card;
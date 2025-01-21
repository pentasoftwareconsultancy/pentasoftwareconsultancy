import React from 'react';
import styles from './Card.module.css';
import { BsLinkedin } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';

function Card() {
  return (
    <div className={styles.Card}>
      <div className={styles.Section}>
        <div className={styles.Section1}>
          <div className={styles.Word1}>For More Information To Contact Us</div>

          <div className={styles.Boxes}>
            <div className={styles.No1}>Get Social</div>
            <div className={styles.logo}>
              <BsLinkedin size={25} />
            </div>
            <div className={styles.No2}>Contact Info</div>

            {/* Address Box */}
            <div className={styles.box2}>
              <div className={styles.logo2}>
                <MdLocationPin size={20} />
              </div>
              <div className={styles.Add}>
                Sr No 78/60, PI.No 1, Wing A, Office 26<br />
                A, Sai Vision, Near Govind Garden,<br />
                PimPle Saudagar, Pune - 411027
              </div>
            </div>

            {/* Telephone Box */}
            <div className={styles.box3}>
              <div className={styles.logo3}>
                <BsTelephoneFill size={20} />
              </div>
              <div className={styles.Number}>+91 7066541234 | 83298294</div>
            </div>

            {/* Email Box */}
            <div className={styles.box4}>
              <div className={styles.logo4}>
                <AiFillMail size={20} />
              </div>
              <div className={styles.mail}>hr@pentasoftwarereconsultancy.com</div>
            </div>
          </div>

          {/* Form Section */}
          <div className={styles.Section2}>
            <div className={styles.box5}>
              <input
                type="text"
                placeholder="First Name*"
                className={styles.Name3}
              />
              <input
                type="text"
                placeholder="Last Name*"
                className={styles.Name4}
              />
            </div>
            <div className={styles.box5}>
              <input
                type="email"
                placeholder="Email*"
                className={styles.email}
              />
            </div>
            <div className={styles.box5}>
              <textarea
                placeholder="Comment or Message*"
                className={styles.comment}
              />
            </div>
            <div className={styles.box5}>
              <input type="button" value="Submit" className={styles.button} />
            </div>
          </div>
        </div>
      </div>
  {/* Map Section */}
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
  );
}

export default Card;

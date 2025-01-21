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
              <BsLinkedin />
            </div>
            <div className={styles.No2}>Contact Info</div>
            <div className={styles.box2}>
              <div className={styles.logo2}>
                <MdLocationPin size={20}/>
              </div>
              <div className={styles.Add}>
                sr No 78/60, PI.No 1, Wing A, Office 26<br />
                A, Sai Vision, Near Govind Garden,<br />
                PimPle Saudagar, Pune - 411027
              </div>
            </div>

            <div className={styles.box3}>
              <div className={styles.logo3}>
                <BsTelephoneFill size={20}/>
              </div>
              <div className={styles.Number}>+91 7066541234 | 83298294</div>
            </div>

            <div className={styles.box4}>
              <div className={styles.logo4}>
                <AiFillMail size={20} />
              </div>
              <div className={styles.mail}>hr@pentasoftwarereconsultancy.com</div>
            </div>
          </div>

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
              <input
                type="button"
                value="Submit"
                className={styles.button}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

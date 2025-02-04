import React from 'react';
import styles from './Saleforce.module.css';
import SaleforceData from './saleforceservice/SaleforceData';

function Saleforce() {

  return (
    <div className={styles.Saleforce}>
      <div className={styles.box}>
        <div className={styles.image}>
          <img src="https://i.pinimg.com/736x/5b/e9/05/5be905bcc992b4a1efbfc89a9e3e09a7.jpg" />
        </div>
        <div className={styles.Name}>Salesforce - Service Cloud</div>
        <div className={styles.sent}>This part of Salesforce platform is focused on providing support and help to the customers.</div>
      
      <div className={styles.Section}>
        <div className={styles.Section1}>
          <div className={styles.image1}>
            <img src="https://i.pinimg.com/736x/92/2e/84/922e84be28abe65515a16dd7c12f3d71.jpg" />
          </div>


          <div className={styles.data}>
            <div className={styles.data1}>Salesforce - Service Cloud </div>
            <div className={styles.data2}>
              This part of Salesforce platform is focused on providing support and help to the customers.<br />
              This helps in retaining the customers, increasing their satisfaction and loyalty.<br />
              Its uniqueness lies in providing faster service compared to traditional methods,<br />
              giving individual attention to each customer needs and taking a proactive approach <br />
              to customer issues. That ultimately enhances the customer’s experience hence<br />
              loyalty which in turn creates a good impact on sales.
            </div>
          </div>
        </div>

        <div className={styles.Section2}>
          <div className={styles.cloud}>
            Following are the key business Goals achieved by using the Service Cloud
          </div>
          <div className={styles.Box}>
            {SaleforceData.map((feature, index) => (
              <div key={index} className={styles[`Box${index + 1}`]}>
                <div className={styles[`Title${index + 1}`]}>{feature.title}</div>
                <div className={styles[`dis${index + 1}`]}>{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className={styles.Section3}>
          <div className={styles.No}>For More Information To Contact US</div>
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
          </div> */}

</div>
    </div>
  );
}

export default Saleforce;

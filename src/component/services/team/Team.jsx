import React from 'react';
import styles from './Team.module.css';

function Team() {
  return (
    <div className={styles.Team}>
      <div className={styles.section}>
        <div className={styles.Section1}>
          <div className={styles.image1}>
                        <img src="https://i.pinimg.com/1200x/65/51/58/655158c585c59f63cb2ce4f8fb492a68.jpg" />

          </div>
          <div className={styles.Word1}>Top Skilled Team</div>
          <div className={styles.line1}>
            We are skilled in ASP.NET, MVC Architecture, Android<br />
            Application Development, Web Application Development,<br />
            Logo Designing, SEO, Hosting and Graphics Designing.
          </div>
        </div>

        <div className={styles.Section2}>
          <div className={styles.image2}>
            <img src="https://smallbizclub.com/wp-content/uploads/2022/06/bigstock-Diversity-Multiethnic-Team-Gro-446118545.jpg" />
          </div>
          <div className={styles.Word2}>Better Customer Support</div>
          <div className={styles.line2}>
            SMART Software Services offer you awesome support<br />
            24/7. We always think “Customer is King” at every phase<br />
            of software Application Development.
          </div>
        </div>

        <div className={styles.Section3}>
          <div className={styles.image3}>
            <img src="https://devconsoftware.com/assets/img/user-experiance1.webp" />
          </div>
          <div className={styles.Word3}>Beautiful Office Space</div>
          <div className={styles.line3}>
            Company has multiple office locations in<br />
            Pune and every office is awesome for working<br />
            in company or meeting with clients.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

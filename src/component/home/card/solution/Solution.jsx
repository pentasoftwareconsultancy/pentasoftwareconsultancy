import React, { useState, useEffect } from 'react';
import styles from './Solution.module.css';

function Solution() {
  const [count, setCount] = useState(0);  // First counter (730)
  const [count2, setCount2] = useState(0); // Second counter (198)

  // First counter (counts to 730)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 730) {
          clearInterval(interval); // Stop the counter once it reaches 730
          return prevCount;
        }
        return prevCount + 1; // Increment count by 1
      });
    }, 10); // Adjust this value to control the speed of counting

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Second counter (counts to 198)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount2((prevCount2) => {
        if (prevCount2 >= 198) {
          clearInterval(interval); // Stop the counter once it reaches 198
          return prevCount2;
        }
        return prevCount2 + 1; // Increment count by 1
      });
    }, 15); // Adjust this value to control the speed of counting

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className={styles.Solution}>
      <div className={styles.Container}>
        <div className={styles.Section}>
          <div className={styles.Web}>www.Devcon.com</div>
          <div className={styles.Line}>We Provide IT Solution & Services for any Startup</div>
          <div className={styles.Sentence}>
            We are architects of innovation, trailblazers of technological<br/>
             advancement, and partners in our success.<br/>
            As a dynamic and forward-thinking organization.
          </div>

          <div className={styles.Count}>
        <div className={styles.No}>
            <div className={styles.Counter}>
              {count}+ 
            </div>
            <div className={styles.CounterText}>Successfully Projects</div>
            <div className={styles.Counter1}>
              {count2}+ 
            </div>
            <div className={styles.CounterText1}>Happy Clients</div>
          </div>
        </div> 
           <div className={styles.Button}>
             More About
           </div>
           </div>
          <div className={styles.Section1}>
             <div className={styles.image}>
                <img src="https://www.greencubes.co.in/wp-content/uploads/2023/07/full-service-web-design-company.png"/>
             </div>
          </div>
      </div>
    </div>
  );
}

export default Solution;

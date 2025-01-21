import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>MyLogo</div>
      <div className={styles.container}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUTUS</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li
            className={styles.dropdown}
            onMouseEnter={toggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link to="/application" aria-expanded={isDropdownOpen}>
              APPLICATION
            </Link>
            {isDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link to="/application/software-testing" onClick={closeDropdown}>
                    Software Testing
                  </Link>
                </li>
                <li>
                  <Link to="/application/salesforce-service" onClick={closeDropdown}>
                    Sales Force Service
                  </Link>
                </li>
                <li>
                  <Link to="/application/aws-service" onClick={closeDropdown}>
                    AWS Service
                  </Link>
                </li>
                <li>
                  <Link to="/application/data-science" onClick={closeDropdown}>
                    Data Science & ML
                  </Link>
                </li>
                <li>
                  <Link to="/application/rpa" onClick={closeDropdown}>
                    RPA (Robotics Processing Automation)
                  </Link>
                </li>
                <li>
                  <Link to="/application/apps-development" onClick={closeDropdown}>
                    Apps Development
                  </Link>
                </li>
                <li>
                  <Link to="/application/java-technology" onClick={closeDropdown}>
                    Java Technology
                  </Link>
                </li>
                <li>
                  <Link to="/application/sap-support" onClick={closeDropdown}>
                    SAP Application Support
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/contactus">CONTACTUS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

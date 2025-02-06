import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import pentalogo1 from "../../assets/pentalogo1.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Track the current route

  // Toggle dropdown visibility and hide navbar when dropdown opens
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown and show navbar again
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close Navbar when changing pages
  React.useEffect(() => {
    setMenuOpen(false); // Hide mobile menu
    setIsDropdownOpen(false); // Hide dropdown
  }, [location.pathname]); // Run when the route changes

  return (
    <div className={`${styles.Navbar} ${isDropdownOpen ? styles.hidden : ""}`}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <Link to="/">
          <img src={pentalogo1} alt="Logo" className={styles.logoImage} />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>

      {/* Navbar Links Section */}
      <div
        className={`${styles.container} ${
          menuOpen ? styles.showMenu : styles.hideMenu
        }`}
      >
        <ul className={styles.navLinks}>
          <li>
            <Link to="/" onClick={closeDropdown}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeDropdown}>
              ABOUTUS
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeDropdown}>
              SERVICES
            </Link>
          </li>
          <li
            className={styles.dropdown}
            onMouseEnter={toggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link to="/application">APPLICATION</Link>
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
            <Link to="/contactus" onClick={closeDropdown}>
              CONTACTUS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

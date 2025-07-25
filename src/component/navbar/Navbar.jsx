import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import pentalogo1 from "../../assets/pentalogo1.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDropdownEnter = () => setIsDropdownOpen(true);
  const handleDropdownLeave = () => setIsDropdownOpen(false);

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
    setMenuOpen(false);
  };

  const toggleDropdownClick = (e) => {
    e.preventDefault(); // prevent redirect
    setIsDropdownOpen((prev) => !prev); // toggle dropdown
  };

  return (
    <div className={`${styles.Navbar} ${scrolled ? styles.scrolled : ""}`}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link to="/">
          <img src={pentalogo1} alt="Logo" className={styles.logoImage} />
        </Link>
      </div>

      {/* Hamburger */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>

      {/* Nav Links */}
      <div className={`${styles.container} ${menuOpen ? styles.showMenu : styles.hideMenu}`}>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUTUS</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>

          {/* Dropdown - Note: This uses both hover and click handlers */}
          <li
            className={styles.dropdown}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <a href="/" onClick={toggleDropdownClick} className={styles.dropdownToggle}>
              APPLICATION 
            </a>
            {isDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link to="/application/software-testing" onClick={handleDropdownItemClick}>
                    Software Testing
                  </Link>
                </li>
                <li>
                  <Link to="/application/salesforce-service" onClick={handleDropdownItemClick}>
                    Salesforce Service
                  </Link>
                </li>
                <li>
                  <Link to="/application/aws-service" onClick={handleDropdownItemClick}>
                    AWS Service
                  </Link>
                </li>
                <li>
                  <Link to="/application/data-science" onClick={handleDropdownItemClick}>
                    Data Science & ML
                  </Link>
                </li>
                <li>
                  <Link to="/application/rpa" onClick={handleDropdownItemClick}>
                    RPA (Robotics Processing Automation)
                  </Link>
                </li>
                <li>
                  <Link to="/application/apps-development" onClick={handleDropdownItemClick}>
                    Apps Development
                  </Link>
                </li>
                <li>
                  <Link to="/application/java-technology" onClick={handleDropdownItemClick}>
                    Java Technology
                  </Link>
                </li>
                <li>
                  <Link to="/application/sap-support" onClick={handleDropdownItemClick}>
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
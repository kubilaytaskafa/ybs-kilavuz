import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Header.css"; // Özel stiller gerekirse

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div className="container" style={styles.navContainer}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          YBS<span style={{ color: "var(--secondary)" }}>Kılavuz</span>
        </Link>

        {/* Desktop Menu */}
        <nav style={styles.navLinks} className="desktop-menu">
          <Link to="/" style={styles.link}>
            Ana Sayfa
          </Link>
          <Link to="/universite" style={styles.link}>
            Üniversiteler
          </Link>
          <Link to="/hakkinda" style={styles.link}>
            Hakkımda
          </Link>
          <Link to="/kariyer" className="btn btn-secondary">
            Kariyer
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          style={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-only"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={styles.mobileMenu}>
          <Link to="/" style={styles.mobileLink}>
            Ana Sayfa
          </Link>
          <Link to="/kesfet" style={styles.mobileLink}>
            Üniversiteler
          </Link>
          <Link
            to="/kesfet"
            style={{ ...styles.mobileLink, color: "var(--secondary)" }}
          >
            Haritayı Aç
          </Link>
        </div>
      )}
    </header>
  );
};

// CSS-in-JS (Hızlı stil tanımları için)
const styles = {
  header: {
    backgroundColor: "var(--white)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    padding: "1rem 0",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "none",
    color: "var(--primary)",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "var(--text-main)",
    fontWeight: "500",
  },
  hamburger: {
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    display: "none", // CSS ile mobilde açılacak
  },
  mobileMenu: {
    backgroundColor: "var(--white)",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    borderTop: "1px solid #eee",
  },
  mobileLink: {
    textDecoration: "none",
    color: "var(--text-main)",
    fontSize: "1.1rem",
    padding: "5px 0",
  },
};

export default Header;

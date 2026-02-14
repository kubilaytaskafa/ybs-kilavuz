import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mobilde linke tıklanınca menüyü kapatmak için
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          YBS<span style={{ color: "var(--secondary)" }}>Kılavuz</span>
        </Link>

        {/* Desktop Menu - Sadece büyük ekranda görünür */}
        <nav className="nav-links desktop-menu">
          <Link to="/" className="link">
            Ana Sayfa
          </Link>
          <Link to="/universite" className="link">
            Üniversiteler
          </Link>
          <Link to="/hakkinda" className="link">
            Hakkımda
          </Link>
          <Link to="/kariyer" className="btn btn-secondary">
            Kariyer
          </Link>
        </nav>

        {/* Mobile Menu Button - Sadece mobilde görünür */}
        <button
          className="hamburger mobile-only"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menüyü Aç"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" className="mobile-link" onClick={closeMenu}>
          Ana Sayfa
        </Link>
        <Link to="/universite" className="mobile-link" onClick={closeMenu}>
          Üniversiteler
        </Link>
        <Link to="/hakkinda" className="mobile-link" onClick={closeMenu}>
          Hakkımda
        </Link>
        <Link to="/kariyer" className="mobile-link" onClick={closeMenu}>
          Kariyer
        </Link>
        {/* Mobilde özel buton veya link */}
        <Link
          to="/kesfet"
          className="mobile-link highlight"
          onClick={closeMenu}
        >
          Haritayı Aç
        </Link>
      </div>
    </header>
  );
};

export default Header;

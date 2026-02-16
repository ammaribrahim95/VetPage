import React, { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <span style={styles.logoText}>KLINIK HAIWAN</span>
        </div>

        {/* Desktop Navigation */}
        <nav
          style={
            isMobile
              ? { ...styles.desktopNav, display: "none" }
              : styles.desktopNav
          }
        >
          <button
            onClick={() => scrollToSection("about")}
            style={styles.navLink}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("vets")}
            style={styles.navLink}
          >
            Our Vets
          </button>
          <button
            onClick={() => scrollToSection("services")}
            style={styles.navLink}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            style={styles.navLink}
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            style={styles.navLink}
          >
            Contact
          </button>
        </nav>

        <a
          href="tel:+60127953577"
          style={
            isMobile
              ? { ...styles.phoneButton, display: "none" }
              : styles.phoneButton
          }
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          style={
            isMobile
              ? { ...styles.menuButton, display: "block" }
              : styles.menuButton
          }
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav style={styles.mobileNav}>
          <button
            onClick={() => scrollToSection("about")}
            style={styles.mobileNavLink}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("vets")}
            style={styles.mobileNavLink}
          >
            Our Vets
          </button>
          <button
            onClick={() => scrollToSection("services")}
            style={styles.mobileNavLink}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            style={styles.mobileNavLink}
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            style={styles.mobileNavLink}
          >
            Contact
          </button>
        </nav>
      )}
    </header>
  );
};

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background: "rgba(255, 255, 255, 0.6)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderBottom: "0.5px solid rgba(0, 0, 0, 0.1)",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem 1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoText: {
    fontWeight: 700,
    fontSize: "1.125rem",
    color: "rgb(0, 55, 32)",
  },
  desktopNav: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
  },
  navLink: {
    color: "rgb(175, 183, 180)",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
    padding: "6px 12px",
    borderRadius: "9999px",
    transition: "all 0.2s ease",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
  phoneButton: {
    background: "linear-gradient(to bottom right, #8FEC78, #81DD67)",
    color: "white",
    border: "none",
    borderRadius: "9999px",
    padding: "10px 20px",
    fontWeight: 600,
    fontSize: "0.95rem",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition: "transform 0.2s ease",
  },
  menuButton: {
    display: "none",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "rgb(0, 55, 32)",
  },
  mobileNav: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "1rem 1.5rem",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  },
  mobileNavLink: {
    color: "rgb(131, 146, 140)",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
    padding: "12px",
    textAlign: "left",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
};

export default Header;

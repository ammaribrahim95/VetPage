import React from "react";
import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Clinic Info */}
          <div style={styles.column}>
            <h3 style={styles.clinicName}>KLINIK HAIWAN</h3>
            <p style={styles.tagline}>
              Gentle Care. Professional Treatment. Pets First.
            </p>
            <div style={styles.iconRow}>
              <Heart
                size={20}
                color="rgb(13, 121, 22)"
                fill="rgb(13, 121, 22)"
              />
              <span style={styles.iconText}>
                Caring for your pets since 2014
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Quick Links</h4>
            <ul style={styles.linkList}>
              <li>
                <a href="#about" style={styles.link}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#vets" style={styles.link}>
                  Our Veterinarians
                </a>
              </li>
              <li>
                <a href="#services" style={styles.link}>
                  Services
                </a>
              </li>
              <li>
                <a href="#reviews" style={styles.link}>
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" style={styles.link}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Our Services</h4>
            <ul style={styles.linkList}>
              <li style={styles.serviceItem}>General Check-ups</li>
              <li style={styles.serviceItem}>Vaccinations</li>
              <li style={styles.serviceItem}>Diagnosis & Treatment</li>
              <li style={styles.serviceItem}>Bloodwork</li>
              <li style={styles.serviceItem}>Pet Nutrition</li>
            </ul>
          </div>

          {/* Contact */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Get in Touch</h4>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <MapPin size={16} color="rgb(13, 121, 22)" />
                <span style={styles.contactText}>
                  Damansara Perdana
                  <br />
                  47820 Petaling Jaya
                  <br />
                  Selangor
                </span>
              </div>
              <div style={styles.contactItem}>
                <Phone size={16} color="rgb(13, 121, 22)" />
                <a href="tel:+60127953577" style={styles.contactLink}>
                  +60 12-795 3577
                </a>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactText}>
                  Daily: 10:00 AM - 7:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.divider}></div>

        <div style={styles.bottom}>
          <p style={styles.copyright}>
            © {currentYear} Klinik Haiwan. All rights reserved.
          </p>
          <p style={styles.taglineSmall}>
            Made with{" "}
            <Heart
              size={14}
              fill="rgb(13, 121, 22)"
              color="rgb(13, 121, 22)"
              style={{ display: "inline", verticalAlign: "middle" }}
            />{" "}
            for pets
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "rgb(0, 55, 32)",
    color: "white",
    padding: "3rem 1.5rem 1.5rem",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginBottom: "2rem",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  clinicName: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#8FEC78",
    marginBottom: "0.5rem",
  },
  tagline: {
    fontSize: "0.95rem",
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "0.5rem",
  },
  iconRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  iconText: {
    fontSize: "0.875rem",
    color: "rgba(255, 255, 255, 0.7)",
  },
  columnTitle: {
    fontSize: "1.125rem",
    fontWeight: 600,
    color: "white",
    marginBottom: "0.5rem",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  link: {
    color: "rgba(255, 255, 255, 0.7)",
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "color 0.2s ease",
    cursor: "pointer",
  },
  serviceItem: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "0.95rem",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
  },
  contactText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "0.95rem",
    lineHeight: 1.5,
  },
  contactLink: {
    color: "rgba(255, 255, 255, 0.7)",
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "color 0.2s ease",
  },
  divider: {
    height: "1px",
    background: "rgba(255, 255, 255, 0.2)",
    margin: "2rem 0",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
  },
  copyright: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "0.875rem",
    margin: 0,
  },
  taglineSmall: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "0.875rem",
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
  },
};

export default Footer;

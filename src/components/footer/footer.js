import React from "react";
import "./footer.css";

const FooterPage = () => {
  return (
    <footer className="footer-container">

      <div className="footer-content">

        {/* LEFT SECTION */}
        <div className="footer-section">
          <h4 className="footer-title">HealthTech: Clinic Management System</h4>
          <p className="footer-text">
            A modern and easy-to-use Clinic Management System to streamline daily
            operations, manage patients, doctors, appointments, billing, and laboratory
            workflows — all in one place.
          </p>
        </div>

        {/* CENTER NAVIGATION */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/login">Log In</a></li>
          </ul>
        </div>

        {/* RIGHT SOCIAL */}
        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com"><i className="bi bi-facebook"></i></a>
            <a href="https://www.twitter.com"><i className="bi bi-twitter"></i></a>
            <a href="https://www.instagram.com"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

      </div>

      {/* BOTTOM STRIP */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} HealthTech CMS — All Rights Reserved.
      </div>

    </footer>
  );
}

export default FooterPage;
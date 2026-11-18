import React from "react";
import { Navbar } from "../Components/Navbar";

export const Contact = () => {
  return (
    <>
    <section className="contact">
      <Navbar/>
      <h1 className="rr">Contact Us</h1>

      <div className="btn-group">
        <a
          href="https://www.instagram.com/hextorq"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          Instagram
        </a>

        <a
          href="https://www.linkedin.com/company/hextorq-technologies/posts/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          LinkedIn
        </a>

        <a
          href="https://wa.me/919952737453"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          WhatsApp
        </a>
      </div>

      <div className="contact-map">
        <h2>shop location</h2>

        <iframe
          title="J&D 3D Printers location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3917.061705456071!2d76.96869277504435!3d10.95871158920112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU3JzMxLjQiTiA3NsKwNTgnMTYuNiJF!5e0!3m2!1sen!2sin!4v1794972979155!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      </section>
    </>
  );
};

export default Contact;
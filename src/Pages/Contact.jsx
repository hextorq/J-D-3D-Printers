import React from "react";

export const Contact = () => {
  return (
    <>
    <section className="contact">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.63343586671!2d76.97075025721202!3d10.958274840912399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85a31e42e19bb%3A0x657d1e7e992100f1!2sN.R.P.%20Hospitals!5e0!3m2!1sen!2sin!4v1793775930430!5m2!1sen!2sin"
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
import React from "react";
import { Navbar } from "../Components/Navbar";
import { Form } from "../Components/Form"

export const Contact = () => {
  return (
    <>
    <section className="">
      <Navbar/>
      <header className="services-hero">
        <span className="contact-kicker">LET&apos;S CONNECT</span>
        <h1 className="rr">Bring your next idea to life.</h1>
        <p>
          Have a question, a custom print in mind, or need help choosing a
          product? We&apos;d love to hear from you.
        </p>
      </header>
   
      <div className="contact-location-layout">
        <span>VISIT OUR STUDIO</span>
            <h2>Shop location</h2>
          <div className="contact-section-heading">
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

        <aside className="contact-social-panel">
          <span className="contact-panel-label">STAY IN TOUCH</span>
          <h2>Follow our work</h2>
          <p>See new designs, projects, and updates from JD 3D Printers.</p>

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
        </aside>
      </div>
      <Form />
      </section>
    </>
  );
};

export default Contact;

import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";

export const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    // Connect your backend or email service here.
  };

  return (
    <>
    <Navbar />
    <main className="about-page">

      {/* ABOUT INTRO */}
      <section className="about-intro">
        <span className="about-label">ABOUT US</span>

        <h1>Ideas Made Real.</h1>

        <p>
          Established on 15 January 2025, we are a 3D printing
          company focused on turning creative ideas into reality.
          We offer a wide range of 3D-printed products and
          customized solutions, bringing together creativity,
          precision and modern technology.
        </p>

        <p>
          From personalized gifts and decorative pieces to
          functional models and custom-designed products,
          we make your ideas tangible through 3D printing.
          Your imagination sets the limit.
        </p>
      </section>

      {/* CONTACT FORM */}
      <section className="about-contact">

        <div className="contact-heading">
          <span className="about-label">LET'S CONNECT</span>
          <h2>Have an idea?<br />Let's make it happen.</h2>
          <p>
            Have a question or looking for a customized
            3D-printed product? Get in touch with us.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="What is this regarding?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Tell us about your idea or requirements..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            Send Message <span>↗</span>
          </button>

        </form>
      </section>

    </main>
    </>
  );
};
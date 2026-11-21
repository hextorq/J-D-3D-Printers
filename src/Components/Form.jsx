import React, { useState } from "react";

export const Form = () => {
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
    <div>
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
    </div>
  )
}
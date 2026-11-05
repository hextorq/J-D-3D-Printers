import React from 'react'
import { Navbar } from "../Components/Navbar";

export const About = () => {
  return (
    
    <section className="about-page">
      <Navbar/>
      <div className="about-hero">
        <p className="about-label">ABOUT US</p>
        <h1>Ideas Made Real with 3D Printing</h1>
        <p>
          At J&D-3D-Printers, we transform creative ideas into real,
        </p>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            xyz
          </p>
        </div>

        <div className="about-card">
          <h2>What We Do</h2>
          <ul>
            <li>Custom 3D printing</li>
            <li>xxx</li>
            <li>home decors</li>
            <li>prebuild 3d projects</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            goal,objective
          </p>
        </div>
      </div>
{/* 
      <div className="about-cta">
        <h2>Have an Idea?</h2>
        <p>Let’s turn your imagination into something real.</p>
        <a href="/contact" className="about-btn">
          Contact Us →
        </a>
      </div> */}
    </section>
  );
};
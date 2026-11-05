import React from "react";
import { Navbar } from "../Components/Navbar";

export const Services = () => {
  return (
    
    <main className="services-page">
      <Navbar/>
      <section className="services-hero">
        <p className="services-label">WHAT WE OFFER</p>
        <h1>Our 3D Printing Services</h1>
        <p>
          tag line
        </p>
      </section>

      <section className="services-section">
        <article>
              <h2>"titl"</h2>
              <p>"description"</p>
        </article>
        <article>
              <h2>"titl"</h2>
              <p>"description"</p>
        </article>
        <article>
              <h2>"titl"</h2>
              <p>"description"</p>
        </article>
      </section>
    </main>
  );
};
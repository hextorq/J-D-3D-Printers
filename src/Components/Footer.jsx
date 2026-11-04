

// import React from 'react'

// export const Footer = () => {
//   return (
//     <footer className='relative flex min-h-[280px] items-center justify-center bg-cover bg-center px-6 text-center md:min-h-[480px'>
//       <div className="absolute inset-0 bg-black/40" />
//       <h2 className='relative text-3xl font-bold text-white md:text-5xl'>
//         J&D-3D-Printers
//       </h2>
//     </footer>
//   )
// }

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              J&D-3D-Printers<span>.</span>
            </a>
            <p>Made with React.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="/home">Home</a>
            <a href="/workspace">Work Space</a>
            <a href="/product">product</a>
            <a href="/services">services</a>
            <a href="/about">about</a>
            <a href="/contact">contact</a>
            <a href="https://hextorq.tech/" >hextorq.tech </a>
          </div>

          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <p>Have a question or try?</p>
            <a href="mailto:J&D-3D-Printers@email.com">
              praveenyasu@icloud.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
         <p>
          © {new Date().getFullYear()} J&D-3D-Printers. All rights reserved.
        </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/hextorq"
               target="_blank"
               rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/hextorq-technologies/posts/"
               target="_blank"
               rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://wa.me/919952737453"
               target="_blank"
               rel="noreferrer">
              What'sapp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
} 

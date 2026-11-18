import React from 'react'
import heroImg from "../assets/herooImg.png";
import { Product } from "./Product"
import { Navbar } from "../Components/Navbar";

export const Home = () => {
  return (
    // <div className='bg-[#e8dcc6] text-[#722f37]'>
    //    <section className='relative flex min-h-[320px] md:min-h-[420px] items-center justify-center bg-cover bg-center px-6 text-center'>
    //       <div className='absolute inset-0'/>
    //       <div className='relative'>
    //          <img src={heroImg} alt = "hero img"/>
    //         <h1 className='text-5xl font-bold md:text-8xl'>
    //           J&D-3D-Printers
    //         </h1>
    //         <p className="mt-6 text-lg md:mt-10 md:text">The premier provider quality 3D printing services</p>
             

    //       </div>
    //    </section>
    // </div>


  <>
  <Navbar/>
    <section className="hero">
      
  <img
    src={heroImg}
    alt="3D printed creations"
    className="hero-img"
  />

  <div className="hero-content">
    <p className="hero-tagline">JD 3D PRINTING STUDIO</p>

    <h1>
      Ideas,
      <br />
      <span>Made Real.</span>
    </h1>

    <p className="hero-description">
      Custom 3D printing, thoughtful design, and
      precision-crafted creations.
    </p>

    <div className="hero-buttons">
      <a href="/product" className="hero-btn-primary">
        Explore Products →
      </a>
      <a href="/about" className="hero-btn-primary">
        Get a Custom Print →
      </a>
    </div>
  </div>
</section>


 <Product limit={4} />
</>
  )
}


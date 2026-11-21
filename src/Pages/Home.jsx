import heroImg from "../assets/herooImg.png";
import { Product } from "./Product"
import { Custom3D } from "./Custom3D"
import { Navbar } from "../Components/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
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
            <a href="/contact" className="hero-btn-primary">
              Get a Custom Print →
            </a>
          </div>
        </div>
      </section>

      <div className="home-product-sections">
        <Product limit={4} showFilters={false} />
        <Custom3D limit={4} showFilters={false} />
      </div>

    </>
  )
}


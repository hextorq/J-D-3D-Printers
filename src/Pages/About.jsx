import { Navbar } from "../Components/Navbar";
import { Form } from "../Components/Form"
export const About = () => {
 
  return (
    <>
    <Navbar />
    <div className="services-hero">
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


     
    </main>
    
          </div>
    </>
  );
};

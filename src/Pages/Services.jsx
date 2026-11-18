import React from "react";
import { Navbar } from "../Components/Navbar";
import printerImage from "../assets/3D_printer_img/PRINTER-2.png";
import printerImage1 from "../assets/3D_printer_img/PRINTER-1.png";
export const Services = () => {
  return (
    
    <main className="services-page">
      <Navbar/>
      <section className="services-hero">
        <span className="services-label">LET'S CREATE SOMETHING UNIQUE</span>
        <h2>
          Your Ideas. Our Creativity.
          <br />
          Made Real Through 3D Printing.
        </h2>
      </section>
      
     <section className="services-section">

  {/* ROW 1 */}
  <div className="service-row">

    <div className="service-content">
      <h2>3D Modelling & Printing</h2>

      <p className="service-description">
        From digital concepts to physical creations, we transform
        ideas into detailed 3D printed models with precision.
      </p>

      <div className="service-item">
        <h3>3D Modelling</h3>
        <p>
          Create a 3D model using software such as Blender or ZBrush.
          For customized statues, convert customer photos into a 3D sculpture.
        </p>
      </div>

      <div className="service-item">
        <h3>Slicing & Preparation</h3>
        <p>
          Import the STL/3MF file into slicer software. Set layer height,
          infill, supports, speed and temperature.
        </p>
      </div>

      <div className="service-item">
        <h3>3D Printing</h3>
        <p>
          The printer creates the model layer by layer using filament
          such as PLA, PETG or ASA.
        </p>
      </div>
    </div>

    <div className="service-image">
      <img src={printerImage} alt="3D printing process" />
    </div>

  </div>


  {/* ROW 2 */}
  <div className="service-row reverse">

    <div className="service-image">
      <img src={printerImage1} alt="3D printing finishing" />
    </div>

    <div className="service-content">
      <h2>Finishing & Customization</h2>

      <p className="service-description">
        Every creation receives careful attention to detail,
        from surface finishing to the final customized appearance.
      </p>

      <div className="service-item">
        <h3>Post-processing</h3>
        <p>
          Remove supports, sanding, filling gaps and surface smoothing.
        </p>
      </div>

      <div className="service-item">
        <h3>Painting & Finishing</h3>
        <p>
          Apply primer, skin tone, clothing colours, facial details
          and final protective coating.
        </p>
      </div>
    </div>

  </div>

</section>
    </main>
  );
};
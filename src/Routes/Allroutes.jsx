import { Route, Routes } from "react-router-dom";
import { Home, Search, Services, Product, About, Contact } from "../pages";

const Allroutes = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
  );
};

export default Allroutes;

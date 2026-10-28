import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Search, Services, Product, About, Contact } from "../Pages";

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />{" "}
          {/* ==> later change this as button */}
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Routes>
    </>
  );
};

export default Allroutes;

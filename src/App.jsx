
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} /> {/* ==> later change this as button */}
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<product />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
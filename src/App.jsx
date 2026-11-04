import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import Allroutes from "./Routes/Allroutes";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Allroutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
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

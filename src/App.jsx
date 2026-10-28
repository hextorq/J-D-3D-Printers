
import { Navbar,Footer } from "./Components";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       {/*  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
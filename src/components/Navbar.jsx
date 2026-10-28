import { Link } from "react-router-dom";
function Navbar() {
 

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        J-D-3D-Printers
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">search</Link>
        </li>
        <li>
          <Link to="/contact">product</Link>
        </li>
        <li>
          <Link to="/contact">Services</Link>
        </li>
        <li>
          <Link to="/contact">About</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

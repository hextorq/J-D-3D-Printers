
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/product", label: "Product" },
  { to: "/Custom3D", label: "Custom3D" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
 
];

const linkClass = ({ isActive }) =>
  `nav-link ${isActive ? "active" : ""}`;

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="navbar-logo">
          <img src={logo} alt="JD 3D Printer" />
        </NavLink>

        {/* Navigation links */}
        <ul className={`nav-links ${open ? "show" : ""}`}>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            className="menu-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
};

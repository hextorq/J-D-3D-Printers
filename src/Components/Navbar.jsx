import { useState } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/product", label: "Product" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  `text-xl text-base transition-colors hover:text-[#722f37] ${
    isActive ? "font-bold text-[#722f37]" : " text-[#722f37]"
  }`;

export const Navbar = () => {
  const [open, setopen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#e8dcc6] border-t-2 border-[#3a3540] shadow-md">
      <div className="mx-auto flex min-h-20 w-full items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <NavLink to="/" className="flex shrink-0 items-center leading-tight">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="J&D 3D Printer"
              className="h-16 w-auto  object-contain"
            />
            <p className="text-left text-[16px] text-[#722f37]">
              Ultimate 3D printing Hub
            </p>
          </div>
        </NavLink>
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={linkClass}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink to="/search" aria-label="Search" className="flex shrink-0 items-center text-[#722f37]">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="M16 16l5 5" strokeLinecap="round" />
            </svg>
          </NavLink>

          <button
            className="md:hidden text-[#722f37]"
            onClick={() => setopen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              className="h-7 w-7"
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
      </div>
      {open && (
        <ul className="md:hidden flex flex-col gap-4 border-[#722f37]/20 px-6 py-4 ">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={linkClass}
                onClick={() => setopen(false)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

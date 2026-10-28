import { NavLink } from "react-router-dom";

export const Navbar = () => {

  const linkClass = ({ isActive }) =>
  `text-base transition-colors hover:text-[#722f37] ${
    isActive ? "font-bold text-[#722f37]" : " text-[#722f37]"
  }`;
  return (
    <nav className="bg-[#e8dcc6] border-t-2 border-[#3a3540] shadow-md">
      <div className="mx-auto flex items-center justify-between px-6 py-2">
        <NavLink to="/" className="flex flex-col leading-tight">
          <span className="text-3xl font-extrabold tracking-wide text-[#722f37]">
            J-D-3D-Printers
          </span>
          <span className="text-sm font-bold text-[#722f37]">
            An Ultimate 3D printing Hub
          </span>
        </NavLink>

        <ul className="flex items-center gap-8">
          <li>
            <NavLink to="/" className={linkClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Product" className={linkClass}>Product</NavLink>
          </li>
          <li>
            <NavLink to="/Services" className={linkClass}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/About" className={linkClass}>About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className={linkClass}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/Search" className={linkClass}>
              <svg
                className="h-6 w-6 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="M16 16l5 5" strokeLinecap="round" />
              </svg>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

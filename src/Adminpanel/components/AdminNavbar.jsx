import logo from "../../assets/logo.png";
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate, NavLink } from "react-router-dom";


export const links = [
  // { to: "/admin/dashboard", label: "Dashboard", end: true },
  { to: "/", label: "Home", end: true },
  
];

const linkClass = ({ isActive }) =>
  `text-base transition-colors hover:text-[#722f37] ${
    isActive ? "font-bold text-[#722f37]" : "text-[#722f37]"
  }`;


export const AdminNavbar = ({onAddProduct, onViewProducts}) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/admin/login", { replace: true });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <nav className="flex items-center justify-between bg-[#e8dcc6] px-6 py-3">
      {/* Logo */}
      <NavLink to="/admin/dashboard" className="flex shrink-0 items-center">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="J&D 3D Printer"
            className="h-16 w-auto object-contain"
          />

          <p className="text-left text-[16px] text-[#722f37]">
            welcome, Admin.name
          </p>
        </div>
      </NavLink>

      {/* Admin navigation links */}
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={linkClass}
          >
            {link.label}
          </NavLink>
        ))}

        <button
          type="button"
          onClick={handleLogout}
          className="rounded-lg bg-[#722f37] px-4 py-2 text-white transition hover:bg-[#5b252c]"
        >
          Logout
        </button>
        <div className="flex gap-4 items-center">
        <button
          onClick={onAddProduct}
            className="rounded-lg bg-[#722f37] px-4 py-2 text-white transition hover:bg-[#5b252c]"
        >
          + Add Product
        </button>
        <button
          onClick={onViewProducts}
            className="rounded-lg bg-[#722f37] px-4 py-2 text-white transition hover:bg-[#5b252c]"
        >
          View Product
        </button>

      </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
import logo from "../../assets/logo.png";
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate, NavLink } from "react-router-dom";


export const links = [
  { to: "/", label: "Home", end: true },
  
];

const linkClass = ({ isActive }) =>
  `text-base transition-colors hover:text-[#722f37] ${
    isActive ? "font-bold text-[#722f37]" : "text-[#722f37]"
  }`;


export const AdminNavbar = ({ onAddProduct, onEditProducts }) => {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const adminEmail = profile?.email || "Admin";
  const adminName = adminEmail.split("@")[0];

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/admin/login", { replace: true });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <nav className="admin-navbar flex items-center justify-between bg-[#e8dcc6] px-6 py-3">
      {/* Logo */}
      <NavLink to="/admin/dashboard" className="flex shrink-0 items-center">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="J&D 3D Printer"
            className="h-16 w-auto object-contain"
          />

          <p className="admin-welcome text-left text-[16px] text-[#722f37]">
            Welcome, {adminName}
          </p>
        </div>
      </NavLink>

      {/* Admin navigation links */}
      <div className="admin-nav-content flex items-center gap-6">
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
        <div className="admin-nav-actions flex gap-4 items-center">
          <button
            type="button"
            onClick={onAddProduct}
            className="admin-nav-button"
          >
            + Add Product
          </button>
          <button
            type="button"
            onClick={onEditProducts}
            className="admin-nav-button"
          >
            Edit Products
          </button>
          <button
            type="button"
            onClick={() => window.location.assign("https://analytics.google.com/")}
            className="admin-nav-button"
          >
            Google Analytics
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="admin-nav-button"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;

import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import ViewProducts from "../Getproducts";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>

 <ViewProducts />

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

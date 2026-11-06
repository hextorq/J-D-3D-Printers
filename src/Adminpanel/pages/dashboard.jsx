import { Link } from "react-router-dom";
import ViewProducts from "../pages/Getproducts";
import AdminNavbar from "../components/AdminNavbar";


const Dashboard = () => {
  

  return (
    <>
    <AdminNavbar />
    <div className="dashboard-container">
<h1>Admin Dashboard</h1>
      <div className="admin-container" >

<div>
  <ViewProducts />
</div>
      


</div>
     
    </div>
    </>
  );
};

export default Dashboard;

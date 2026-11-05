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

<div className="inline-block rounded-lg bg-[#722f37] px-6 py-3 text-white transition hover:bg-[#5b252c]">
  <ViewProducts />
</div>
      


</div>
     
    </div>
    </>
  );
};

export default Dashboard;

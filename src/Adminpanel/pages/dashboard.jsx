
import { useState } from "react";
import ViewProducts from "../pages/Getproducts";
import AdminNavbar from "../components/AdminNavbar";
import ProductForm from "./Addproduct";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  return (
    <>
      <AdminNavbar
        onAddProduct={() => {
          setShowForm(true);
          setShowProducts(false);
        }}
        onViewProducts={() => {
          setShowProducts(true);
          setShowForm(false);
        }}
      />

      <div className="dashboard-container">
        <h1>Admin Dashboard</h1>
        <p>
          display dashboard data
        </p>
      </div>

      {showProducts && (
        <ViewProducts onClose={() => setShowProducts(false)} />
      )}

      {showForm && (
        <ProductForm onClose={() => setShowForm(false)} />
      )}
    </>
  );
};

export default Dashboard;

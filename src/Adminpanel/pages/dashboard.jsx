
import { useState } from "react";
import ViewProducts from "../components/Getproducts";
import AdminNavbar from "../components/AdminNavbar";
import ProductForm from "../components/Addproduct";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [showEditProducts, setShowEditProducts] = useState(false);

  return (
    <>
      <AdminNavbar
        onAddProduct={() => {
          setShowForm(true);
          setShowEditProducts(false);
        }}
        onEditProducts={() => {
          setShowEditProducts(true);
          setShowForm(false);
        }}
      />

      <main className="dashboard-container admin-dashboard">
        <h1>Admin Dashboard</h1>
        <p>
          display dashboard data
        </p>
      </main>

      {showEditProducts && (
        <ViewProducts onClose={() => setShowEditProducts(false)} />
      )}

      {showForm && (
        <ProductForm onClose={() => setShowForm(false)} />
      )}
    </>
  );
};

export default Dashboard;

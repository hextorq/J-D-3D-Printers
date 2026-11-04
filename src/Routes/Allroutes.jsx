import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Search, Services, Product, About, Contact } from "../Pages";
import ProtectedRoute from "../Adminpanel/components/ProtectedRoute";
import { AuthProvider } from "../Adminpanel/AuthContext/AuthContext";
import AdminLogin from "../Adminpanel/pages/AdminLogin";
import Dashboard from "../Adminpanel/pages/dashboard";


const Allroutes = () => {
  return (
    <>
    <AuthProvider>
      <Routes>
               {/* Public Routes */}
        <Route path="*" element={<Navigate to="/" replace />}/>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

               {/* Admin Login */}
        <Route path="/admin/login"element={<AdminLogin />}/>

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/dashboard" element={<Dashboard />}/>
          </Route>

      </Routes>
      </AuthProvider>
    </>
  );
};

export default Allroutes;

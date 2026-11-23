import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Services, Custom3d, Product, About, Contact } from "../Pages";
import ProtectedRoute from "../Adminpanel/components/ProtectedRoute";
import { AuthProvider } from "../Adminpanel/AuthContext/AuthContext";
import AdminLogin from "../Adminpanel/pages/AdminLogin";
import Dashboard from "../Adminpanel/pages/dashboard";
import {Navbar} from "../Components/Navbar";
import Signup from "../Pages/signup";
import Login from "../Pages/login";
const Allroutes = () => {
  return (
    <>
    <AuthProvider>
      <Routes>
               {/* Public Routes */}
        <Route path="*" element={<Navigate to="/" replace />}/>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<><Navbar /><Product /></>}/>
        <Route path="/Custom3D" element={<><Navbar /><Custom3d /></>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

               {/* Admin Login */}
        <Route path="/admin/login"element={<AdminLogin />}/>

          {/* Protected Admin Routes */}
            <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>


      </Routes>
      </AuthProvider>
    </>
  );
};

export default Allroutes;

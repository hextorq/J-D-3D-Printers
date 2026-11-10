
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";

function ProtectedRoute({ children }) {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return <h2>Checking authentication...</h2>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (profile?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;

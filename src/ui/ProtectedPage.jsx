import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Loader from "./Loader";

const ProtectedPage = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/sign/in" replace />;
  }

  if (!user.email_confirmed_at) return <Navigate to="/verify-email" replace />;

  return <>{children}</>;
};

export default ProtectedPage;

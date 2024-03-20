import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/use-auth";

const AuthenticatedRoute = () => {
  const { isAuthenticated, data } = useAuth();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isAuthenticated && !data) return null;

  if (isLoggedIn && isAuthenticated) {
    return <Outlet />;
  }
};
export default AuthenticatedRoute;

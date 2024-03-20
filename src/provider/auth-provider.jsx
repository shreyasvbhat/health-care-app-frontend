import {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
  useTransition,
} from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Toaster, toast } from "sonner";
import axios from "../lib/axios";
import { authRoutes, publicRoutes } from "../routes";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let [searchParams] = useSearchParams();

  const [isLoading, startTransition] = useTransition();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState(null);

  console.log(data, isAuthenticated);

  const registerUser = (registerData) => {
    startTransition(async () => {
      try {
        const res = await axios.post("/auth/register", registerData);
        const user = res.data.data;
        setIsAuthenticated(true);
        setData(user);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        toast.success(res.data.message || "Registered user successfully");
        if (user.role === "DOCTOR") {
          navigate(`/workDetails/${user._id}`, { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "Failed to register");
        return false;
      }
    });
  };

  const loginUser = (loginData) => {
    startTransition(async () => {
      try {
        const res = await axios.post("/auth/login", loginData);
        setIsAuthenticated(true);
        setData(res.data.data);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        toast.success(res.data.message || "Logged in successfully");
        navigate("/", { replace: true });
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "Failed to login");
      }
    });
  };

  const logout = () => {
    try {
      startTransition(async () => {
        await axios.get("/auth/logout");
      });
    } catch (error) {
      console.log(error);
    }
    setIsAuthenticated(false);
    setData(null);
    localStorage.removeItem("isLoggedIn");
    navigate("/login", { replace: true });
    toast.info("Logged out successfully");
  };

  useEffect(() => {
    if (isAuthenticated && data) {
      return;
    }
    if (window === undefined) return;
    window.onload = () => {
      startTransition(async () => {
        try {
          const res = await axios.get("/auth/me");
          setData(res.data.data);
          setIsAuthenticated(true);
        } catch (error) {
          console.log(error);
        }
      });
    };
    if (searchParams.get("OAuth")) {
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      toast.success(`Successfully logged in with Google!`);
      return navigate("/", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useLayoutEffect(() => {
    const authRoute = authRoutes.includes(pathname.toLowerCase());
    const publicRoute = publicRoutes.includes(pathname.toLowerCase());
    if (isAuthenticated && authRoute) {
      return navigate("/", { replace: true });
    } else if (isAuthenticated && !publicRoute) {
      return navigate(pathname, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        data,
        loginUser,
        registerUser,
        logout,
      }}
    >
      <Toaster
        position="bottom-center"
        closeButton
        richColors={true}
        className="capitalize"
      />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

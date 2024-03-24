import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className="relative flex flex-col justify-between h-full">
      <Navbar /> {/* Navbar */}
      <main
        className={`py-[60px] mb-6 ${
          pathname.includes("dashboard") ? "px-0" : "px-5"
        }`}
      >
        <Outlet /> {/* Content */}
      </main>
      <footer className="absolute bottom-0 w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

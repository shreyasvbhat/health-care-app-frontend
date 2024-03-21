import { Link, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/use-auth";

const Navbar = () => {
  const { pathname } = useLocation();
  const { logout, isAuthenticated, isLoading } = useAuth();

  const routes = [
    {
      label: "Home",
      href: "/",
      isActive: pathname === "/",
    },
    {
      label: "About",
      href: "/about",
      isActive: pathname === "/about",
    },
    {
      label: "Blogs",
      href: "/blogs",
      isActive: pathname === "/blogs",
    },
    {
      label: "Location",
      href: "/location",
      isActive: pathname === "/location",
    },
  ];

  return (
    <>
      <nav className="h-[60px] fixed inset-0 w-screen px-5 text-white text-right flex justify-between items-center bg-blue-600 z-10 shadow-md">
        <Link to="/">
          <h1 className="text-xl font-bold">HealthCare</h1>
        </Link>
        <div className="flex gap-4 items-center">
          <ul className="flex items-center gap-4">
            {routes.map((route, i) => (
              <Link
                key={i}
                to={route.href}
                className={`${route.isActive && "border-b border-b-white"}`}
              >
                {route.label}
              </Link>
            ))}
          </ul>
          {isLoading ? (
            <span>Loading...</span>
          ) : !isAuthenticated ? (
            <Link
              to="/login"
              className="py-2 px-3 rounded-lg bg-gray-200 text-blue-700 text-sm hover:text-white hover:bg-blue-800 transition-all ease-in-out duration-500"
            >
              Signup/Login
            </Link>
          ) : (
            <button
              onClick={() => logout()}
              className="py-2 px-3 rounded-lg bg-gray-200 text-blue-700 text-sm hover:text-white hover:bg-blue-800 transition-all ease-in-out duration-500"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
      <main className="pt-16 px-5">
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;

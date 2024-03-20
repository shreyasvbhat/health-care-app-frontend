import NavItems from "./NavItems.jsx";

const NavBar = () => {
  let icons = [
    <i key={0} className="fa-brands fa-facebook"></i>,
    <i key={1} className="fa-brands fa-instagram"></i>,
    <i key={2} className="fa-brands fa-youtube"></i>,
    <i key={3} className="fa-brands fa-linkedin"></i>,
  ];

  let routes = ["Home", "About", "Blogs"];

  return (
    <>
      <nav className="w-full flex justify-between py-3 px-7 bg-blue-900 text-white shadow-lg sticky top-0">
        <NavItems items={icons} />
        <NavItems items={routes} />
      </nav>
    </>
  );
};

export default NavBar;

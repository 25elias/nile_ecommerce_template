import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import {
  FaSearchengin,
  FaHeart,
  FaCartShopping,
  FaUser,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

const NavBar = () => {

    // Nav Items
  const NavItems = [
    { path: "/", link: "Home" },
    { path: "/products", link: "Products" },
    { path: "/new-features", link: "New Features" },
    { path: "/featured", link: "Featured" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact" },
  ];

    // Toggle Menu

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <header className="w-[100%] mb-20 bg-white fixed top-0 left-0 right-0 z-[10]">
      <nav
        className="max-w-7xl h-full py-4 m-auto text-sm text-white 
            flex items-center justify-between border-b z-1000
            "
        >
        <a href="/" 
        className="text-2xl font-semibold text-gray-900 pl-4 hover:text-blue-500 p-2"
        >nile.</a>

        {/* navigations */}
        <ul className="hidden md:flex items-center justify-between gap-4  text-center ">
          {NavItems.map(({ path, link }) => (
            <li className={({ isActive }) => (isActive ? "active" : "")}>
              <NavLink to={path} key={path}
              className="font-semibold text-gray-900 hover:text-blue-500 p-2 text-center">{link}</NavLink>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div className="lg:flex items-center gap-4 pr-4">
          <Link to={"/"}>
            <FaSearchengin className="hidden lg:block w-6 h-6 text-gray-500 hover:text-blue-500" />
          </Link>
          <Link to={"/"}>
            <FaHeart className="hidden lg:block w-6 h-6 text-gray-500 hover:text-blue-500" />
          </Link>
          <Link to={"/"}>
            <FaCartShopping className="hidden lg:block w-6 h-6 text-gray-500 hover:text-blue-500" />
          </Link>
          <Link to={"/"}>
            <FaUser className="hidden lg:block w-6 h-6 text-gray-500 hover:text-blue-500" />
          </Link>
        </div>

        {/* menu bar for mobile devices */}
        <button onClick={toggleMenu}
          className="cursor-pointer md:hidden">
            {
                !isMenuOpen ? (
                    <FaBars className="text-black w-5 h-5 mr-4 outline-none" /> 
                ) : (
                    <FaXmark className="text-black w-5 h-5 mr-4 outline-none" />
                )
            }
        </button>

      </nav>

      {/* nav-items for mobile devices */}
      <div className={`md:hidden block
             bg-white text-black ${
               isMenuOpen
                 ? "fixed top-0 left-0 right-0 transition mt-[5rem] border-t pl-4 ease-out duration-200"
                 : "hidden"
             }`}>

            <ul className="flex flex-col space-y-4 py-8">
                {NavItems.map(({ path, link }) => (
                    <li className={({ isActive }) => (isActive ? "active" : "")}>
                    <NavLink to={path} key={path}
                    onClick={toggleMenu}
                    className="font-semibold text-gray-900 hover:text-blue-500 p-2 text-center">{link}</NavLink>
                    </li>
                ))}
            </ul>
      </div>
    </header>
  );
};

export default NavBar;

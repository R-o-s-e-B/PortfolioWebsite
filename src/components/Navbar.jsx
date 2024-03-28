import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import navIcon from "../assets/images/menu.png";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [toggle, setToggle] = useState(false);

  const checkScreenSize = () => {
    setShowNav(window.innerWidth < 640); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    checkScreenSize();

    // Add event listener to window resize event to update showNav state dynamically
    window.addEventListener("resize", checkScreenSize);

    // Remove event listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <>
      {!showNav && (
        <nav className="hidden sm:flex w-full justify-end ml-0 mr-40 py-5 px-24 fixed top-0 bg-primary z-50">
          <div className="flex-none w-120"></div>
          <Link to="/">
            <div className="mx-12 text-xl lg:text-2xl hover:text-secondary">
              About
            </div>
          </Link>

          <Link to="/Work">
            <div className="mx-12 mr-56 text-xl lg:text-2xl hover:text-secondary">
              Works
            </div>
          </Link>
        </nav>
      )}

      {toggle && (
        <div className="p-2 md:hidden lg:hidden fixed top-16 right-0 mx-4 my-4 min-w-[100px] rounded-xl shadow-md z-40 gap-5">
          <Link to="/">
            <div className="mx-12 my-4 text-xl lg:text-2xl hover:text-secondary">
              About
            </div>
          </Link>

          <Link to="/Work">
            <div className="mx-12 my-4 text-xl lg:text-2xl hover:text-secondary">
              Works
            </div>
          </Link>
        </div>
      )}

      {showNav && (
        <div className="p-6 fixed top-2 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl">
          <img
            onClick={() => {
              toggle ? setToggle(false) : setToggle(true);
            }}
            src={navIcon}
            alt="Navigation"
            className="w-8 cursor-pointer"
          ></img>
        </div>
      )}
    </>
  );
};

export default Navbar;

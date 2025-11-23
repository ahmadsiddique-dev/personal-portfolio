import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="neumorphic mt-6 w-[92vw] md:w-[70vw] mx-auto px-4 md:px-8 py-3 flex justify-between items-center shadow-lg backdrop-blur-lg">
      
      {/* LOGO */}
      <div className="w-16 h-16 overflow-hidden rounded-full shadow-md">
        <img
          className="w-full h-full object-cover"
          src="/logo.jpeg"
          alt="logo-picture"
        />
      </div>

      {/* NAV ITEMS */}
      <ul className="flex items-center gap-3 md:gap-6">
        <li className="neumorphic-button px-4 py-2 hover:scale-[1.04] active:scale-95 transition">
          <Link to={"/project"}>Projects</Link>
        </li>
        <a href="#contact-section"><li className="neumorphic-button px-4 py-2 hover:scale-[1.04] active:scale-95 transition">
          Contact
        </li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;

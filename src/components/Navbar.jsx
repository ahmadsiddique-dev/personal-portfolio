import React from "react";

const Navbar = () => {
  return (
    <div className="neumorphic text mt-5 flex justify-between w-[90vw] md:w-[65vw] mx-auto pr-2 md:pr-7 items-center">
      <div className="w-16 h-16 overflow-hidden rounded-full">
        <img
          className="w-full h-full object-contain"
          src="https://ahmadsiddique.vercel.app/assets/profile.png"
          alt="logo-picture"
        />
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li className="px-4 py-4 neumorphic-button">Projects</li>
          <li className="px-4 py-4 neumorphic-button">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

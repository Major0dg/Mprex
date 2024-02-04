import React from "react";
import { BsCart } from "react-icons/bs";
import { profile } from "../Assets";

const Navbar = () => {
  return (
    <nav className="text-red-600 w-full h-22 bg-white border-b-[1px] border-b-gray-800 font-titleFont">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <img src={profile} alt="logo" className="h-18 w-24" />
        </div>
        <div>
          <ul className="flex items-center gap-8">
            <li className="nav-li">Home</li>
            <li className="nav-li">Pages</li>
            <li className="nav-li">Shop</li>
            <li className="nav-li">Element</li>
            <li className="nav-li">Blog</li>
            <li className="flex-row items-center cursor-pointer">
              <BsCart />
            </li>
            <div>
              <img src={profile} alt="profile-img" className="h-7 w-8" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

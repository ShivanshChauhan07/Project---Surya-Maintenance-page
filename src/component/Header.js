import React from "react";

const Header = () => {
  return (
    <div className="header flex justify-between px-20 shadow-xl ">
      <div className="logo my-4 w-[500px] h-28">
        <img className="w-[500px] h-24 my-3" src="./logo.png" alt="" />
      </div>
      <div className="options h-20 my-auto text-md font-normal p-4 tracking-wider">
        <ul className="flex p-4 ">
          <li className="mx-6 transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
            Home
          </li>
          <li className="mx-6 transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
            What we do
          </li>
          <li className="mx-6 transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
            About us
          </li>
          <li className="mx-6 transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
            Features
          </li>
          <li className="mx-6 transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
            Query
          </li>
          <li className="mx-6 transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
            Vendors
          </li>
          <li className="mx-6 transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
            Contact us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

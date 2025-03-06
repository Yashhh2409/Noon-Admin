import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="w-full bg-[#FFFFFF]">
      <div className="flex justify-between items-center w-full gap-5 px-5 mx-auto py-5">
        <div className="w-full flex items-center bg-[#F3F3F3] py-2 px-4 rounded-full">
          <FontAwesomeIcon
            icon={faSearch}
            width={20}
            height={20}
            className="text-gray-500 mr-2"
          />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none border-none !border-0 w-full"
          />
        </div>

        {/* Logout Button */}
        <button className="bg-[#222222] text-white px-5 py-2 rounded-full hover:bg-gray-700 transition">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

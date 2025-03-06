"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBoxOpen,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col items-start justify-start pt-6 text-white">
      <Link href={"/dashbord"} className="flex justify-center items-center w-full h-[15%]">
      <h1 className="font-bold text-base sm:text-lg md:text-xl lg:text-4xl">Noon</h1>

      </Link>

      {/* Home Setting */}
      <Link
        href="/homesetting"
        className={`flex items-center gap-3 px-4 py-3 mx-auto rounded-md w-[80%] ${
          pathname === "/homesetting" ? "bg-[#222222] border-l-4 text-white" : ""
        }`}
      >
        <FontAwesomeIcon icon={faHome} width={20} height={20} />
        <p className="hidden md:block text-sm">Home Setting</p>
      </Link>

      {/* List Products */}
      <Link
        href="/addProducts"
        className={`flex items-center gap-3 px-4 py-3 mx-auto rounded-md w-[80%] ${
          pathname === "/addProducts" ? "bg-[#222222] border-l-4 text-white" : ""
        }`}
      >
        <FontAwesomeIcon icon={faBoxOpen} width={20} height={20} />
        <p className="hidden md:block text-sm">Add Products</p>
      </Link>

      {/* Orders */}
      <Link
        href="/orders"
        className={`flex items-center gap-3 px-4 py-3 mx-auto rounded-md w-[80%] ${
          pathname === "/orders" ? "bg-[#222222] border-l-4 text-white" : ""
        }`}
      >
        <FontAwesomeIcon icon={faClipboardList} width={20} height={20} />
        <p className="hidden md:block text-sm">Orders</p>
      </Link>
    </div>
  );
};

export default Sidebar;

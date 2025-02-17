"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-[#1A1A1A] top- fixed w-full  border-solid border-x-[0px] border-t-[0px] border-grayTwo border-[2px]">
      <div className=" w-full  pt-[40px] pb-[20px] px-[16px] flex items-center justify-between ">
        <Link href={"/"}>
          <Image src="/Logo.svg" alt="logo" width={100} height={100} />
        </Link>

        <div className="menu flex items-center justify-center rounded-[6px] bg-grayTwo px-[7px] py-[10px] max-h-[34px]">
          <Image
            onClick={handleMenu}
            src={isMenuOpen ? "/close.svg" : "/bars.svg"}
            width={20}
            height={20}
            alt=""
            className={`cursor-pointer transition-all duration-300 ease-in-out ${
              isMenuOpen ? "transform rotate-180" : ""
            } overflow-hidden`}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

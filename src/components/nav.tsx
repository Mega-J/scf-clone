"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/components/assets/Scf.png";

import { NavbarProps } from "@/lib/types";

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");
  const router = useRouter();
  const currentPath = usePathname();

  const navToggler = () => {
    setActive(active === "nav-menu" ? "nav-menu nav-active" : "nav-menu");
    setToggleIcon(
      toggleIcon === "nav-toggler" ? "nav-toggler toggler" : "nav-toggler"
    );
  };

  const handleLinkClick = (href: string) => {
    if (currentPath !== "/") {
      router.push("/");
    }
    setTimeout(() => {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 0);
    setActive("nav-menu"); // Close the navigation menu
    setToggleIcon("nav-toggler"); // Reset the toggle icon
  };

  return (
    <nav className="fixed z-40 flex items-center justify-between w-full px-8 md:px-16 lg:px-24 py-8 text-white bg-[#FF4402] xl:relative">
      <div>
      <Link className="flex items-center text-2xl md:text-[32px] font-bold" href="/">
        <Image src={logo} alt="SCF" className="mr-2 w-auto h-8" />
        
    </Link>
      </div>
      <div
        className={`${active} w-[60%] md:w-[40%] xl:w-fit md:bg-none top-[40px] md:top-[70px] bg-[#fff] md:mt-0 mt-10`}
      >
        <ul className="flex flex-col items-baseline px-6 space-y-6 font-medium xl:flex-row xl:items-center xl:space-y-0 xl:px-0 xl:space-x-4">
          {menuItems.map((menuitem, index) => (
            <li
              key={index}
              className=" select-none duration-200 lg:hover:text-gray-200 cursor-pointer text-[20px] font-medium text-black"
            >
              <ScrollLink
                href="#"
                to={menuitem.target}
                offset={50}
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick(menuitem.target)}
              >
                {menuitem.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
      <div onClick={navToggler} className={toggleIcon}>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    </nav>
  );
};

export default Navbar;

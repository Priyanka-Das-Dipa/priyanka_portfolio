"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About Me",
    path: "#about",
  },
  {
    title: "Skill",
    path: "#skill",
  },
  {
    title: "Projects",
    path: "#project",
  },
  {
    title: "Contact Me",
    path: "#contact",
  },
];

const Navbar = () => {
  const [nabvarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-[#353434] b-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-2">
        <Link
          href={"/"}
          className="text-3xl md:text-5xl text-white font-semibold"
        >
          Portfolio
        </Link>
        <div className="mobile-menu block md:hidden">
          {!nabvarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="text-white">
              <Bars3Icon className="h-5 w-5"></Bars3Icon>
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className="text-white">
              <XMarkIcon className="h-5 w-5"></XMarkIcon>
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 mr-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLinks href={link.path} title={link.title}></NavLinks>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {nabvarOpen ? <MenuOverlay links={navLinks}></MenuOverlay> : null}
    </nav>
  );
};

export default Navbar;

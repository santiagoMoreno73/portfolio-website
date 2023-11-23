"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// icons
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// components
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  { title: "Sobre mi", path: "#about" },
  { title: "Proyectos", path: "#projects" },
  { title: "Contacto", path: "#contact" },
];

const Navbar = ({ handleChangeTheme, icon }) => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth > 960 && setNavOpen(false)
    );
  }, []);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-[#202023] bg-opacity-100">
      <div className="flex container lg:py-flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            className="rounded-full"
            alt="logo"
            src="/images/logo.png"
            width={50}
            height={50}
          />
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navOpen ? (
            <button
              onClick={() => setNavOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;

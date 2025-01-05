"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between bg-white h-[60px] px-4 sm:px-6">
        {/* Logo */}
        <Image
          src={"/images/logo.jpg"}
          alt="logo uti"
          width={50}
          height={50}
          priority
          className="rounded-full"
        />

        {/* Hamburger menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="sm:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-200"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menu Links (Desktop) */}
        <div className="hidden sm:flex space-x-4">
          <Link
            href="#beranda"
            className="font-roboto hover:text-white cursor-pointer hover:bg-color2 px-3 py-1 rounded-md transition-all"
          >
            Beranda
          </Link>
          <Link
            href="#about"
            className="font-roboto hover:text-white cursor-pointer hover:bg-color2 px-3 py-1 rounded-md transition-all"
          >
            About
          </Link>
          <Link
            href="#menu"
            className="font-roboto hover:text-white cursor-pointer hover:bg-color2 px-3 py-1 rounded-md transition-all"
          >
            Menu
          </Link>
          <Link
            href="#gallery"
            className="font-roboto hover:text-white cursor-pointer hover:bg-color2 px-3 py-1 rounded-md transition-all"
          >
            Gallery
          </Link>
          <Link
            href="#footer"
            className="font-roboto hover:text-white cursor-pointer hover:bg-color2 px-3 py-1 rounded-md transition-all"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="fixed top-[60px] left-0 right-0 z-40 bg-white shadow-md sm:hidden">
          <div className="space-y-1 px-4 py-3 ">
            <Link
              href="#beranda"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-color1 hover:text-white"
            >
              Beranda
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-color1 hover:text-white"
            >
              About
            </Link>
            <Link
              href="#menu"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-color1 hover:text-white"
            >
              Menu
            </Link>
            <Link
              href="#gallery"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-color1 hover:text-white"
            >
              Gallery
            </Link>
            <Link
              href="#footer"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-color1 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

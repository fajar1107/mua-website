import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const TopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 sm:px-12 py-4">
        {/* Brand Name */}
        <RouterLink
          to="/"
          className="text-[#830000] font-bold text-xl sm:text-2xl"
        >
          Nazrin's Makeover
        </RouterLink>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-8 text-[#830000] font-medium">
          <li>
            <RouterLink to="/" className="hover:text-red-700">
              Home
            </RouterLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-red-700"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-red-700"
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <RouterLink to="/packages" className="hover:text-red-700">
              Packages
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/gallery" className="hover:text-red-700">
              Gallery
            </RouterLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-red-700"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className="w-6 h-6 text-[#830000]" />
          ) : (
            <Menu className="w-6 h-6 text-[#830000]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="sm:hidden flex flex-col items-center bg-white py-4 space-y-4 shadow-md">
          <li>
            <RouterLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-700"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-red-700"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-red-700"
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <RouterLink
              to="/packages"
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-700"
            >
              Packages
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-700"
            >
              Gallery
            </RouterLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-red-700"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default TopNavbar;

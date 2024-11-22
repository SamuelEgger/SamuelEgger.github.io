"use client";

import { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-blend-darken shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <nav className="flex space-x-4">
              <a href="#projects" className="text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </a>
              <a href="#about" className="text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About me
              </a>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars4Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                
            </a>
            <a href="#projects" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              Projects
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

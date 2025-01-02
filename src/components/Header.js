import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AT_LOGO from "../assest/AT_LOGO.webp";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white">
            <img src={AT_LOGO} className="h-10 w-15" alt="Amazetech Corporation" loading="lazy" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium hover:text-green-600 text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium hover:text-green-600 text-white"
            >
              About
            </Link>
            <Link
              to="/product"
              className="text-sm font-medium hover:text-green-600 text-white"
            >
              Product
            </Link>
            <Link
              to="/service"
              className="text-sm font-medium hover:text-green-600 text-white"
            >
              Service
            </Link>
            <Link
              to="/Quality"
              className="text-sm font-medium hover:text-green-600 text-white"
            >
              Quality
            </Link>
            <Link
              to="/contact"
              className="bg-[#90C418] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#7BA615]"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/" className="text-sm font-medium hover:text-green-600">
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium hover:text-green-600"
            >
              About
            </Link>
            <Link
              to="/product"
              className="text-sm font-medium hover:text-green-600"
            >
              Product
            </Link>
            <Link
              to="/service"
              className="text-sm font-medium hover:text-green-600"
            >
              Service
            </Link>
            <Link
              to="/Quality"
              className="text-sm font-medium hover:text-green-600"
            >
              Quality
            </Link>
            <Link
              to="/contact"
              className="bg-[#90C418] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#7BA615] inline-block text-center"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

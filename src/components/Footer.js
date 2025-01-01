import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#E8F6D5] px-4 sm:px-6 md:px-10 lg:px-20 pt-12 md:pt-20 pb-6 md:pb-10">
      <div className="container mx-auto">
        {/* Title Section */}
        <h2 className="text-2xl sm:text-3xl font-serif text-center mb-8 md:mb-16 leading-relaxed px-4">
          <span className="font-bold uppercase">We Care</span> the Planet's Most
          <span className="text-[#90C418] font-semibold">
            {" "}
            Precious Resources
          </span>
          <span className="block text-base sm:text-lg font-medium text-gray-600 mt-2">
            # For a Better Tomorrow
          </span>
        </h2>

        {/* Footer Grid */}
        <div className="bg-white p-4 sm:p-6 md:p-10 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Company Info */}
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <Link to="/" className="text-lg sm:text-xl font-bold mb-4 block">
                AMAZETECH CORPORATION
              </Link>
              <p className="text-gray-600 text-sm mb-4">
                AMAZETECH CORPORATION is a leader in water and wastewater
                treatment solutions, providing a wide range of chemicals and
                services tailored to industries, institutions, and communities.
              </p>
              <div className="flex gap-4">
                {["#", "#", "#"].map((link, index) => (
                  <Link
                    key={index}
                    to={link}
                    className="text-gray-600 hover:text-[#90C418] transition duration-300"
                  >
                    {index === 0 ? (
                      <Facebook className="h-5 w-5" />
                    ) : index === 1 ? (
                      <Twitter className="h-5 w-5" />
                    ) : (
                      <Linkedin className="h-5 w-5" />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Pages Section */}
            <div>
              <h3 className="font-bold mb-4 text-base sm:text-lg">Pages</h3>
              <div className="space-y-2">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-[#90C418] block text-sm sm:text-base"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-[#90C418] block text-sm sm:text-base"
                >
                  About
                </Link>
                <Link
                  to="/service"
                  className="text-gray-600 hover:text-[#90C418] block text-sm sm:text-base"
                >
                  Services
                </Link>
                <Link
                  to="/Quality"
                  className="text-gray-600 hover:text-[#90C418] block text-sm sm:text-base"
                >
                  Quality
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-[#90C418] block text-sm sm:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Products Section */}
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <h3 className="font-bold mb-4 text-base sm:text-lg">Products</h3>
              <div className="space-y-2 text-sm sm:text-base">
                <Link
                  to="/products/boilerTreatment"
                  className="text-gray-600 hover:text-[#90C418] block"
                >
                  Boiler Treatment Chemicals
                </Link>
                <Link
                  to="/products/coolingTower"
                  className="text-gray-600 hover:text-[#90C418] block"
                >
                  Cooling Tower Treatment Chemicals
                </Link>
                <Link
                  to="/products/chillerTreatment"
                  className="text-gray-600 hover:text-[#90C418] block"
                >
                  Chiller Treatment Chemicals
                </Link>
                <Link
                  to="/products/roTreatment"
                  className="text-gray-600 hover:text-[#90C418] block"
                >
                  RO Treatment Chemicals
                </Link>
                <Link
                  to="/products/defoamers"
                  className="text-gray-600 hover:text-[#90C418] block"
                >
                  Defoamers
                </Link>
                <Link
                  to="/products/paperAndSugar"
                  className="text-gray-600 hover:text-[#90C418] block"
                >
                  Paper & Sugar Processing Chemicals
                </Link>
                <Link
                  to="/products/miningConstruction"
                  className="text-gray-600 hover:text-[#90C418] block"
                >
                  Mining & Construction Water Treatment
                </Link>
                <Link
                  to="/products/etpTreatment"
                  className="text-gray-600 hover:text-[#90C418] block"
                >
                  ETP Treatment Chemicals
                </Link>
                <Link
                  to="/products/stpTreatment"
                  className="text-gray-600 hover:text-[#90C418] block"
                >
                  STP Treatment Chemicals
                </Link>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="font-bold mb-4 text-base sm:text-lg">Contact</h3>
              <div className="space-y-2 text-gray-600 max-w-full text-sm sm:text-base">
                <p>4/220-A, Ground Floor, Mahalakshmi Nagar,</p>
                <p>Thiruchengode, Namakkal, Tamil Nadu, 638008</p>
                <p>GSTIN/UIN: 33BCRPJ5810R1Z0</p>
                <p>State Name: Tamil Nadu, Code: 33</p>
                <div className="break-all">
                  <a
                    href="mailto:amazetechcrpn999@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    amazetechcrpn999@gmail.com
                  </a>
                </div>
                <p>+91 9946303595</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          {/* <div className="border-t pt-6 md:pt-8 text-center text-xs sm:text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link to="/PrivacyPolicy" className="hover:text-[#90C418] transition duration-300">
              Privacy Policy
            </Link>
            <a
              href="https://www.val-x.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#90C418] transition duration-300 font-bold order-first sm:order-none"
            >
              Crafted by Val-X
            </a>
            <Link to="/TermsAndConditions" className="hover:text-[#90C418] transition duration-300">
              Terms & Conditions
            </Link>
          </div> */}
          <div className="border-t pt-6 md:pt-8 text-center text-xs sm:text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center gap-4">
            <a
              href="https://www.val-x.in/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#90C418] transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.val-x.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#90C418] transition duration-300 font-bold order-first sm:order-none"
            >
              Crafted by Val-X
            </a>
            <a
              href="https://www.val-x.in/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#90C418] transition duration-300"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

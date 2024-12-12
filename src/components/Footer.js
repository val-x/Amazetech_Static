import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 px-10 md:px-20 pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <h2 className="text-3xl font-serif text-center mb-16 leading-relaxed">
          <span className="font-bold uppercase">We Care</span> the Planet's Most
          <span className="text-[#90C418] font-semibold">
            {" "}
            Precious Resources
          </span>
          <span className="block text-lg font-medium text-gray-600 mt-2">
            # For a Better Tomorrow
          </span>
        </h2>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-xl font-bold mb-4 block">
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
            <h3 className="font-bold mb-4">Pages</h3>
            {["Home", "About", "Services", "Contact"].map((page, index) => (
              <Link
                key={index}
                to={`/${page.toLowerCase()}`}
                className="text-gray-600 hover:text-[#90C418] block transition duration-300"
              >
                {page}
              </Link>
            ))}
          </div>

          {/* Products Section */}
          {/* <div>
            <h3 className="font-bold mb-4">Products</h3>
            {[
              "Boiler Treatment Chemicals",
              "Cooling Tower Treatment Chemicals",
              "Chiller Treatment Chemicals",
              "RO Treatment Chemicals",
              " Defoamers",
              "Paper & Sugar Processing Chemicals",
              "Mining & Construction Water Treatment Chemicals",
              "ETP Treatment Chemicals",
              "STP Treatment Chemicals",
            ].map((product, index) => (
              <Link
                key={index}
                to={`/${product.toLowerCase().replace(/ /g, "")}`}
                className="text-gray-600 hover:text-[#90C418] block transition duration-300"
              >
                {product}
              </Link>
            ))}
          </div> */}
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <div className="space-y-2">
              <Link
                to="/product"
                className="text-gray-600 hover:text-[#90C418] block"
              >
                Boiler Treatment Chemicals
              </Link>
              <Link
                to="/product"
                className="text-gray-600 hover:text-[#90C418] block"
              >
                Cooling Tower Treatment Chemicals
              </Link>
              <Link
                to="/product"
                className="text-gray-600 hover:text-[#90C418] block"
              >
                Chiller Treatment Chemicals
              </Link>
              <Link
                to="/product"
                className="text-gray-600 hover:text-[#90C418] block"
              >
                RO Treatment Chemicals
              </Link>
              <Link
                to="/product"
                className="text-gray-600 hover:text-[#90C418] block"
              >
                Defoamers
              </Link>
              <Link
                to="/product"
                className="text-gray-600 hover:text-[#90C418] block"
              >
                Paper & Sugar Processing Chemicals
              </Link>
              {/* <Link
                to="/product"
                className="text-gray-600 hover:text-[#90C418] block"
              >
                Mining & Construction Water Treatment Chemicals
              </Link> */}
              <Link
                to="/products/ETP"
                className="text-gray-600 hover:text-[#90C418] block"
              >
                ETP Treatment Chemicals
              </Link>
              <Link
                to="/products/STP"
                className="text-gray-600 hover:text-[#90C418] block"
              >
                STP Treatment Chemicals
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-600">
              <p>4/220-A, Ground Floor, Mahalakshmi Nagar,</p>
              <p>Thiruchengode, Namakkal, Tamil Nadu, 638008</p>
              <p>GSTIN/UIN: 33BCRPJ5810R1Z0</p>
              <p>State Name: Tamil Nadu, Code: 33</p>
              <p>
                <a
                  href="mailto:amazetechcrpn999@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  amazetechcrpn999@gmail.com
                </a>
              </p>
              <p>+91 9946303595</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t pt-8 text-center text-sm text-gray-600 flex flex-col md:flex-row justify-between">
          <Link
            to="/PrivacyPolicy"
            className="hover:text-[#90C418] transition duration-300"
          >
            Privacy Policy
          </Link>
          <a
            href="https://www.val-x.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#90C418] transition duration-300 font-bold"
          >
            Crafted by Val-X
          </a>
          <Link
            to="/TermsAndConditions"
            className="hover:text-[#90C418] transition duration-300"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

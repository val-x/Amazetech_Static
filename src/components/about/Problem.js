import React from "react";
import { ArrowRight, Lightbulb, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import Wind from "../../assest/wind.png";

export default function Industries() {
  return (
    <section className="py-20 p-10 md:px-20 bg-[#F7F8F3]">
      <div className="container mx-auto  px-4">
        <div className="grid md:grid-cols-2 gap-12  items-center">
          {/* Image Grid */}
          <div className=" h-[400px]">
            <div className="grid grid-cols-2  gap-3 h-[400px]">
              <div className="">
                <div className="h-[70px]  rounded-2xl"></div>
                <div className="h-[320px] bg-black mt-3 rounded-2xl">
                  <img
                    src={Wind}
                    alt="Wind turbine"
                    className="w-full h-full bg-yellow-200 object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="">
                <div className="h-[290px] bg-black rounded-2xl">
                  <img
                    src={Wind}
                    alt="Wind turbine"
                    className="w-full h-full bg-yellow-200 object-cover rounded-2xl"
                  />
                </div>
                <div className="h-[100px] w-[90%] bg-black mt-3 rounded-2xl">
                  <img
                    src={Wind}
                    alt="Wind turbine"
                    className="w-full h-full bg-yellow-200 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Empowering Industries with{" "}
              <span className="text-[#90C418]">Chemical Ingenuity</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Amazetech Corporation, founded in 2020, has rapidly emerged as a
              trusted leader in the water treatment industry. With over 7 years
              of expertise, we are committed to revolutionizing water management
              through innovation, dedication, and technology-driven solutions.
              Our state-of-the-art water treatment products and services cater
              to diverse sectors, empowering industries, institutions, and
              communities alike.
            </p>
            <div className="space-y-6 mb-8"></div>
            {/* Learn More Link */}
            <Link
              to="/learn-more"
              className="inline-flex items-center gap-2 text-[#90C418] border-2 border-slate-900 rounded-3xl  p-3 bo font-medium hover:underline"
            >
              Learn More
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

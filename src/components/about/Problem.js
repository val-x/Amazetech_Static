import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Wind from "../../assest/wind.png";

export default function Industries() {
  return (
    <section className="py-20 p-10 md:px-20 bg-[#F7F8F3]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="h-[400px]">
            <div className="grid grid-cols-2 gap-3 h-[400px]">
              <div>
                <div className="h-[70px] rounded-2xl"></div>
                <div className="h-[320px] bg-black mt-3 rounded-2xl">
                  <img
                    src={Wind}
                    alt="Industrial water treatment innovation - Amazetech Corporation"
                    className="w-full h-full bg-yellow-200 object-cover rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <div className="h-[290px] bg-black rounded-2xl">
                  <img
                    src={Wind}
                    alt="Cutting-edge chemical solutions for industries"
                    loading="lazy"
                    className="w-full h-full bg-yellow-200 object-cover rounded-2xl"
                  />
                </div>
                <div className="h-[100px] w-[90%] bg-black mt-3 rounded-2xl">
                  <img
                    src={Wind}
                    alt="Efficient water management technologies"
                    loading="lazy"
                    className="w-full h-full bg-yellow-200 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h1 className="text-3xl font-bold mb-6">
              Empowering Industries with{" "}
              <span className="text-[#90C418]">Chemical Ingenuity</span>
            </h1>
            <p className="text-gray-600 mb-8">
              <strong>Amazetech Corporation</strong>, established in 2020, is a
              leading innovator in the water treatment industry. With over 7
              years of expertise, we offer cutting-edge chemical solutions and
              technology-driven services to enhance industrial water management.
              From <strong>boiler treatment chemicals</strong> to advanced{" "}
              <strong>ETP and STP treatment solutions</strong>, we empower
              industries, institutions, and communities to achieve sustainable
              water management practices.
            </p>
            <p className="text-gray-600 mb-8">
              Our vision is to provide{" "}
              <strong>eco-friendly and efficient</strong> water and wastewater
              treatment solutions that contribute to a better tomorrow. With a
              strong focus on <strong>innovation</strong> and{" "}
              <strong>customer satisfaction</strong>, Amazetech Corporation has
              become a trusted name across India in just a few years.
            </p>
            {/* Learn More Link */}
            <Link
              to="/service"
              className="inline-flex items-center gap-2 text-[#90C418] border-2 border-slate-900 rounded-3xl p-3 font-medium hover:underline"
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

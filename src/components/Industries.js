import React from "react";
import { ArrowRight, Lightbulb, Activity } from "lucide-react";
import { Link } from "react-router-dom";

export default function Industries() {
  return (
    <section className="py-10 p-5 md:px-20 bg-[#F7F8F3]">
      <div className="container mx-auto  px-4">
        <div className="grid md:grid-cols-2 gap-12  items-center">
          {/* Image Grid */}
          <div className=" h-[400px]">
            <div className="grid grid-cols-2  gap-3 h-[400px]">
              <div className="">
                <div className="h-[70px]  rounded-2xl"></div>
                <div className="h-[320px] bg-black mt-3 rounded-2xl">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661898205432-d648667b9c76?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Advanced water treatment facility by Amazetech Corporation"
                    className="w-full h-full bg-yellow-200 object-cover rounded-2xl"
                     loading="lazy"
                  />
                </div>
              </div>
              <div className="">
                <div className="h-[290px] bg-black rounded-2xl">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/10/07/16/27/treatment-plant-wastewater-2826990_1280.jpg"
                    alt="Advanced water treatment facility by Amazetech Corporation"
                    className="w-full h-full bg-yellow-200 object-cover rounded-2xl"
                     loading="lazy"
                  />
                </div>
                <div className="h-[100px] w-[90%] bg-black mt-3 rounded-2xl">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661899579134-0457cd1c4fb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Advanced water treatment facility by Amazetech Corporation"
                    className="w-full h-full bg-yellow-200 object-cover rounded-2xl"
                     loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Leading in{" "}
              <span className="text-[#90C418]">
                Innovative Water Treatment Solutions
              </span>
            </h2>
            <p className="text-gray-600 mb-8">
              Amazetech Corporation specializes in cutting-edge water and
              wastewater treatment solutions, dedicated to conserving the
              planet's most precious resources and promoting sustainability.
            </p>

            <div className="space-y-6 mb-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <Lightbulb className="h-8 w-8 text-[#90C418] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">
                    Expert Water Treatment Expertise
                  </h3>
                  <p className="text-gray-600">
                    Providing comprehensive water treatment solutions for
                    industries, institutions, homes, and communities across
                    India.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex gap-4">
                <Activity className="h-8 w-8 text-[#90C418] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">
                    Innovative & Eco-Friendly Technologies
                  </h3>
                  <p className="text-gray-600">
                    Committed to sustainability through innovative, eco-friendly
                    water treatment technologies and solutions.
                  </p>
                </div>
              </div>
            </div>
            {/* Learn More Link */}
            <Link
              to="/service"
              className="inline-flex items-center gap-2 text-[#90C418] border-2 border-slate-900 rounded-3xl p-3 font-medium hover:underline"
              aria-label="Explore Amazetech Corporation's water treatment services"
            >
              Explore Our Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

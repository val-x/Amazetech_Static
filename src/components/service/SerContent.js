import React from "react";
import IMG1 from "../../assest/water.jpg";
import water_lab_testing from "../../assest/water_lab_testing.jpg";
import wastewater_consultancy from "../../assest/wastewater_consultancy.jpg"
import industrial_boiler_cleaning from "../../assest/industrial_boiler_cleaning.avif"
import water_treatment_plant from "../../assest/water_treatment_plant.avif"

export default function ServicesSection() {
  const services = [
    {
      title: "Boiler and Condenser Descaling",
      image: industrial_boiler_cleaning,
      description:
        "Our skilled team delivers expert descaling services for boilers and condensers, ensuring enhanced efficiency and prolonged lifespan. Using advanced techniques and eco-friendly solutions, we effectively remove scale buildup, improve performance, and reduce energy consumption. Trust us for reliable and smooth system operations.",
    },
    {
      title: "Water Treatment Equipment Installation",
      image: water_treatment_plant,
      description:
        "Our specialists handle complete erection and commissioning of water treatment equipment. With precision and adherence to industry standards, we ensure seamless integration and optimal performance. Let us manage your water treatment needs for improved reliability and water quality.",
    },
    {
      title: "Industrial Water Balancing Audit",
      image: IMG1,
      description:
        "Our experts provide thorough industrial water balancing audits to optimize your water usage. By identifying inefficiencies and recommending actionable improvements, we help reduce costs, enhance sustainability, and ensure better operational efficiency.",
    },
    {
      title: "Water Treatment Consultancy",
      image: wastewater_consultancy,
      description:
        "We offer consultancy services for wastewater treatment, including effluent treatment plants. Our comprehensive solutions include site supervision and timely system installations, ensuring efficient water management for your facility.",
    },
    {
      title: "Laboratory Testing Services",
      image: water_lab_testing,
      description:
        "We provide reliable laboratory testing services adhering to industry standards. Our advanced facilities enable precise scientific experiments, measurements, and research under controlled conditions to meet your requirements.",
    },
  ];

  return (
    <div className="container mx-auto px-5 sm:px-20 md:px-30 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#E8F6D5] rounded-lg overflow-hidden shadow-md"
          >
            <div className="relative h-48">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-gray-700 mb-4">
                {service.description}
              </p>
            </div>
            <div className="px-6 pb-6">
              <button
                onClick={() => (window.location.href = "/contact")}
                className="bg-[#6F9700] hover:bg-[#5d7332] text-white w-[50%] py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                Contact Us
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

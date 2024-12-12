import React from 'react';
import IMG1 from '../../assest/water.jpg'
import IMG2 from '../../assest/wind.png'

export default function ServicesSection() {
  const services = [
    {
      title: "Cleaning for boilers",
      image: IMG1,
      description: "Our team of experts offers comprehensive industrial water balancing audits tailored to any type of industry. We assess your water usage, identify inefficiencies, and provide actionable insights to optimize your system."
    },
    {
      title: "Boiler Descaling",
      image: IMG2,
      description: "Our team of experts offers comprehensive industrial water balancing audits tailored to any type of industry. We assess your water usage, identify inefficiencies, and provide actionable insights to optimize your system."
    },
    {
      title: "Maintenance",
      image: IMG1,
      description: "Our team of experts offers comprehensive industrial water balancing audits tailored to any type of industry. We assess your water usage, identify inefficiencies, and provide actionable insights to optimize your system."
    }
  ];

  return (
    <div className="container mx-auto px-5 sm:px-20 md:px-30 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-[#E8F6D5] rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{service.description}</p>
            </div>
            <div className="px-6 pb-6">
              <button 
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

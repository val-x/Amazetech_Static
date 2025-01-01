import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { serviceData } from '../../data/serviceDetails';

const ServiceGrid = () => {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="container mx-auto px-5 sm:px-20 md:px-30 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceData.map(({ id, title, image, description, features, additionalInfo }) => (
          <article
            key={id}
            className="bg-[#E8F6D5] rounded-lg overflow-hidden shadow-md"
          >
            <div className="h-48 relative">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <p className="text-sm text-gray-700 mb-4">{description}</p>
              
              {/* Core Features */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-[#6F9700] mt-1">•</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Info (Expandable) */}
              {additionalInfo && (
                <div className="mt-4">
                  <button
                    onClick={() => toggleExpand(id)}
                    className="text-[#6F9700] text-sm font-semibold flex items-center"
                  >
                    {expandedId === id ? 'Show Less' : 'Learn More'}
                    <span className="ml-1">{expandedId === id ? '↑' : '↓'}</span>
                  </button>
                  
                  {expandedId === id && (
                    <div className="mt-4 space-y-4">
                      {Object.entries(additionalInfo).map(([category, items]) => (
                        <div key={category} className="space-y-2">
                          <h5 className="font-semibold text-sm capitalize">
                            {category.replace(/([A-Z])/g, ' $1').trim()}:
                          </h5>
                          <ul className="space-y-1">
                            {items.map((item, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-[#6F9700] mt-1">•</span>
                                <span className="text-sm text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Contact Button */}
            <div className="px-6 pb-6">
              <button
                onClick={() => navigate('/contact')}
                className="w-1/2 py-2 px-4 bg-[#6F9700] hover:bg-[#5d7332] text-white rounded transition duration-300"
              >
                Contact Us
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
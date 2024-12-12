import React from 'react';
import { Droplets, Wind, Snowflake, Waves, Factory, FlaskRoundIcon as Flask } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: <Droplets className="h-8 w-8" />,
      name: 'Boiler Treatment Chemicals',
      bg: 'bg-[#90C418]',
      textColor: 'text-white',
    },
    {
      icon: <Wind className="h-8 w-8" />,
      name: 'Cooling Tower Treatment Chemicals',
      bg: 'bg-gray-50',
      textColor: 'text-gray-900',
    },
    {
      icon: <Snowflake className="h-8 w-8" />,
      name: 'Chiller Treatment Chemicals',
      bg: 'bg-[#90C418]',
      textColor: 'text-white',
    },
    {
      icon: <Waves className="h-8 w-8" />,
      name: 'Reverse Osmosis (RO) Treatment Chemicals',
      bg: 'bg-gray-50',
      textColor: 'text-gray-900',
    },
    {
      icon: <Factory className="h-8 w-8" />,
      name: 'Effluent Treatment Chemicals (ETP)',
      bg: 'bg-[#90C418]',
      textColor: 'text-white',
    },
    {
      icon: <Flask className="h-8 w-8" />,
      name: 'Sugar & Paper Processing Chemicals',
      bg: 'bg-gray-50',
      textColor: 'text-gray-900',
    },
  ];

  return (
    <section className="py-20 px-10 md:px-20 bg-white">
      <div className='w-full h-[30px] pl-5  mb-3 flex items-center'>
        <div className='w-[40%] ml-3 md:ml-8 h-[5%] bg-black'></div>
        <div className='pl-3 font-bold'>Our Innovative Product Range</div>
      </div>
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-12">
          <h2 className="md:text-5xl text-3xl font-bold mb-4">
          Revolutionizing <span className="text-[#90C418]">Water Treatment</span> with Advanced Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          At Amazetech Corporation, we offer a wide range of water treatment chemicals designed for
           various applications, including low, medium, and high-pressure boilers, ensuring efficiency and sustainability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${product.bg} ${product.textColor} p-8 rounded-lg flex flex-col items-center text-center`}
            >
              {product.icon}
              <h3 className="mt-4 font-medium">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

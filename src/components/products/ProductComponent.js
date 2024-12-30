import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductComponent({ productKey, data }) {
  const { title, image, benefits, description, processes } = data;

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <main className="max-w-6xl mx-auto space-y-6">
        <div className="grid md:grid-cols-[2fr,1fr] gap-6">
          {/* Left column with image */}
          <div className="relative aspect-video w-full rounded-lg overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right column with benefits */}
          <div className="p-4 bg-white border-2 border-black shadow-none rounded-lg">
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <div key={index} className='h-[50px] rounded-full flex items-center px-5 bg-[#F1F8E8]'>
                  <li className="text-sm">{benefit}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>

        {/* Title and CTA */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {title}
          </h1>

          <Link
            to="/contact"
            className="bg-[#84B517] hover:bg-[#729E14] text-white font-semibold px-6 py-3 rounded-lg"
            style={{ transition: 'background-color 0.3s ease' }}
          >
            CONTACT US
          </Link>
        </div>

        {/* Process Section */}
        <section>
          <p className='mb-10 w-[70%]'>{description}</p>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Treatment Process
          </h2>
          <ul className="space-y-1">
            {processes.map((process, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                <span className="text-sm">{process}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
} 
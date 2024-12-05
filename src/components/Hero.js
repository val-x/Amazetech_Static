import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Water from '../assest/water.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src={Water}
          alt="Industrial facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
            Sustainable Energy Empowering The Customers
          </h1>
          <div className=''>
          <Link
            to="/get-started"
            className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#7BA615]  transition-colors"
          >
            Get Started
            <div className='h-12 w-12 bg-[#90C418] drop-shadow-md flex items-center ml-7 justify-center rounded-full'> <ArrowRight className="h-6 w-6" /></div>
            
          </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}

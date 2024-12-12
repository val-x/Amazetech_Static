import React from 'react';
import { ArrowRight, Lightbulb, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import Wind from '../assest/wind.png'

export default function Industries() {
  return (
    <section className="py-20 p-10 md:px-20 bg-[#F7F8F3]">
      <div className="container mx-auto  px-4">
        <div className="grid md:grid-cols-2 gap-12  items-center">
          {/* Image Grid */}
          <div className=' h-[400px]'>
          <div className="grid grid-cols-2  gap-3 h-[400px]">
            <div className=''>
              <div className='h-[70px]  rounded-2xl'>

              </div>
              <div className='h-[320px] bg-black mt-3 rounded-2xl'>
               <img
              src={Wind}
              alt="Wind turbine"
              className="w-full h-full bg-yellow-200 object-cover rounded-2xl"
            />
              </div>
            </div>
            <div className=''>
            <div className='h-[290px] bg-black rounded-2xl'>
            <img
              src={Wind}
              alt="Wind turbine"
              className="w-full h-full bg-yellow-200 object-cover rounded-2xl"
            />
            </div>
            <div className='h-[100px] w-[90%] bg-black mt-3 rounded-2xl'>
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
            Caring for the Planet's{' '}
              <span className="text-[#90C418]">Most Precious Resources</span>
            </h2>
            <p className="text-gray-600 mb-8">
            Amazetech Corporation, a leader in water and wastewater treatment solutions, is dedicated to ensuring a sustainable future.
            </p>
            <div className="space-y-6 mb-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <Lightbulb className="h-8 w-8 text-[#90C418] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Industry Leadership</h3>
                  <p className="text-gray-600">
                  Expertise in providing comprehensive water treatment solutions for industries, institutions, homes, and communities.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex gap-4">
                <Activity className="h-8 w-8 text-[#90C418] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Driving Sustainability</h3>
                  <p className="text-gray-600">
                  Dedicated to conserving water through innovative, eco-friendly technologies and solutions.
                  </p>
                </div>
              </div>
            </div>
            {/* Learn More Link */}
            <Link
              to="/service"
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

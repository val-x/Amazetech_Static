import React from 'react';
import IMG1 from '../../../../assest/wind.png';

export default function Page() {
  const benefits = [
    "High-quality purified water",
    "Remove dissolved solids and impurities",
    "Reduce operational costs",
    "Sustainable water management",
    "Meet industry standards",
  ];

  const treatmentSteps = [
    "Pre-filtration",
    "Membrane filtration",
    "Post-treatment conditioning",
    "Quality monitoring and control",
  ];

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <main className="max-w-6xl mx-auto space-y-6">
        <div className="grid md:grid-cols-[2fr,1fr] gap-6">
          {/* Left column with image */}
          <div className="relative aspect-video w-full rounded-lg overflow-hidden">
            <img
              src={IMG1}
              alt="RO Treatment Solutions"
              fill
              className="h-full w-full"
              priority
            />
          </div>

          {/* Right column with benefits */}
          <div className="p-4 bg-white border-2 border-black shadow-none rounded-lg">
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <div className='h-[50px] rounded-full flex items-center px-5 bg-[#F1F8E8]'>
                  <li key={index} className="text-sm">{benefit}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>

        {/* Title and CTA */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Reverse Osmosis Solutions
          </h1>

          <button
            className="bg-[#84B517] hover:bg-[#729E14] text-white font-semibold px-6 py-3 rounded-lg"
            style={{ transition: 'background-color 0.3s ease' }}
          >
            CONTACT US
          </button>
        </div>

        {/* Process Section */}
        <section>
          <p className='mb-10 w-[70%]'>
            Our Reverse Osmosis (RO) solutions deliver superior water purification for industrial and 
            commercial applications. Using advanced membrane technology, our RO systems effectively 
            remove dissolved solids, contaminants, and impurities from water. We provide comprehensive 
            treatment programs that ensure optimal system performance, extend membrane life, and 
            maintain consistent water quality while minimizing operational costs.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            RO Treatment Process
          </h2>
          <ul className="space-y-1">
            {treatmentSteps.map((step, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                <span className="text-sm">{step}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
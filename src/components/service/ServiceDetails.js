import React from 'react';

const SectionTitle = ({ title }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
    <div className="mt-4 flex justify-center">
      <div className="w-24 h-1 bg-[#6F9700] rounded-full"></div>
    </div>
  </div>
);

const ServiceDetails = () => {
  const treatmentSteps = [
    {
      id: 1,
      title: "Initial Water Analysis",
      description: "Comprehensive analysis of customer water samples to understand specific requirements."
    },
    {
      id: 2,
      title: "Chemical Treatment Selection",
      description: "Selection of appropriate treatment chemicals based on analysis results."
    },
    {
      id: 3,
      title: "Dosing System Setup",
      description: "Installation and calibration of chemical dosing systems for optimal performance."
    },
    {
      id: 4,
      title: "Regular Monitoring",
      description: "Continuous monitoring of water quality parameters and system performance."
    },
    {
      id: 5,
      title: "Performance Optimization",
      description: "Fine-tuning of treatment processes based on monitoring results."
    },
    {
      id: 6,
      title: "Preventive Maintenance",
      description: "Regular system maintenance to ensure long-term efficiency and reliability."
    }
  ];

  const metrics = [
    {
      title: "Scale Prevention",
      value: "99.8%",
      description: "Efficiency in preventing scale formation"
    },
    {
      title: "Corrosion Protection",
      value: "< 0.1 mm/yr",
      description: "Corrosion rate reduction"
    },
    {
      title: "System Efficiency",
      value: "20%",
      description: "Improvement in heat transfer efficiency"
    }
  ];

  const standards = [
    {
      title: "Raw Material Testing",
      items: [
        "Chemical composition analysis",
        "Purity verification",
        "Contamination testing",
        "Physical property testing"
      ]
    },
    {
      title: "In-Process Quality Control",
      items: [
        "Batch monitoring",
        "Parameter verification",
        "Process optimization",
        "Quality checks"
      ]
    },
    {
      title: "Finished Product Analysis",
      items: [
        "Performance testing",
        "Stability analysis",
        "Safety verification",
        "Specification compliance"
      ]
    }
  ];

  const waterParameters = [
    { name: "pH Level", range: "6.5 - 8.5" },
    { name: "Total Dissolved Solids", range: "< 500 ppm" },
    { name: "Hardness", range: "< 200 ppm" },
    { name: "Alkalinity", range: "100 - 200 ppm" }
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System Certification"
    },
    {
      title: "ISO 14001:2015",
      description: "Environmental Management System"
    },
    {
      title: "GMP Certified",
      description: "Good Manufacturing Practices"
    }
  ];

  const monitoring = [
    {
      title: "Batch Testing",
      description: "Every formulation is tested before release to ensure consistency and effectiveness."
    },
    {
      title: "Shelf-life Monitoring",
      description: "We track the stability of our chemicals to guarantee their long-term performance."
    },
    {
      title: "Customer Feedback",
      description: "We work closely with our clients to gather feedback and fine-tune our formulations."
    }
  ];

  return (
    <div>
      {/* Treatment Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Treatment Process" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentSteps.map((step) => (
              <div key={step.id} 
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <span className="w-12 h-12 bg-[#6F9700] group-hover:bg-[#84B517] text-white rounded-full flex items-center justify-center font-bold text-lg transform transition-transform group-hover:scale-110">
                    {step.id}
                  </span>
                  <h3 className="ml-4 text-xl font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Performance Metrics" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {metrics.map((metric, index) => (
              <div key={index} 
                className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#6F9700] group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#6F9700] opacity-5 rounded-bl-full"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{metric.title}</h3>
                <div className="text-5xl font-bold text-[#6F9700] mb-4 group-hover:scale-110 transition-transform">
                  {metric.value}
                </div>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Parameters Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Water Parameters" />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#6F9700]">
                    <th className="py-4 px-8 text-left text-white font-bold text-lg">Parameter</th>
                    <th className="py-4 px-8 text-left text-white font-bold text-lg">Acceptable Range</th>
                  </tr>
                </thead>
                <tbody>
                  {waterParameters.map((param, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-5 px-8 font-medium text-gray-800">{param.name}</td>
                      <td className="py-5 px-8 text-gray-600">{param.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Certifications" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {certifications.map((cert, index) => (
              <div key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group border border-gray-100"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  <span className="inline-block p-4 bg-[#6F9700] bg-opacity-10 rounded-full">
                    <span className="block w-16 h-16 bg-[#6F9700] rounded-full"></span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{cert.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Monitoring Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Continuous Monitoring and Maintenance" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {monitoring.map((item, index) => (
              <div key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border-l-4 border-[#6F9700]"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#6F9700] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
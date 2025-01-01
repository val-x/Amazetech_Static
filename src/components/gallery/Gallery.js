import React, { useState } from "react";
import {
  Award,
  CheckCircle2,
  FileCheck,
  BadgeCheck,
  Shield,
  Trophy,
  Beaker,
  Microscope,
  BarChart2,
  Phone,
  ChevronDown,
  Droplet,
  ThermometerSun,
  Scale,
  FlaskConical,
  Container,
  Gauge,
} from "lucide-react";
import Water from "../../assest/water.jpg";
import Innovations from "../../assest/Innovations.jpg";
import Refreshing_the_planet from "../../assest/Refreshing_the_planet.jpg";
import Adding_value_accross_sectors from "../../assest/Adding_value_accross_sectors.png";
import wastewater_consultancy from "../../assest/wastewater_consultancy.jpg";
import water_lab_testing from "../../assest/water_lab_testing.jpg";
import water_services from "../../assest/water_services.jpg";

// Component Definitions
const QualityCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
    <div className="text-[#90C418] mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TechnicalParameter = ({ title, value, icon: Icon, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-1"
  >
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-[#90C418] mr-3" />
      <h4 className="font-semibold">{title}</h4>
    </div>
    <p className="text-gray-600">{value}</p>
  </div>
);

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button
      className="w-full py-4 px-6 text-left flex items-center justify-between hover:bg-gray-50"
      onClick={onToggle}
    >
      <span className="font-semibold">{title}</span>
      <ChevronDown
        className={`w-5 h-5 transform transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <div className="p-6 bg-gray-50">{content}</div>
    </div>
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-12">{children}</h2>
);

const ProcessStep = ({ number, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-4">
      <div className="bg-[#90C418] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold ml-4">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const GalleryAndQuality = () => {
  // State declarations
  const [selectedParameter, setSelectedParameter] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Data constants
  const images = [
    { src: Water, alt: "Water", title: "Water Treatment Solutions" },
    {
      src: wastewater_consultancy,
      alt: "Wastewater Consultancy",
      title: "Wastewater Management",
    },
    {
      src: water_lab_testing,
      alt: "Water Lab Testing",
      title: "Laboratory Testing",
    },
    {
      src: Refreshing_the_planet,
      alt: "Refreshing The Planet",
      title: "Environmental Solutions",
    },
    {
      src: Adding_value_accross_sectors,
      alt: "Adding value across sectors",
      title: "Cross-Sector Solutions",
    },
    { src: Innovations, alt: "Innovations", title: "Innovative Technologies" },
    {
      src: water_services,
      alt: "Water Services",
      title: "Comprehensive Services",
    },
    {
      src: "https://www.veoliawatertech.com/sites/g/files/dvc3601/files/styles/default/public/image/2020/05/LAN_057_retouched-small.jpg?itok=c6pffiMf",
      alt: "Industrial boiler cleaning",
      title: "Industrial Maintenance",
    },
  ];

  const certifications = [
    {
      icon: <BadgeCheck className="w-12 h-12 text-[#90C418]" />,
      title: "ISO 9001:2015",
      description: "Quality Management System Certification",
    },
    {
      icon: <Shield className="w-12 h-12 text-[#90C418]" />,
      title: "ISO 14001:2015",
      description: "Environmental Management System",
    },
    {
      icon: <Trophy className="w-12 h-12 text-[#90C418]" />,
      title: "GMP Certified",
      description: "Good Manufacturing Practices",
    },
  ];

  const qualityFeatures = [
    {
      icon: <Beaker className="w-12 h-12" />,
      title: "In-House R&D Laboratory",
      description:
        "State-of-the-art research facilities for continuous innovation and product development",
    },
    {
      icon: <Microscope className="w-12 h-12" />,
      title: "Wet Lab Analysis",
      description:
        "Comprehensive water sample analysis for customized solutions",
    },
    {
      icon: <BarChart2 className="w-12 h-12" />,
      title: "Continuous Monitoring",
      description:
        "Regular audits and performance evaluations to maintain quality standards",
    },
  ];

  const qualityProcessSteps = [
    {
      title: "Initial Water Analysis",
      description:
        "Comprehensive analysis of customer water samples to understand specific requirements.",
    },
    {
      title: "Chemical Treatment Selection",
      description:
        "Selection of appropriate treatment chemicals based on analysis results.",
    },
    {
      title: "Dosing System Setup",
      description:
        "Installation and calibration of chemical dosing systems for optimal performance.",
    },
    {
      title: "Regular Monitoring",
      description:
        "Continuous monitoring of water quality parameters and system performance.",
    },
    {
      title: "Performance Optimization",
      description:
        "Fine-tuning of treatment processes based on monitoring results.",
    },
    {
      title: "Preventive Maintenance",
      description:
        "Regular system maintenance to ensure long-term efficiency and reliability.",
    },
  ];

  const batchTesting = [
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: "Batch Testing",
      description:
        "Every formulation is tested before release to ensure consistency and effectiveness.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Shelf-life Monitoring",
      description:
        "We track the stability of our chemicals to guarantee their long-term performance.",
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Customer Feedback",
      description:
        "We work closely with our clients to gather feedback and fine-tune our formulations.",
    },
  ];

  const technicalParameters = [
    {
      title: "Water Parameters",
      icon: Droplet,
      details: [
        { label: "pH Range", value: "10.5 - 11.5" },
        { label: "TDS", value: "< 500 ppm" },
        { label: "Conductivity", value: "< 1000 µS/cm" },
        { label: "Hardness", value: "< 5 ppm as CaCO3" },
      ],
    },
    {
      title: "Operating Conditions",
      icon: ThermometerSun,
      details: [
        { label: "Temperature", value: "Up to 350°C" },
        { label: "Pressure", value: "Up to 150 bar" },
        { label: "Flow Rate", value: "1-10 m³/hr" },
        { label: "Residence Time", value: "Min. 30 minutes" },
      ],
    },
    {
      title: "Dosing Parameters",
      icon: Scale,
      details: [
        { label: "Initial Dose", value: "150-200 ppm" },
        { label: "Maintenance Dose", value: "50-100 ppm" },
        { label: "Shock Dose", value: "300-400 ppm" },
        { label: "Control Range", value: "±10% of setpoint" },
      ],
    },
  ];

  const qualityStandards = [
    {
      title: "Raw Material Testing",
      content:
        "Every batch of raw materials undergoes comprehensive testing including purity analysis, contamination checks, and specification verification.",
    },
    {
      title: "In-Process Quality Control",
      content:
        "Continuous monitoring of critical parameters during production, including pH, viscosity, density, and active ingredient concentration.",
    },
    {
      title: "Finished Product Analysis",
      content:
        "Complete analysis of finished products including stability testing, performance verification, and compliance with specifications.",
    },
    {
      title: "Documentation & Traceability",
      content:
        "Detailed batch records, analytical reports, and complete traceability from raw materials to finished products.",
    },
  ];

  const performanceMetrics = [
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Scale Prevention",
      description: "99.8% efficiency in preventing scale formation",
      value: "99.8%",
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Corrosion Protection",
      description: "Corrosion rate reduction to < 0.1 mm/year",
      value: "< 0.1 mm/yr",
    },
    {
      icon: <Container className="w-8 h-8" />,
      title: "System Efficiency",
      description: "15-20% improvement in heat transfer efficiency",
      value: "20%",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-90" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Quality
              </h1>
              <div className="flex items-center text-gray-300 text-sm">
                <a href="/" className="hover:text-[#90C418]">
                  Home
                </a>
                <span className="mx-2">›</span>
                <span className="text-[#90C418]">Quality</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-white flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>For Enquiries:</span>
                <a
                  href="tel:+918883338262"
                  className="ml-2 hover:text-[#90C418]"
                >
                  +91 88833 38262
                </a>
                ,
                <a
                  href="tel:+919842751296"
                  className="ml-2 hover:text-[#90C418]"
                >
                  +91 98427 51296
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Assurance Introduction */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Quality Assurance at AMAZETECH India Pvt Ltd
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              At AMAZETECH, quality is the foundation of everything we do. As a
              leading manufacturer and formulator of specialty water treatment
              chemicals, we are committed to delivering products that meet the
              highest industry standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our dedication to quality ensures that our customers receive
              consistent, reliable, and effective solutions tailored to their
              specific needs.
            </p>
          </div>
        </div>
      </div>

      {/* Quality Control Process */}
      <div className="bg-[#E8F6D5] py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>Rigorous Quality Control</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-[#90C418]">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add new R&D Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>In-House Research and Development</SectionTitle>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-8">
              To uphold our product standards and drive innovation, we operate a
              state-of-the-art in-house research and development laboratory. Our
              R&D team is dedicated to improving existing products and
              developing new solutions that meet the evolving needs of the
              market.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              By leveraging advanced technologies and customer feedback, we
              continuously enhance our product offerings to deliver superior
              performance and efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Treatment Process Steps */}
      <div className="bg-[#E8F6D5] py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>Treatment Process</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityProcessSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quality Monitoring Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>Continuous Monitoring and Maintenance</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {batchTesting.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-[#90C418] mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Technical Parameters Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>Technical Parameters</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {technicalParameters.map((param, index) => (
              <TechnicalParameter
                key={index}
                title={param.title}
                icon={param.icon}
                value={`Click to view ${param.details.length} parameters`}
                onClick={() =>
                  setSelectedParameter(
                    selectedParameter === index ? null : index
                  )
                }
              />
            ))}
          </div>
          {selectedParameter !== null && (
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg animate-fadeIn">
              <h3 className="font-semibold text-xl mb-4">
                {technicalParameters[selectedParameter].title} Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {technicalParameters[selectedParameter].details.map(
                  (detail, index) => (
                    <div
                      key={index}
                      className="flex justify-between p-3 bg-gray-50 rounded"
                    >
                      <span className="text-gray-600">{detail.label}</span>
                      <span className="font-medium">{detail.value}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quality Standards Accordion */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>Quality Standards & Procedures</SectionTitle>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {qualityStandards.map((standard, index) => (
              <AccordionItem
                key={index}
                title={standard.title}
                content={standard.content}
                isOpen={activeAccordion === index}
                onToggle={() =>
                  setActiveAccordion(activeAccordion === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics Section */}
      <div className="bg-[#E8F6D5] py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>Performance Metrics</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {performanceMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-[#90C418] mb-4">{metric.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{metric.title}</h3>
                  <p className="text-gray-600 mb-4">{metric.description}</p>
                  <div className="text-2xl font-bold text-[#90C418]">
                    {metric.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certification Section - Your existing section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>Certifications and Standards</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  {cert.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section - Your existing section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle>Visit our Gallery</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-semibold">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="bg-[#E8F6D5] py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>Commitment to Sustainability</SectionTitle>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              Our commitment to quality extends to our wet lab, where we analyze
              water samples from our customers. This facility enables us to
              recommend the most suitable products based on specific water
              conditions and performance requirements.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#90C418] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7BA615] transition-colors"
            >
              Learn More About Our Commitment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryAndQuality;

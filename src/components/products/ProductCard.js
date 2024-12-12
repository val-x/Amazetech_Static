import React from 'react';

const PlantCard = ({ 
  icon, 
  title, 
  productPage, // Instead of passing slug, now we use a simple string to define the page
  buttonVariant = "outline" 
}) => (
  <div className="bg-[#f3f9f3] w-full max-w-sm rounded-lg shadow-md overflow-hidden">
    <div className="p-6 ">
      <div className="w-16 h-16 rounded-full bg-[#6cb33f] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
    </div>
    <div className="px-6 pb-6">
      <a 
        href={productPage} // Link to the product page directly
        className={`inline-block w-full py-2 px-4 rounded-md text-center transition-colors duration-200 ${
          buttonVariant === "default"
            ? "border border-[#6cb33f] text-[#6cb33f] hover:bg-[#6cb33f] hover:text-white"
            : "border border-[#6cb33f] text-[#6cb33f] hover:bg-[#6cb33f] hover:text-white"
        }`}
      >
        Read More
      </a>
    </div>
  </div>
);

const EffluentIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-8 w-8 text-white" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
    />
  </svg>
);

const SewageIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-8 w-8 text-white" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
    />
  </svg>
);

const OilIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-8 w-8 text-white" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
    />
  </svg>
);

const TreatmentPlants = () => {
  return (
    <div className="container md:px-20 mx-auto  px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <PlantCard
          icon={<EffluentIcon />}
          title="Effluent Treatment Plant"
          productPage="/products/ETP" // Hardcoded link for the product page
        />
        <PlantCard
          icon={<SewageIcon />}
          title="Sewage Treatment Plant"
          productPage="/products/STP" // Hardcoded link for the product page
          buttonVariant="default"
        />
        <PlantCard
          icon={<OilIcon />}
          title="Crushury Oils"
          productPage="/products/oil" // Hardcoded link for the product page
        />
      </div>
    </div>
  );
};

export default TreatmentPlants;

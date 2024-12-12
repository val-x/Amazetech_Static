// import React from "react";
// import {
//   Droplets,
//   Wind,
//   Snowflake,
//   Waves,
//   Factory,
//   FlaskRoundIcon as Flask,
// } from "lucide-react";

// export default function Products() {
//   const products = [
//     {
//       icon: <Droplets className="h-8 w-8" aria-label="Boiler Water Treatment Chemicals"/>,
//       name: "Boiler Treatment Chemicals",
//       bg: "bg-[#90C418]",
//       textColor: "text-white",
//     },
//     {
//       icon: <Wind className="h-8 w-8" aria-label="Cooling Tower Treatment Chemicals"/>,
//       name: "Cooling Tower Treatment Chemicals",
//       bg: "bg-gray-50",
//       textColor: "text-gray-900",
//     },
//     {
//       icon: <Snowflake className="h-8 w-8" aria-label="Chiller Treatment Chemicals" />,
//       name: "Chiller Treatment Chemicals",
//       bg: "bg-[#90C418]",
//       textColor: "text-white",
//     },
//     {
//       icon: <Waves className="h-8 w-8" aria-label="Reverse Osmosis (RO) Treatment Chemicals" />,
//       name: "Reverse Osmosis (RO) Treatment Chemicals",
//       bg: "bg-gray-50",
//       textColor: "text-gray-900",
//     },
//     {
//       icon: <Factory className="h-8 w-8" aria-label="Effluent Treatment Chemicals (ETP)" />,
//       name: "Effluent Treatment Chemicals (ETP)",
//       bg: "bg-[#90C418]",
//       textColor: "text-white",
//     },
//     {
//       icon: <Flask className="h-8 w-8" aria-label="Sugar & Paper Processing Chemicals" />,
//       name: "Sugar & Paper Processing Chemicals",
//       bg: "bg-gray-50",
//       textColor: "text-gray-900",
//     },
//   ];

//   return (
//     <section className="py-20 px-10 md:px-20 bg-white">
//       <div className="w-full h-[30px] pl-5  mb-3 flex items-center">
//         <div className="w-[40%] ml-3 md:ml-8 h-[5%] bg-black"></div>
//         <div className="pl-3 font-bold">Our Innovative Product Range</div>
//       </div>
//       <div className="container mx-auto px-4 ">
//         <div className="text-center mb-12">
//           <h2 className="md:text-5xl text-3xl font-bold mb-4">
//             Explore{" "}
//             <span className="text-[#90C418]">
//               Innovative Water Treatment Chemicals
//             </span>{" "}
//             for Sustainable Solutions
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Amazetech Corporation specializes in water treatment chemicals
//             tailored for industrial applications, including boilers, cooling
//             towers, and reverse osmosis systems. Our innovative solutions
//             enhance efficiency, promote sustainability, and meet the highest
//             environmental standards.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product, index) => (
//             <div
//               key={index}
//               className={`${product.bg} ${product.textColor} p-8 rounded-lg flex flex-col items-center text-center`}
//             >
//               {product.icon}
//               <h3 className="mt-4 font-medium">{product.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import {
  Droplets,
  Wind,
  Snowflake,
  Waves,
  Factory,
  FlaskRoundIcon as Flask,
} from "lucide-react";
import { Helmet } from "react-helmet";

export default function Products() {
  const products = [
    {
      icon: (
        <Droplets
          className="h-8 w-8"
          aria-label="Boiler Water Treatment Chemicals"
        />
      ),
      name: "Boiler Water Treatment Chemicals for Industrial Applications",
      bg: "bg-[#90C418]",
      textColor: "text-white",
    },
    {
      icon: (
        <Wind
          className="h-8 w-8"
          aria-label="Cooling Tower Treatment Chemicals"
        />
      ),
      name: "Cooling Tower Treatment Chemicals for Enhanced Performance",
      bg: "bg-gray-50",
      textColor: "text-gray-900",
    },
    {
      icon: (
        <Snowflake
          className="h-8 w-8"
          aria-label="Chiller Treatment Chemicals"
        />
      ),
      name: "Chiller Treatment Chemicals for Efficient Cooling Systems",
      bg: "bg-[#90C418]",
      textColor: "text-white",
    },
    {
      icon: (
        <Waves
          className="h-8 w-8"
          aria-label="Reverse Osmosis Treatment Chemicals"
        />
      ),
      name: "Reverse Osmosis (RO) Treatment Chemicals for Clean Water",
      bg: "bg-gray-50",
      textColor: "text-gray-900",
    },
    {
      icon: (
        <Factory
          className="h-8 w-8"
          aria-label="Effluent Treatment Chemicals"
        />
      ),
      name: "Effluent Treatment Chemicals (ETP) for Wastewater Management",
      bg: "bg-[#90C418]",
      textColor: "text-white",
    },
    {
      icon: (
        <Flask
          className="h-8 w-8"
          aria-label="Sugar & Paper Processing Chemicals"
        />
      ),
      name: "Sugar & Paper Processing Chemicals for Specialized Applications",
      bg: "bg-gray-50",
      textColor: "text-gray-900",
    },
  ];

  return (
    <section className="py-20 px-10 md:px-20 bg-white">
      <Helmet>
        <title>
          Innovative Water Treatment Products | Amazetech Corporation
        </title>
        <meta
          name="description"
          content="Explore Amazetech Corporation's innovative water treatment chemicals for boilers, cooling towers, reverse osmosis systems, and more."
        />
      </Helmet>
      <div className="w-full h-[30px] pl-5 mb-3 flex items-center">
        <div className="w-[40%] ml-3 md:ml-8 h-[5%] bg-black"></div>
        <div className="pl-3 font-bold">Our Innovative Product Range</div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="md:text-5xl text-3xl font-bold mb-4">
            Explore{" "}
            <span className="text-[#90C418]">
              Innovative Water Treatment Chemicals
            </span>{" "}
            for Sustainable Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Amazetech Corporation specializes in water treatment chemicals
            tailored for industrial applications, including boilers, cooling
            towers, and reverse osmosis systems. Our innovative solutions
            enhance efficiency, promote sustainability, and meet the highest
            environmental standards.
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
        <div className="text-center mt-12">
          <a
            href="/product"
            className="inline-flex items-center bg-[#90C418] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#7BA615] transition"
            aria-label="Explore all water treatment products"
          >
            Explore All Products
          </a>
        </div>
      </div>
    </section>
  );
}

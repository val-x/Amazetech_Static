import { Building2, Factory, FuelIcon as Oil } from 'lucide-react';
import Button from 'react';


export default function ServiceCards() {
  const services = [
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Effluent Treatment Plant",
      
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Sewage Treatment Plant",
      
    },
    {
      icon: <Oil className="h-8 w-8" />,
      title: "Crushury Oils",
  
    },
  ];

  return (
    <div className="container px-4 py-12">
      {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#f5f9f5] border-none transition-transform hover:scale-105"
          >
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="rounded-full bg-[#77b81e] p-4 text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-center">{service.title}</h3>
              <Button
                variant={service.buttonVariant}
                className="mt-2"
              >
                Read More
              </Button>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

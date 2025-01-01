import React from 'react';
import ServicesImage from '../../assest/Services.png';

const ServiceHero = () => {
  return (
    <section className="flex h-[300px] md:h-[400px] px-5 md:px-20 py-10">
      <div className="w-1/2 flex items-center justify-center">
        <h1 className="w-1/2 text-black font-bold md:text-4xl text-center">
          SERVICES
        </h1>
      </div>
      <div className="w-full flex items-center justify-center">
        <img
          src={ServicesImage}
          alt="Services Hero"
          className="h-full w-full md:w-1/2"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default ServiceHero;
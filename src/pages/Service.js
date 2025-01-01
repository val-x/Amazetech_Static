import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceHero from '../components/service/ServiceHero';
import ServiceGrid from '../components/service/ServiceGrid';
import ServiceDetails from '../components/service/ServiceDetails';


const Service = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero />
      <ServiceGrid />
      <ServiceDetails />
      <Footer />
    </main>
  );
};

export default Service;
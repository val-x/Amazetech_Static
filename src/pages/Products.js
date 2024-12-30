import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProTop from '../components/products/ProTop';
import ProductListing from '../components/products/ProductListing';

export default function Products() {
  return (
    <div className="min-h-screen">
      <Header />
      <ProTop />
      <ProductListing />
      <Footer />
    </div>
  );
} 
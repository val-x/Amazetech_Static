import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productDetails } from '../data/productDetails';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productDetails[productId];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
          <h1 className="text-2xl text-gray-800">Product not found</h1>
          <button
            onClick={() => navigate('/product')}
            className="px-6 py-2 bg-[#84B517] text-white rounded-lg hover:bg-[#729E14] transition-colors"
          >
            Back to Products
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Parallax */}
      <div className="relative h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${product.heroImage || product.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 transform translate-y-[-${scrollY * 0.3}px]">
              {product.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed transform translate-y-[-${scrollY * 0.2}px]">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section with Parallax Background */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${product.secondaryImage || product.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            transform: `translateY(${(scrollY - 500) * 0.2}px)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our {product.title}
              </h2>
              <div className="prose prose-lg">
                {product.overview?.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {product.keyFeatures?.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="text-2xl mr-3">{feature.icon}</span>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Range Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Product Range Includes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.productRange?.map((item, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section with Parallax */}
        <section className="relative py-24 -mx-4 sm:-mx-6 lg:-mx-8 mb-24">
          <div 
            className="absolute inset-0 bg-[#84B517]/10"
            style={{
              transform: `translateY(${(scrollY - 1000) * 0.1}px)`,
            }}
          />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Our {product.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {product.benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#84B517] text-white flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Treatment Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.processes.map((process, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#84B517] text-white flex items-center justify-center font-semibold text-xl group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <div className="h-0.5 flex-grow bg-[#84B517]/20"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Step {index + 1}</h3>
                <p className="text-gray-600">{process}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        {product.specifications && (
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Technical Specifications
            </h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 divide-x divide-y divide-gray-200">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div key={index} className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{key}</h3>
                    <p className="text-gray-600">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Applications Section */}
        {product.applications && (
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Applications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{app.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {app.title}
                  </h3>
                  <p className="text-gray-600">{app.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section with Parallax */}
        <section className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-24 overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${product.ctaImage || product.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              transform: `translateY(${(scrollY - 2000) * 0.2}px)`,
            }}
          />
          <div className="relative bg-[#84B517]/90 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Optimize Your System?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
                Contact us today to discuss your specific requirements and how our solutions can help improve your system's performance.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="px-12 py-5 bg-white text-[#84B517] rounded-xl hover:bg-gray-100 transition-colors font-semibold text-xl flex items-center space-x-3 mx-auto group"
              >
                <span>Contact Our Experts</span>
                <svg
                  className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
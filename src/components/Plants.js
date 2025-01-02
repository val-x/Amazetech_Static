import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Plants() {
  const slides = [
    {
      url: "https://plus.unsplash.com/premium_photo-1733266883899-29971ddbe5e3?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "State-of-the-art water treatment facility by Amazetech Corporation",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1694475446818-b0e07dbff684?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Industrial wastewater treatment plant designed for efficiency",
    },
    {
      url: "https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg",
      alt: "Chemical research laboratory for advanced water solutions",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/04/24/19/29/spain-1350442_960_720.jpg",
      alt: "Eco-friendly industrial water treatment facility",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682144326897-4a7149b991f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Modern chemical production plant for sustainable water management",
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/09/28/14/17/industry-962149_960_720.jpg",
      alt: "Effluent and Sewage treatement plants",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="py-20 md:px-20 px-15 bg-[#F7F8F3]">
      <Helmet>
        <title>
          World-Class Water Treatment Facilities | Amazetech Corporation
        </title>
        <meta
          name="description"
          content="Discover Amazetech Corporation's innovative water treatment facilities engineered for sustainability and efficiency."
        />
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Text Section */}
          <div className=" p-12">
            <div className="w-full h-[30px]  mb-3 flex items-center">
              <div className=" font-bold mr-4">Our Facilities</div>
              <div className="w-[40%]  h-[5%] bg-black"></div>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              State-of-the-Art{" "}
              <span className="text-[#90C418]">Water Treatment Facilities</span>{" "}
              for Sustainability
            </h2>
            <p className="text-gray-600 mb-6">
              Amazetech Corporation's state-of-the-art water treatment
              facilities are engineered to provide innovative solutions for
              industrial, municipal, and commercial applications. Our advanced
              technologies ensure efficiency, sustainability, and compliance
              with environmental standards.
            </p>

            <button>
              <Link
                to="/contact"
                className="bg-[#90C418] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7BA615] transition-colors"
                aria-label="Contact Amazetech Corporation for water treatment solutions"
              >
                Get in Touch
              </Link>
            </button>
          </div>
          {/* Image Grid Section */}
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            showDots={true}
            swipeable={true}
            draggable={true}
          >
            {slides.map((slide, index) => (
              <div key={index} style={{ padding: "50px 20px" }}>
                <div className="box object-contain overflow-hidden">
                  <img
                    src={slide.url}
                    alt={slide.alt}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "350px",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

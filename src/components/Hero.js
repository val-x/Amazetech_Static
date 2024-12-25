import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Water from "../assest/water.jpg";
import Refreshing_the_planet from "../assest/Refreshing_the_planet.jpg";
import Innovations from "../assest/Innovations.jpg";
import Adding_value_accross_sectors from "../assest/Adding_value_accross_sectors.png";
import water_services from "../assest/water_services.jpg";
import { Helmet } from "react-helmet";
// import Carousel from "react-bootstrap/Carousel";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

export default function Hero() {
  return (
    <header className="relative h-[500px] md:h-screen">
      <Helmet>
        <title>Amazetech Corporation | Sustainable Water Treatment</title>
        <meta
          name="Innovative water treatment solutions, sustainable water management, Amazetech Corporation"
          content="Discover Amazetech Corporation's commitment to conserving the planet's most precious resources through innovative water treatment solutions."
        />
        <link rel="canonical" href="https://amazetechglobal.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Amazetech Corporation",
              "url": "https://amazetechglobal.com",
              "description": "Amazetech Corporation specializes in innovative water treatment solutions to conserve the planet's resources.",
              "logo": "https://amazetechglobal.com/logo.png",
              "sameAs": ["https://www.linkedin.com/company/amazetech", "https://twitter.com/amazetech"]
            }
          `}
        </script>
      </Helmet>

      <Swiper
        spaceBetween={30}
        style={{ '--swiper-pagination-color': 'white' ,'--swiper-navigation-color': 'white' }}
        effect={"fade"}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false, // Prevent pause on user interaction
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={Water}
            alt="Water Services"
            loading="lazy"
            className="absolute h-full md:h-screen w-[100%] object-cover"
          />
          <div className="relative  container mx-auto px-4 h-full flex items-center justify-center">
            <div className="md:max-w-2xl text-center ">
              <h1 className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
                Conserving the Planet's Most Precious Resources with Innovative
                Water Treatment
              </h1>

              <div className="button-container">
                <Link
                  to="/about"
                  className="inline-flex z-15 items-center gap-2 bg-white/20 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#7BA615]  transition-colors"
                  aria-label="Get started with Amazetech Corporation"
                  title="Learn more about Amazetech Corporation's water treatment solutions"
                >
                  <div className="text-sm md:text-lg">Learn More About Us</div>
                  <div className="h-12 w-12 bg-[#90C418] drop-shadow-md flex items-center ml-7 justify-center rounded-full">
                    {" "}
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="absolute h-full md:h-screen w-[100%] " /> */}
          <img
            src={Refreshing_the_planet}
            alt="Refreshing_the_planet"
            loading="lazy"
            className="absolute h-full md:h-screen w-[100%] object-cover"
          />
          <div className="relative   container mx-auto px-4 h-full flex items-center justify-center">
            <div className=" md:max-w-2xl text-center">
              <h1 className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
                Refreshing the planet for over 7 years
              </h1>
              <p className=" text-2xl sm:text-1xl md:text-2xl lg:text-2xl font-serif text-white mb-8">
                By Conserving the Planet’s Most Precious Resources through Total
                Water and Environment Management
              </p>

              <div className="button-container">
                <Link
                  to="/about"
                  className="inline-flex z-15 items-center gap-2 bg-white/20 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#7BA615]  transition-colors"
                  aria-label="Get started with Amazetech Corporation"
                  title="Learn more about Amazetech Corporation's water treatment solutions"
                >
                  <div className="text-sm md:text-lg">Learn More About Us</div>
                  <div className="h-12 w-12 bg-[#90C418] drop-shadow-md flex items-center ml-7 justify-center rounded-full">
                    {" "}
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          

        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Innovations}
            className="absolute h-full md:h-screen w-[100%] object-cover"
            loading="lazy"
            alt="Innovations for a Sustainable Future "
          />
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          {/* <div className="absolute inset-0 w-[100%]  bg-black opacity-50"></div> */}
            <div className="md:max-w-2xl z-10 text-center">
              <h2 className=" text-2xl sm:text-4xl md:text-5xl lg:text-3x1 font-serif text-white mb-8">
                Innovations for a Sustainable Future
              </h2>

              <div className="button-container">
                <Link
                  to="/about"
                  className="inline-flex z-15 items-center gap-2 bg-white/20 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#7BA615]  transition-colors"
                  aria-label="Get started with Amazetech Corporation"
                  title="Learn more about Amazetech Corporation's water treatment solutions"
                >
                  <div className="text-sm md:text-lg">Learn More About Us</div>
                  <div className="h-12 w-12 bg-[#90C418] drop-shadow-md flex items-center ml-7 justify-center rounded-full">
                    {" "}
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Adding_value_accross_sectors}
            className="absolute h-full md:h-screen w-[100%] object-cover"
            loading="lazy"
            alt="Adding Value Across Sectors"
          />
          <div className="relative  container mx-auto px-4 h-full w-screen flex items-center justify-center">
            
          {/* <div className="absolute inset-0 w-[100%]  bg-black opacity-50"></div> */}

            <div className="md:max-w-2xl w-screen z-10 text-center">
              <h1 className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
                Adding Value Across Sectors
              </h1>

              <div className="button-container">
                <Link
                  to="/about"
                  className="inline-flex z-15 items-center gap-2 bg-white/20 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#7BA615]  transition-colors"
                  aria-label="Get started with Amazetech Corporation"
                  title="Learn more about Amazetech Corporation's water treatment solutions"
                >
                  <div className="text-sm md:text-lg">Learn More About Us</div>
                  <div className="h-12 w-12 bg-[#90C418] drop-shadow-md flex items-center ml-7 justify-center rounded-full">
                    {" "}
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={water_services}
            className="absolute h-full md:h-screen w-[100%] object-cover"
            loading="lazy"
            alt="24 X 7 SERVICES"
          />
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
            <div className="md:max-w-2xl text-center">
              <h1 className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
                24 x 7 SERVICES
              </h1>

              <div className="button-container">
                <Link
                  to="/about"
                  className="inline-flex z-15 items-center gap-2 bg-white/20 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#7BA615]  transition-colors"
                  aria-label="Get started with Amazetech Corporation"
                  title="Learn more about Amazetech Corporation's water treatment solutions"
                >
                  <div className="text-sm md:text-lg">Learn More About Us</div>
                  <div className="h-12 w-12 bg-[#90C418] drop-shadow-md flex items-center ml-7 justify-center rounded-full">
                    {" "}
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
}

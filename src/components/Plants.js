import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

export default function Plants() {
  // const slides = [
  //   { url: 'https://www.vizagchemical.com/sites/default/files/field/image/chemical-us-cyber-security.jpg', alt: 'Slide 1' },
  //   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIPj-KdurCzV3LiuSm1JGGg81Gvg3rsEF5g&s', alt: 'Slide 2' },
  //   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXD4Tuv1qNoRUrL1Oyj_OtXnWCZAs4dsTaXQ&s', alt: 'Slide 3' },
  //   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdMeWTPyrBo53oZYuRiX7kQN_oFyOzVOSA_Q&s', alt: 'Slide 4' },
  //   { url: 'https://t4.ftcdn.net/jpg/08/08/11/41/360_F_808114157_t79mGrerocz9bj3qp7ExhMYci45pvv37.jpg', alt: 'Slide 5' },
  // ];
  const slides = [
    {
      url: "https://www.kelvinindia.in/blog/wp-content/uploads/2024/07/water-treatment-plant.jpg",
      alt: "Slide 1 - Cybersecurity Chemicals",
    },
    {
      url: "https://www.kelvinindia.in/blog/wp-content/uploads/2024/09/industrial-waste-waer-treatment-plant.jpg",
      alt: "Slide 2 - Chemical Security",
    },
    {
      url: "https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Slide 3 - Chemical Research",
    },
    {
      url: "https://images.pexels.com/photos/8113567/pexels-photo-8113567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Slide 4 - Industrial Chemicals",
    },
    {
      url: "https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Slide 5 - Chemical Production",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2, // Show 3 images at a time
      slidesToSlide: 1, // Scroll 1 image at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1, // Show 2 images at a time on tablets
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Show 1 image at a time on mobile
      slidesToSlide: 1,
    },
  };

  return (
    <section className="py-20 md:px-20 px-15 bg-[#F7F8F3]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Text Section */}
          <div className=" p-12">
            <div className="w-full h-[30px]  mb-3 flex items-center">
              <div className=" font-bold mr-4">Our Facilities</div>
              <div className="w-[40%]  h-[5%] bg-black"></div>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Innovating Water Treatment Through{" "}
              <span className="text-[#90C418]">World-Class Facilities</span>
            </h2>
            <p className="text-gray-600 mb-6">
              At Amazetech Corporation, our state-of-the-art facilities are
              designed to deliver cutting-edge water treatment solutions,
              ensuring efficiency and sustainability.
            </p>

            <button>
              <Link
                to="/contact"
                className="bg-[#90C418] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7BA615] transition-colors"
              >
                Get in Touch{" "}
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
                <div className="box">
                  <img
                    src={slide.url}
                    alt={slide.alt}
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

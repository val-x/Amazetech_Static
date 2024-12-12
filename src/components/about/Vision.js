import Img1 from "../../assest/vision.jpg";
export default function Vision() {
  return (
    <section className="md:py-5 px-3  md:px-20 bg-[#F7F8F3]">
      <div className=" grid grid-cols-2  ">
        <div className="flex justify-center items-center  md:h-auto md:w-[100%] ">
          <img
            src={Img1}
            alt="Molecular illustration"
            className="w-[70%]  md:h-auto"
          />
        </div>
        <div className=" mx-auto  md:w-[100%]  ">
          <div className="">
            <h2 className="text-3xl font-bold mt-10 mb-6">
              OUR <span className="text-[#90C418]">VISION</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-lg mb-6">
              At Amazetech Corporation, our vision is to lead the water
              treatment industry globally by delivering innovative, eco-friendly
              solutions of the highest quality. We are committed to fostering
              sustainability, enabling industries to operate efficiently while
              reducing their environmental impact. Our goal is to ensure a
              cleaner, greener, and healthier future for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Img1 from "../../assest/eye.png";

export default function Vision() {
  return (
    <section className="md:py-5 px-3  md:px-10 bg-[#F7F8F3]">
      <div className="grid  md:px-20 lg:grid-cols-2">
        {/* Image Section */}
        <div className="flex  justify-center items-center pt-10 md:h-auto md:w-[50%]">
          <img
            src={Img1}
            alt="Innovative eco-friendly water treatment solutions by Amazetech Corporation"
            loading="lazy"
            className="w-[70%] md:h-auto"
          />
        </div>
        {/* Text Content Section */}
        <div className="mx-auto  md:w-[100%]">
          <div>
            <h2 className=" text-3xl font-bold px-10 md:px-10 mt-10 mb-6">
              OUR <span className="text-[#90C418]">VISION</span>
            </h2>
            <p className=" text-gray-600 px-10 text-sm md:text-lg mb-6">
              At <strong>Amazetech Corporation</strong>, our vision is to lead
              the <strong>global water treatment industry</strong> by delivering{" "}
              <strong>innovative</strong>,{" "}
              <strong>eco-friendly solutions</strong> of the highest quality. We
              are committed to fostering <strong>sustainability</strong>,
              enabling industries to operate efficiently while reducing their{" "}
              <strong>environmental impact</strong>. Our goal is to ensure a
              cleaner, greener, and healthier future for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

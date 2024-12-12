import Img1 from "../../assest/vision.jpg";
export default function Mission() {
  return (
    <section className="md:py-5 px-3  md:px-20 bg-[#F7F8F3]">
      <div className=" grid grid-cols-2  ">
        <div className=" mx-auto  md:w-[100%]  ">
          <div className=" p-10 md:p-20">
            <h2 className="text-3xl font-bold mt-10 mb-6">
              OUR <span className="text-[#90C418]">MISSION</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-lg mb-6">
              At Amazetech Corporation, our mission is to conserve the planet's
              most precious resources by delivering world-class water treatment
              solutions. Through innovation, sustainable practices, and
              unparalleled quality, we aim to empower industries, communities,
              and institutions to operate efficiently while protecting the
              environment. Our dedication drives us to create a healthier,
              cleaner world for future generations.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center  md:h-auto md:w-[100%] ">
          <img
            src={Img1}
            // alt="Molecular illustration"
            alt="Amazetech Corporation water treatment innovations for sustainability and efficiency"
            className="w-[70%]  md:h-auto"
          />
        </div>
      </div>
    </section>
  );
}

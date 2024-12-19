import Img1 from "../../assest/leadership.png";

export default function Mission() {
  return (
    <section className="md:py-5 bg-[#F7F8F3]">
      {/* <div className="grid md:px-30  lg:grid-cols-2">
        
        <div className="mx-auto md:w-[100%]">
          <div className="p-10 md:p-10">
            <h2 className="text-3xl font-bold mt-10 mb-6">
              OUR <span className="text-[#90C418]">MISSION</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-lg mb-6">
              At <strong>Amazetech Corporation</strong>, our mission is to{" "}
              <strong>conserve the planet's most precious resources</strong> by
              delivering <strong>world-class water treatment solutions</strong>.
              Through <strong>innovation</strong>, sustainable practices, and
              unparalleled quality, we aim to empower
              <strong>industries</strong>, <strong>communities</strong>, and{" "}
              <strong>institutions</strong> to operate efficiently while
              protecting the environment. Our dedication drives us to create a{" "}
              <strong>healthier, cleaner world</strong> for future generations.
            </p>
          </div>
        </div>
      
        <div className="flex justify-center items-center md:h-auto md:w-[100%]">
          <img
            src={Img1}
            alt="Amazetech Corporation water treatment innovations for sustainability and efficiency"
            className="w-[70%] md:w-[50%] md:h-auto"
          />
        </div>
      </div> */}
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
                OUR <span className="text-[#90C418]">MISSION</span>
              </h2>
              <p className=" text-gray-600 px-10 text-sm md:text-lg mb-6">
                At <strong>Amazetech Corporation</strong>, our mission is to{" "}
                <strong>conserve the planet's most precious resources</strong> by
                delivering <strong>world-class water treatment solutions</strong>.
                Through <strong>innovation</strong>, sustainable practices, and
                unparalleled quality, we aim to empower
                <strong>industries</strong>, <strong>communities</strong>, and{" "}
                <strong>institutions</strong> to operate efficiently while
                protecting the environment. Our dedication drives us to create a{" "}
                <strong>healthier, cleaner world</strong> for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

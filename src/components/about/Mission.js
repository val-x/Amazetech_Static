import Img1 from '../../assest/vision.jpg'
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
                Our vision is to become a global leader in water treatment solutions, renowned for our innovative products, superior quality, and commitment to sustainability.
                We aim to create a future where industries can operate efficiently while minimizing their environmental footprint, ensuring a cleaner and healthier world for future generations.
              </p>
              
            </div>
          </div>
        <div className="flex justify-center items-center  md:h-auto md:w-[100%] ">
              <img
                src={Img1}
                alt="Molecular illustration"
                className="w-[70%]  md:h-auto"
              />
            </div>
          
        </div>
       
      </section>
    )
  }
  
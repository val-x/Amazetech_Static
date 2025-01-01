import React from "react";
import About from "../../assest/About.jpg";

export default function Top() {
  return (
    <div className="md:h-[400px] bg-white h-[300px] py-10  md:py-20 md:py-10 px-5 md:px-20 flex ">
      <div className="h-full w-[50%] flex items-center justify-center">
        <div className="md:text-4xl w-[50%]  flex justify-center items-center text-black font-bold">
          ABOUT US
        </div>
      </div>
      {/* <div className="md:h-full sm:w-full md:w-[700px] flex items-center justify-center bg-white ">
        <img src={DD} alt="3D" className="h-full w-[100%] md:w-[70%]" loading="lazy"></img>
      </div> */}
      <div className="h-full w-full flex items-center justify-center">
      <img src={About} alt="About" className="h-full w-[100%] object-contain md:w-[50%]" loading="lazy"></img>
      </div>
    </div>
  );
}

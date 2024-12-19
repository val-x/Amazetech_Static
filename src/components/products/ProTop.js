import React from 'react'
import DD from '../../assest/3d.jpg'

export default function ProTop() {
    return (
      <div className="md:h-[400px] bg-white h-[300px] py-10  md:py-20 md:py-10 px-5 md:px-20 flex ">
            <div className="h-full w-[50%] flex items-center justify-center">
              <div className="md:text-4xl w-[50%]  flex justify-center items-center text-black font-bold">
                PRODUCTS
              </div>
            </div>
            
            <div className="h-full w-full flex items-center justify-center">
            <img src={DD} alt="3D" className="h-full w-[100%]  md:w-[50%]" loading="lazy"></img>
            </div>
          </div>
  
    )
  }
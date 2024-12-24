import React from "react";
import "./Gallery.css";
import Water from "../../assest/water.jpg";
import Innovations from "../../assest/Innovations.jpg";
import Refreshing_the_planet from "../../assest/Refreshing_the_planet.jpg";
import Adding_value_accross_sectors from "../../assest/Adding_value_accross_sectors.png";
import wastewater_consultancy from "../../assest/wastewater_consultancy.jpg";
import water_lab_testing from "../../assest/industrial_boiler_cleaning.avif";
import water_services from "../../assest/water_services.jpg";
import industrial_boiler_cleaning from "../../assest/industrial_boiler_cleaning.avif";

export default function Gallery() {
  return (
    <div className="about">
      <div className="album">
        <div className="abtxt">Visit our Gallery</div>
        
        <div className="responsive-container-block bg">
          <div className="responsive-container-block img-cont">
            <img
              className="img"
              loading="lazy"
              alt="WaterImage"
              src={Water}
            />
            <img
              className="img"
              loading="lazy"
              alt="Wastewater Consultancy"
              src={wastewater_consultancy}
            />
            <img
              className="img"
              loading="lazy"
              alt="Water Lab Testing"
              src={water_lab_testing}
            />
          </div>
          <div className="responsive-container-block img-cont">
          <img
              className="img"
              loading="lazy"
              alt="Refreshing The Planet"
              src={Refreshing_the_planet}
            />
            <img
              className="img"
              loading="lazy"
              alt="Adding value accross sectors"
              src={Adding_value_accross_sectors}
            />
          </div>
          <div className="responsive-container-block img-cont">
          <img
              className="img"
              loading="lazy"
              alt="Innovations"
              src={Innovations}
            />
           <img
              className="img"
              loading="lazy"
              alt="Water Services"
              src={water_services}
            />
            <img
              className="img"
              loading="lazy"
              alt="Industrial boiler cleaning"
              src={industrial_boiler_cleaning}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

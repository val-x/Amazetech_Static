import React from "react";
import "./Gallery.css";
import Water from "../../assest/water.jpg";
import Innovations from "../../assest/Innovations.webp";
import Refreshing_the_planet from "../../assest/Refreshing_the_planet.webp";
import Adding_value_accross_sectors from "../../assest/Adding_value_accross_sectors.png";
import wastewater_consultancy from "../../assest/wastewater_consultancy.jpg";
import water_lab_testing from "../../assest/industrial_boiler_cleaning.avif";
import water_services from "../../assest/water_services.webp";
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
              alt="WaterImage"
              src={wastewater_consultancy}
            />
            <img
              className="img"
              loading="lazy"
              alt="WaterImage"
              src={water_lab_testing}
            />
          </div>
          <div className="responsive-container-block img-cont">
          <img
              className="img"
              loading="lazy"
              alt="WaterImage"
              src={Refreshing_the_planet}
            />
            <img
              className="img"
              loading="lazy"
              alt="WaterImage"
              src={Adding_value_accross_sectors}
            />
          </div>
          <div className="responsive-container-block img-cont">
          <img
              className="img"
              loading="lazy"
              alt="WaterImage"
              src={Innovations}
            />
           <img
              className="img"
              loading="lazy"
              alt="WaterImage"
              src={water_services}
            />
            <img
              className="img"
              loading="lazy"
              alt="WaterImage"
              src={industrial_boiler_cleaning}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

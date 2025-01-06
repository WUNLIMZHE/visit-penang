import React from "react";
import { Link } from "react-router-dom";
import "./Program.css";
import food_program from "../../assets/food_laksa.jpg";
import tourist_program from "../../assets/escape_penang.jpg";
import hotel_program from "../../assets/hotel.jpg";
import food_icon from "../../assets/food_icon.png";
import tourist_icon from "../../assets/tourist_icon.png";
import hotel_icon from "../../assets/hotel_icon.png";

const Program = () => {
  return (
    <div className="programs sm:mx-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-10 mx-10 md:mx-0">
        <Link className="program" to="/Food">
          <div>
            <img src={food_program} alt="" />
            <div className="caption">
              <img src={food_icon} alt="" />
              <p>Local Food</p>
            </div>
          </div>
        </Link>
        <Link className="program" to="/Tourism">
          <div>
            <img src={tourist_program} alt="" />
            <div className="caption">
              <img src={tourist_icon} alt="" />
              <p>Tourist Spot</p>
            </div>
          </div>
        </Link>
        <Link className="program" to="/Hotels">
          <div>
            <img src={hotel_program} alt="" />
            <div className="caption">
              <img src={hotel_icon} alt="" />
              <p>Accomodation</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Program;

// import React from 'react'
import "./Brochure.css";
import searchGreen from "../../assets/images/search_iconGreen.png";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const Brochure = ({ onExploreMore }) => {
  return (
    <div className="brochure container">
      <div className="brochure-text">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">My hometown Penang</h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl">Welcomes You</h2>
        <p className="text-base md:text-lg lg:text-xl mt-2 md:mt-3 lg:mt-4">
          Welcome to Penang, a beautiful island with rich history, tasty food,
          and stunning views. You can explore George Town, a UNESCO World
          Heritage Site, relax on sunny beaches, or enjoy the peaceful green
          hills. Whether you want to try local dishes, visit historic places, or
          simply unwind, Penang is ready to welcome you. Enjoy your time here!
        </p>
        <button
          onClick={onExploreMore}
          className="btn hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <img src={searchGreen} alt="" /> Explore More
        </button>
      </div>
    </div>
  );
};

// Props validation
Brochure.propTypes = {
  onExploreMore: PropTypes.func.isRequired,
};
export default Brochure;

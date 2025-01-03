import React from 'react'
import './Brochure.css'
import searchGreen from "../../assets/search_iconGreen.png"

const Brochure = () => {
  return (
    <div className='brochure container'>
        <div className="brochure-text">
            <h1>My hometown Penang</h1>
            <h2>Welcomes You</h2>
            <p>
                Welcome to Penang, a beautiful island with rich history, 
                tasty food, and stunning views. You can explore George Town, 
                a UNESCO World Heritage Site, relax on sunny beaches, or 
                enjoy the peaceful green hills. Whether you want to try local 
                dishes, visit historic places, or simply unwind, Penang is 
                ready to welcome you. Enjoy your time here!
            </p>
            <button className='btn'><img src={searchGreen} alt="" />Explore More</button>

        </div>
    </div>
  )
}

export default Brochure

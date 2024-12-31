import React from 'react'
import './Program.css'
import food_program from '../../assets/food_laksa.jpg';
import tourist_program from '../../assets/escape_penang.jpg';
import hotel_program from '../../assets/hotel.jpg';
import food_icon from '../../assets/food_icon.png';
import tourist_icon from '../../assets/tourist_icon.png';
import hotel_icon from '../../assets/hotel_icon.png';

const Program = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={food_program} alt=""/>
            <div className='caption'>
              <img src={food_icon} alt=""/> 
              <p>Local Food</p>
            </div>
        </div>
        <div className='program'>
            <img src={tourist_program} alt=""/>
            <div className='caption'>
              <img src={tourist_icon} alt=""/> 
              <p>Tourist Spot</p>
            </div>
        </div>
        <div className='program'>
            <img src={hotel_program} alt=""/>
            <div className='caption'>
              <img src={hotel_icon} alt=""/>
              <p>Accomodation</p>
            </div>
        </div>
    </div>
  )
}

export default Program

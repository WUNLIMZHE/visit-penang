import React, { useState } from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-button.png'
import about_vid from '../../assets/videoBrochure.mp4'
const About = () => {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className='about'>
      <div className="about-left">
        {!isVideoPlaying?(<><img src={about_img} alt="" className='about_img'/>
        <img src={play_icon} alt="" className='play_icon' onClick={handlePlayClick}/></>):
        (
          <video controls autoPlay className="about_vid" onEnded={handleVideoEnd} volume={0.1} style={{ width: 'auto', height: 'auto' }}>
            <source src={about_vid} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="about-right">
        <h3>More Detail about Penang</h3>
        <h2>A harmonious blend of rich cultural heritage, breathtaking landscapes, 
            and vibrant modernity.</h2>
        <p>Stroll through the historic streets of George Town, where colonial architecture 
            meets traditional shop houses, colorful murals, and lively markets. Tourist can 
            discover Penang's multi-ethnic tapestry through its festivals, temples, mosques, 
            and churches that stand side by side in unity.</p>
        <p>Penang's street food, often hailed as the best in the world, tempts visitors 
            with iconic dishes like Char Kuey Teow, Asam Laksa, and Hokkien Mee. Culinary 
            tours introduce visitors to both timeless recipes and modern fusion cuisine, 
            showcasing Penang's innovative spirit.</p>
        <p>Explore the lush greenery of Penang National Park, home to pristine beaches, 
            mangroves, and the canopy walk. You can ascend Penang Hill for breathtaking views 
            and a cooler climate, perfect for nature lovers.</p>
      </div>
    </div>
  )
}

export default About

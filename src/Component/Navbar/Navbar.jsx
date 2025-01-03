import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/visitpenang_logo.png'
import { Link } from "react-router-dom"
const Navbar = () => {
  
  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true): setSticky(false);
    })
  },[]);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Food">Food</Link></li>
        <li><Link to="/Tourism">Tourist Attractions</Link></li>
        <li><Link to="/Hotels">Hotels</Link></li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar

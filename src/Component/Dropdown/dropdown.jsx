import { useState } from 'react'
import { Link } from "react-router-dom"
import down_arrow from "../../assets/down-arrow.png"
import './dropdown.css';

export default function Dropdown(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // Toggle the dropdown menu when the button is clicked
    const handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return(
      <>
        <button className='dropdown-button' onClick={()=>handleDropdown()}>
            <img src={down_arrow} alt='+'/>
        </button>
        {isDropdownOpen && 
            <ul className='menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Food">Food</Link></li>
                <li><Link to="/Tourism">Tourism</Link></li>
                <li><Link to="/Hotels">Hotels</Link></li>
            </ul>
        }
      </>
    );
  }
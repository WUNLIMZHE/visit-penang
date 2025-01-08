import { useState } from "react";
import { Link } from "react-router-dom";
import down_arrow from "../../assets/down-arrow.png";
import "./dropdown.css";

export default function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Toggle the dropdown menu when the button is clicked
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <button className="dropdown-button" onClick={() => handleDropdown()}>
        <img src={down_arrow} alt="+" />
      </button>
      {isDropdownOpen && (
        <ul className="menu">
          <li>
            <Link to="/">
              <span className="fancy-hover relative">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/Food">
              <span className="fancy-hover relative">Food</span>
            </Link>
          </li>
          <li>
            <Link to="/Tourism">
              <span className="fancy-hover relative">Tourism</span>
            </Link>
          </li>
          <li>
            <Link to="/Hotels">
              <span className="fancy-hover relative">Hotels</span>
            </Link>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/wunlimzhe/"
              className="fancy-hover relative"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </>
  );
}

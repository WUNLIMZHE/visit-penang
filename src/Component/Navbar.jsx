import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Navbar(){
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0); // Initialize with 0, which represents the top of the page

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > lastScrollY) {
        // If user scrolls down, hide the navbar
        setShowNavbar(false);
      } else {
        // If user scrolls up, show the navbar
        setShowNavbar(true);
      }
      // Update the last scroll position
      setLastScrollY(scrolled);
    };

    // **Mounting Phase**:
    // The effect runs once when the component is first rendered (mounted).
    // Here we add the scroll event listener to the window.
    window.addEventListener('scroll', handleScroll);

    // **Cleanup Phase**:
    // The return function is called when the component is about to unmount.
    // This ensures that we remove the scroll event listener, preventing memory leaks.
    // listener is removed when the state of showNavbar is changed.
    return () => {
      // Remove the scroll event listener from the window
      window.removeEventListener('scroll', handleScroll);
    };

  }, [lastScrollY]); // Dependency array: Re-run the effect when `lastScrollY` changes

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    // Add event listener on mount
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div id="navbar" className="navbar px-6 md:px-12 fixed z-30 bg-theme-800 text-white transition-all min-h-[6rem]" style={{ top: showNavbar ? '0px' : '-128px' }}>
        <div className="navbar-start">
          <a href="https://cssocietyusm.com/" className="text-xl py-2 h-fit">
            <div className="ml-6 flex items-center justify-center gap-4 md:ml-2">
              <img
                src="/logo.svg"
                type="image/svg+xml"
                title="CS Society Logo"
                height="64px"
                className="w-16 -z-10 block"
              ></img>
              <div className="font-logo text-left font-normal tracking-wider text-xl -z-10">
                <div className="leading-none sm:leading-snug">USM Computer</div>
                <div className="leading-none">Science Society</div>
              </div>
            </div>
          </ a>
        </div>
        <div className="navbar-end">
          {/* Conditional rendering based on screen size */}
          {isMobile ? (
            <div className="mobile-navbar ">
            {/* Desktop-specific content */}
            <div className="dropdown dropdown-end">
              <label htmlFor="menu" tabIndex="0" className="btn btn-ghost md:hidden" onClick={toggleDropdown}>
                <svg 
                width="0.88em" height="1em" viewBox="0 0 448 512" className="text-xl" data-icon="fa-solid:bars"
                xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
              </label>
              {/* Conditional rendering of dropdown menu */}
              {showDropdown && (
                <div
                  tabIndex="0"
                  className="pop-menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-48 bg-theme-700 flex-block"
                >
                  <div className={`rounded-box active:bg-theme-900}`}>
                    <a href="https://cssocietyusm.com/about/" className="text-lg" onClick={toggleDropdown}>
                      <button className="btn-effect pop-option block">
                        About
                      </button>
                    </a>
                  </div>
                  <div className={`rounded-box active:bg-theme-900`}>
                    <a href="/" className="text-lg">
                      <button className="btn-effect pop-option block">
                        Event
                      </button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
          ) : (
            <div className="desktop-navbar">
              <ul className="menu menu-horizontal p-0 hidden md:flex gap-x-3">
                <li>
                  <a href="https://cssocietyusm.com/about/" className="text-lg pr-6">About</a>
                </li>
                <li>
                  <a href="/" className="text-lg">Events</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="py-16"></div>
    </div>
  );
}

export default Navbar;
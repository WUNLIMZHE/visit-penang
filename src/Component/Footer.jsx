import React from "react";

function Footer(){
  return (
    <footer className="text-base-content">
      <div className="p-10 bg-base-200">
        <div className="footer max-w-5xl mx-auto">
          <a href="/" className="transition hover:scale-105">
            <img
              src="https://cssocietyusm.com/assets/logos/organizations/cs-soc-official.svg"
              alt="USM CS Society Logo"
              className="h-24 pointer-events-none"
            />
          </a>
          <div>
            <span className="footer-title">Navigate</span>
            <a href="https://cssocietyusm.com/about/" className="link link-hover">
              About us
            </a>
            <a href="/" className="link link-hover">
              Events
            </a>
            <a href="https://cssocietyusm.com/news" className="link link-hover">
              News
            </a>
          </div>
          <div>
            <span className="footer-title">Social</span>
            <div className="grid grid-flow-col gap-5">
              <a href="https://www.facebook.com/cs.usm.my/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="0.88em"
                height="1em"
                viewBox="0 0 448 512"
                className="text-2xl h-8 text-theme-800 hover:text-theme-900 transition"
                aria-label="Facebook"><path fill="#103f45" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
              </a>
              <a href="https://www.instagram.com/cs.usm/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="0.88em"
                height="1em"
                viewBox="0 0 448 512"
                className="text-2xl h-8 text-theme-800 hover:text-theme-900 transition"
                aria-label="Instagram"><path fill="#103f45" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
              <a href="https://tiktok.com/@cs.usm" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="0.88em"
                height="1em"
                viewBox="0 0 448 512"
                className="text-2xl h-8 text-theme-800 hover:text-theme-900 transition"
                aria-label="TikTok"><path fill="#103f45" d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/cssocietyusm/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="0.88em"
                height="1em"
                viewBox="0 0 448 512"
                className="text-2xl h-8 text-theme-800 hover:text-theme-900 transition"
                aria-label="Linkedln"><path fill="#103f45" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
              </a>
              <a href="https://t.me/+zA4GF8CVVFpjOWY1" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="0.88em"
                height="1em"
                viewBox="0 0 448 512"
                className="text-2xl h-8 text-theme-800 hover:text-theme-900 transition"
                aria-label="Telegram"><path fill="#103f45" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <a href="https://cs.usm.my" target="_blank" rel="noopener noreferrer" className="transition hover:scale-105">
              <img
                src="https://cssocietyusm.com/assets/logos/organizations/CS-logo-transparent.svg"
                alt="USM CS School Logo"
                className="text-2xl h-12 pointer-events-none"
              />
            </a>
            <a href="https://www.usm.my/" target="_blank" rel="noopener noreferrer" className="transition hover:scale-105">
              <img
                src="https://cssocietyusm.com/assets/logos/organizations/USM-color.svg"
                alt="USM Logo"
                className="text-2xl h-12 pointer-events-none"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-theme-100 text-base-content font-medium">
        <p>© 2022 - 2023 Computer Science Society, Universiti Sains Malaysia</p>
      </div>
    </footer>
  );  
}

export default Footer;
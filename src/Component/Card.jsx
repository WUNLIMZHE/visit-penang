// import React from "react";
import PropTypes from "prop-types";

function Card({onClick, ...props}) {

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:opacity-80 transition flex flex-col cursor-pointer" onClick={() => onClick(props.id)}>
      <img
        className="rounded-t-lg object-cover w-full h-[208px]"
        src={props.img}
        alt={props.alt}
      />
      <div className="p-5 flex flex-col flex-grow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">
          {props.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <div className="flex gap-x-3">
          <div className="grid gap-1 items-center text-theme-800 content-start mt-1">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-xl"
              data-icon="ci:location"
            >
              <symbol id="ai:ci:location">
                <path
                  fill="currentColor"
                  d="M12 21a29.776 29.776 0 0 1-3.5-3.531C6.9 15.558 5 12.712 5 10a7 7 0 0 1 11.952-4.951A6.955 6.955 0 0 1 19 10c0 2.712-1.9 5.558-3.5 7.469A29.777 29.777 0 0 1 12 21Zm0-14a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
                ></path>
              </symbol>
              <use xlinkHref="#ai:ci:location"></use>
            </svg>
          </div>
          <div className="grid gap-1 items-center font-bold text-lg">
            <span>{props.location}</span>
          </div>
        </div>
        <div className="flex gap-x-3 mt-2">
          <div className="grid gap-1 items-center text-theme-800 content-start mt-1">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-xl"
              data-icon="rating:star"
            >
              <symbol id="rating:star">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                ></path>
              </symbol>
              <use xlinkHref="#rating:star"></use>
            </svg>
          </div>
          <div className="grid gap-1 items-center font-bold text-lg content-start">
            <span>{props.rating}/5.0</span>
          </div>
        </div>
        {/* Push the button to the bottom */}
        <div className="mt-auto">
          <a
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3" onClick={() => onClick(props.id)}
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

// Props validation
Card.propTypes = {
  img: PropTypes.string.isRequired, // Image URL is required
  alt: PropTypes.string, // Alternative text for the image
  name: PropTypes.string.isRequired, // Card title
  description: PropTypes.string.isRequired, // Description text
  location: PropTypes.string, // Location text
  rating: PropTypes.string, // Rating (string)
};

export default Card;

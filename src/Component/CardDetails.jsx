import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

function CardDetails({ data }) {
  const card = data;

  let backToPage, backToLabel;

  if (card.category === "food") {
    backToPage = "/food";
    backToLabel = "foods";
  } else if (card.category === "tourist-spot") {
    backToPage = "/tourism";
    backToLabel = "tourist spots";
  } else if (card.category === "hotel") {
    backToPage = "/hotels";
    backToLabel = "hotels";
  }

  // console.log("Received data from card", data);

  // Split the details into paragraphs
  // const paragraphs = card.details
  //   .split("\n")
  //   .filter((paragraph) => paragraph.trim() !== "");

  // console.log(paragraphs);
  return (
    <div className="max-w-5xl mx-auto px-8 mt-[128px] min-h-screen">
      <p>
        ←{" "}
        <Link to={backToPage} className="link hover:underline">
          View more {backToLabel}
        </Link>
      </p>
      <article className="py-10 prose max-w-none">
        <img
          src={card.img}
          alt="Log Off Night 2024 image"
          className="sm:float-right mx-auto sm:ml-6 sm:mr-0 rounded shadow mb-5 "
          width={card.category === "tourist-spot" ? "400px" : "360px"}
        />
        <h1 className="mb-3 text-4xl font-bold">{card.name}</h1>
        <br />
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
            <span>{card.location}</span>
          </div>
        </div>
        {card.category === "tourist-spot" && (
          <div className="flex gap-x-3 mt-2">
            <div className="grid gap-1 items-center text-theme-800 content-start mt-1">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-xl"
                data-icon="clock"
              >
                <symbol id="rating:clock">
                  <circle
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    cx="12"
                    cy="12"
                    r="10"
                  ></circle>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="12"
                    y1="12"
                    x2="12"
                    y2="6"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="12"
                    y1="12"
                    x2="16"
                    y2="12"
                  ></line>
                </symbol>
                <use xlinkHref="#rating:clock"></use>
              </svg>
            </div>
            <div className="grid gap-1 items-center font-bold text-lg content-start">
              <span>Opening Hours:</span>
              <spa className="font-medium text-base">
                {card.openingHours.split("\n").map((line, index) => (
                  <span key={index}>{line}</span>
                ))}
              </spa>
            </div>
          </div>
        )}
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
            <span>{card.rating}/5.0</span>
          </div>
        </div>
        {card.category !== "hotel" && (
          <div className="flex gap-x-3 mt-2 mb-2">
            <div className="grid gap-1 items-center text-theme-800 content-start mt-1">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-xl"
                data-icon="coin-dollar"
              >
                <symbol id="icon:coinDollar">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 7c-1.5 0-2.5 1-2.5 2.5S10.5 12 12 12s2.5 1 2.5 2.5S13.5 17 12 17"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <line
                    x1="12"
                    y1="6"
                    x2="12"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </symbol>
                <use xlinkHref="#icon:coinDollar"></use>
              </svg>
            </div>
            <div className="grid gap-1 items-center font-bold text-lg content-start">
              <span>
                {card.category === "food" && `RM${card.price}`}

                {card.category === "tourist-spot" &&
                  (<><span>Ticket price:</span><br />
                  <span className="font-medium text-base">
                    {card.price.split("\n").map((line, index) => (
                      <span key={index}>{line}<br /></span>
                      
                    ))}
                  </span></>)}
              </span>
            </div>
          </div>
        )}
        {card.category === "hotel" && (
          <div className="flex gap-x-3 mt-2 mb-3">
            <div className="grid gap-1 items-center text-theme-800 content-start mt-1">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-xl"
                xmlns="http://www.w3.org/2000/svg"
                data-icon="bed"
              >
                <symbol id="icon:bed">
                  <rect
                    x="3"
                    y="10"
                    width="18"
                    height="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    rx="2"
                    ry="2"
                  />
                  <line
                    x1="3"
                    y1="18"
                    x2="3"
                    y2="21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="21"
                    y1="18"
                    x2="21"
                    y2="21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="4"
                    y="11"
                    width="7"
                    height="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </symbol>
                <use xlinkHref="#icon:bed"></use>
              </svg>
            </div>
            <div className="grid gap-1 items-center font-bold text-lg content-start">
              <a
                className="hover:underline hover:cursor-pointer mt-2"
                href={card.booking}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here for online booking!
              </a>
            </div>
          </div>
        )}

        <div className="flex gap-x-3 mb-5">
          <div className="grid gap-1 items-center text-theme-800 content-start mt-1">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-xl"
              data-icon="communication:phone"
            >
              <symbol id="communication:phone">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72 12.72 12.72 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 11a16 16 0 0 0 6.91 6.91l1.39-1.39a2 2 0 0 1 2.11-.45 12.72 12.72 0 0 0 2.81.7 2 2 0 0 1 1.72 2z"
                ></path>
              </symbol>
              <use xlinkHref="#communication:phone"></use>
            </svg>
          </div>
          <div className="grid gap-1 items-center font-bold text-lg content-start">
            <span>{card.phone === "" ? "(none)" : card.phone}</span>
          </div>
        </div>

        {card.details.split("\n").map((line, index) => (
          <span key={index} className="text-gray-600">
            {line}
            <br />
            <br />
          </span>
        ))}

        <a href={card.source} target="_blank" rel="noopener noreferrer">
          {`For more details please refer to: `}
          <span className="hover:underline">{card.source}</span>
        </a>
      </article>
    </div>
  );
}

export default CardDetails;

// Validate the 'data' prop
CardDetails.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string,
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    openingHours: PropTypes.string,
    booking: PropTypes.string,
    phone: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
};
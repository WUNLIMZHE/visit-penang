import React from "react";
import { Link } from "react-router-dom";

function EventDetails({data}){
  const {event} = data;

  // Split the details into paragraphs
  const paragraphs = event.details.split('\n').filter(paragraph => paragraph.trim() !== '');
  return (
    <div className="max-w-5xl mx-auto px-8">
      <p>← <Link to="/" className="link">Back to All Events</Link></p>
      <article className="py-10 prose max-w-none">
        <img
          src={event.img}
          alt="Log Off Night 2024 image"
          className="sm:float-right mx-auto sm:ml-6 sm:mr-0 rounded shadow"
          width="360px"
        />
        <h1 className="mb-3">{event.name}</h1>
        <div className="flex gap-2">
          <div className="badge border-0 p-3 font-bold text-white bg-theme-700 tag1">{event.tag1}</div>
          <div className="badge border-0 p-3 font-bold text-black bg-theme-100 tag2">{event.tag2}</div>
        </div>
        <br />
        <div className="flex gap-x-3">
          <div className="grid gap-1 items-center text-theme-800">
            <svg width="1em" height="1em" viewBox="0 0 24 24" className="text-xl" data-icon="ci:calendar-event">
              <symbol id="ai:ci:calendar-event">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V8M4 8v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H8m12 4v-.803c0-1.118 0-1.678-.218-2.105a2.001 2.001 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H16M8 4h8M8 4V2m8 2V2m-4.25 14a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25z"
                ></path>
              </symbol>
              <use xlinkHref="#ai:ci:calendar-event"></use>
            </svg>
            <svg width="1em" height="1em" viewBox="0 0 24 24" className="text-xl" data-icon="ci:clock">
              <symbol id="ai:ci:clock">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 7v5h5m-5 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18"
                ></path>
              </symbol>
              <use xlinkHref="#ai:ci:clock"></use>
            </svg>
            <svg width="1em" height="1em" viewBox="0 0 24 24" className="text-xl" data-icon="ci:location">
              <symbol id="ai:ci:location">
                <path
                  fill="currentColor"
                  d="M12 21a29.776 29.776 0 0 1-3.5-3.531C6.9 15.558 5 12.712 5 10a7 7 0 0 1 11.952-4.951A6.955 6.955 0 0 1 19 10c0 2.712-1.9 5.558-3.5 7.469A29.777 29.777 0 0 1 12 21Zm0-14a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
                ></path>
              </symbol>
              <use xlinkHref="#ai:ci:location"></use>
            </svg>
          </div>
          <div className="grid gap-1 grid-rows-3 items-center font-bold text-lg">
            <span>{event.date}</span>
            <span>{event.time}</span>
            <span>{event.venue}</span>
          </div>
        </div>
        {paragraphs.map((paragraph, index) => (
          <p key={index} class="event-details">{paragraph}</p>
        ))}
      </article>
    </div>
  );
}

export default EventDetails;
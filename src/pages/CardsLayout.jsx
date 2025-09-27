// import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Component/Card";
import PropTypes from "prop-types"; // Import PropTypes

// Layout for rendering food, tourist spots, and hotel cards
const CardsLayout = ({ data }) => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only on mount

  const navigate = useNavigate();

  function createCard(card) {
    return (
      <Card
        key={card.id}
        id={card.id}
        name={card.name}
        location={card.location}
        rating={card.rating}
        description={card.description}
        img={card.img}
        onClick={handleDetailsButtonClick}
      />
    );
  }

  function handleDetailsButtonClick(id) {
    console.log("Looking for details for cardid: ", id);
    const card = data.find((e) => e.id === id);
    console.log("Card found: ", card);
    if (card) {
      console.log("Card found!");
      // Use the dynamic route
      navigate(`/details/${card.category}/${card.id}`, { state: { card } });
    } else {
      console.log("Event not found");
    }
  }

  return (
    <div className="flex justify-center data-center min-h-screen">
      <section className="mt-[128px] grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 justify-data-center mb-10">
        {data.map(createCard)}
      </section>
    </div>
  );
};

export default CardsLayout;

// Validate the 'data' prop
CardsLayout.propTypes = {
  data: PropTypes.array.isRequired, // Ensure data is an array and is required
};

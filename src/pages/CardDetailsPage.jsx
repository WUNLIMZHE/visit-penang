// import Navbar from "../components/Navbar";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import CardDetails from "../Component/CardDetails";
import PropTypes from "prop-types"; // Import PropTypes
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";

function CardDetailsPage({ data }) {
  const location = useLocation();
  // console.log("Location State:", location.state); // Should show the full state object

  const params = useParams();

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-8">
        <CardDetails
          data={
            location.state?.card ||
            data.find(
              (item) =>
                item.id === Number(params.id) && item.category === params.category
            )
          }
        />
      </div>
      <Footer />
    </div>
  );
}

export default CardDetailsPage;

// Validate the 'data' prop
CardDetailsPage.propTypes = {
  data: PropTypes.array.isRequired, // Ensure data is an array and is required
};

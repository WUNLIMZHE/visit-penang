// import Navbar from "../components/Navbar";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import CardDetails from "../Component/CardDetails";
import PropTypes from "prop-types"; // Import PropTypes
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CardDetailsPage({ data }) {
  const location = useLocation();
  const navigate = useNavigate();

  // console.log("Location State:", location.state); // Should show the full state object

  const params = useParams();

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only on mount

  // Try to get the card data either from state or fallback to finding in array
  const card =
    location.state?.card ||
    data.find(
      (item) =>
        item.id === Number(params.id) && item.category === params.category
    );
    
  // If card not found, redirect to 404
  useEffect(() => {
    if (!card) {
      navigate("/404", { replace: true });
    }
  }, [card, navigate]);

  if (!card) {
    return null; // Or a loading spinner, or some placeholder
  }
  
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-8">
        <CardDetails data={card} />
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

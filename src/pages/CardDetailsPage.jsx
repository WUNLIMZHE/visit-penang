// import Navbar from "../components/Navbar";
import Navbar from "../Component/Navbar/Navbar";
import CardDetails from "../Component/CardDetails";
import { useLocation } from 'react-router-dom';
import Footer from "../Component/Footer/Footer";

function CardDetailsPage(data){

  const location = useLocation();
  console.log("Location State:", location.state); // Should show the full state object

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-8">
        <CardDetails data={location.state}/>
      </div>
      <Footer />
    </div>
  );
}

export default CardDetailsPage;
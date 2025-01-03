import React from "react";
import Navbar from "../components/Navbar";
import events from '../constants/events';
import Header from "../components/Header";
import Button from '../components/Button';
import Footer from '../components/Footer';
import EventDetails from "../components/EventDetails";
import { useLocation } from 'react-router-dom';

function EventDetailsPage(){

  const location = useLocation();
  console.log("Location State:", location.state); // Should show the full state object
  const eventData = location.state;
  console.log("eventData", eventData);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-8">
        <EventDetails data={eventData}/>
      </div>
      <Footer />
    </div>
  );
}

export default EventDetailsPage;
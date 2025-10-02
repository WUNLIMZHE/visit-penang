import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

import NewTrip from "../Component/NewTrip";
import NoTripSelected from "../Component/NoTripSelected";
import TripSidebar from "../Component/TripSidebar";
import SelectedTrip from "../Component/SelectedTrip";

import { useState } from "react";

const PlanTrip = () => {
  const [tripsState, setTripsState] = useState({
    selectedTripId: undefined,
    selectedActivityId: undefined,
    trips: [],
    activities: [],
  });

  function handleAddActivity(activityData) {
    setTripsState((prevState) => {
      const activityId = Math.random();

      const newActivity = {
        ...activityData,
        tripId: prevState.selectedTripId,
        id: activityId,
      };

      return {
        ...prevState,
        activities: [newActivity, ...prevState.activities],
      };
    });
  }

  function handleDeleteActivity(id) {
    setTripsState((prevState) => {
      return {
        ...prevState,
        activities: prevState.activities.filter((activity) => activity.id !== id),
      };
    });
  }

  function handleStartAddTrip() {
    setTripsState((prevState) => {
      return {
        ...prevState,
        selectedTripId: null,
      };
    });
  }

  function handleCancelAddTrip() {
    setTripsState((prevState) => {
      return {
        ...prevState,
        selectedTripId: undefined,
      };
    });
  }

  function handleSelectTrip(id) {
    console.log(id);
    setTripsState((prevState) => {
      return {
        ...prevState,
        selectedTripId: id,
      };
    });
  }

  function handleAddTrip(tripData) {
    console.log(tripData);
    setTripsState((prevState) => {
      const tripId = Math.random();

      const newTrip = {
        ...tripData,
        id: tripId,
      };

      return {
        ...prevState,
        selectedTripId: undefined,
        trips: [...prevState.trips, newTrip],
      };
    });
  }

  function handleDeleteTrip() {
    setTripsState((prevState) => {
      return {
        ...prevState,
        selectedTripId: undefined,
        trips: prevState.trips.filter(
          (trip) => trip.id !== prevState.selectedTripId
        ),
      };
    });
  }

  const selectedTrip = tripsState.trips.find(
    (trip) => trip.id === tripsState.selectedTripId
  );

  //onAddActivity and onDeleteActivity are prop drilling that we should avoid
  // prop drilling = props that being passed to children then being passed to next children (grandparent to grandchildren)
  let content = (
    <SelectedTrip
      trip={selectedTrip}
      onDelete={handleDeleteTrip}
      onAddActivity={handleAddActivity}
      onDeleteActivity={handleDeleteActivity}
      activities={tripsState.activities}
    />
  );

  if (tripsState.selectedTripId === null) {
    content = (
      <NewTrip onAdd={handleAddTrip} onCancel={handleCancelAddTrip} />
    );
  } else if (tripsState.selectedTripId === undefined) {
    content = <NoTripSelected onStartAddTrip={handleStartAddTrip} />;
  }

  return (
    <>
      <Navbar />
      <main className="mt-[128px] min-h-screen my-8 flex gap-8">
        <TripSidebar
          onStartAddTrip={handleStartAddTrip}
          trips={tripsState.trips}
          onSelectTrip={handleSelectTrip}
          selectedTripId={tripsState.selectedTripId}
        />
        {content}
      </main>
      <Footer />
    </>
  );
};

export default PlanTrip;

import { useState, useEffect, useReducer, useMemo } from "react";
import { TripContext } from "./trip-context";
import PropTypes from "prop-types";

const TRIPS_STORAGE_KEY = "trip_activities";

export const TripContextProvider = ({ children }) => {
  // Load activities from localStorage on mount
  const [tripsState, setTripsState] = useState(() => {
    const stored = localStorage.getItem(TRIPS_STORAGE_KEY);
    return stored
      ? JSON.parse(stored)
      : {
          selectedTripId: undefined,
          selectedActivityId: undefined,
          trips: [],
          activities: [],
        };
  });

  // Save activities to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(TRIPS_STORAGE_KEY, JSON.stringify(tripsState));
  }, [tripsState]);

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
        activities: prevState.activities.filter(
          (activity) => activity.id !== id
        ),
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
    // console.log(id);
    setTripsState((prevState) => {
      return {
        ...prevState,
        selectedTripId: id,
      };
    });
  }

  function handleAddTrip(tripData) {
    // console.log(tripData);
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

  function handleUpdateActivity(activityId, updatedData) {
    setTripsState((prevState) => {
      // console.log(updatedData);
      const updatedActivities = prevState.activities.map((activity) =>
        activity.id === activityId
          ? { ...activity, ...updatedData } // merge the updated fields
          : activity
      );
      // console.log("updatedActivities: ", updatedActivities);
      return {
        ...prevState,
        activities: updatedActivities,
      };
    });
  }

  // Used to return a derived result (no side effects)
  // Runs during render
  const selectedTrip = useMemo(() => {
    return tripsState.trips.find(
      (trip) => trip.id === tripsState.selectedTripId
    );
  }, [tripsState.trips, tripsState.selectedTripId]);

  const selectedActivity = useMemo(() => {
    return tripsState.activities.filter(
      (activity) => activity.tripId === tripsState.selectedTripId
    );
  }, [tripsState.selectedTripId, tripsState.activities]);

  // console.log(selectedTrip);
  // console.log(selectedActivity);

  const contextVal = {
    trips: tripsState,
    selectedTrip: selectedTrip,
    selectedActivity: selectedActivity,
    addActivity: handleAddActivity,
    deleteActivity: handleDeleteActivity,
    startAddTrip: handleStartAddTrip,
    cancelAddTrip: handleCancelAddTrip,
    selectTrip: handleSelectTrip,
    addTrip: handleAddTrip,
    deleteTrip: handleDeleteTrip,
    updateActivity: handleUpdateActivity,
  };

  return (
    <TripContext.Provider value={contextVal}>{children}</TripContext.Provider>
  );
};

TripContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

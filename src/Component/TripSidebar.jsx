import { useState, useContext } from "react";
import Button from "./Button";
import { TripContext } from "../store/trip-context";

const TripSidebar = () => {
  const {startAddTrip, trips, selectTrip} = useContext(TripContext);
  const [showDrawer, setShowDrawer] = useState(false);

  // Sidebar for desktop/tablet
  const sidebar = (
    <aside className="hidden md:block w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Trips
      </h2>
      <div>
        <Button onClick={startAddTrip}>+ Add Trip</Button>
      </div>
      <ul className="mt-8">
        {trips.trips.map((trip) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (trip.id === trips.selectedTripId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={trip.id}>
              <button
                className={cssClasses}
                onClick={() => selectTrip(trip.id)}
              >
                {trip.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );

  // Drawer for mobile
  const drawer = (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-stone-900 text-stone-50 z-50 transition-transform duration-300 ${
        showDrawer ? "translate-x-0" : "-translate-x-full"
      } md:hidden`}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-stone-700">
        <h2 className="font-bold uppercase text-lg">Your Trips</h2>
        <button
          className="text-stone-400 text-xl"
          onClick={() => setShowDrawer(false)}
        >
          &times;
        </button>
      </div>
      <ul className="mt-4 px-6">
        {trips.trips.map((trip) => (
          <li key={trip.id}>
            <button
              className={`w-full text-left px-2 py-2 rounded-sm my-1 ${
                trip.id === trips.selectedTripId
                  ? "bg-stone-800 text-stone-200"
                  : "text-stone-400"
              }`}
              onClick={() => {
                selectTrip(trip.id)
                setShowDrawer(false);
              }}
            >
              {trip.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  // App bar for mobile
  const appBar = (
    <div className="h-20 fixed bottom-0 left-0 w-full bg-stone-900 flex justify-around items-center py-3 z-40 md:hidden">
      <Button onClick={startAddTrip}>+ Add Trip</Button>
      <Button onClick={() => setShowDrawer(true)}>My Trip</Button>
    </div>
  );

  return (
    <>
      {sidebar}
      {drawer}
      {appBar}
    </>
  );
};

export default TripSidebar;
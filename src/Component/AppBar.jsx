import { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const AppBar = ({ onStartAddTrip, trips, onSelectTrip, selectedTripId }) => {
  // Drawer for mobile
  const [showDrawer, setShowDrawer] = useState(false);
  const drawer = (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-stone-900 text-stone-50 z-50 
  transition-transform duration-300 md:hidden
  ${
    showDrawer
      ? "translate-x-0 pointer-events-auto"
      : "-translate-x-full pointer-events-none"
  }`}
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
        {trips.map((trip) => (
          <li key={trip.id}>
            <button
              className={`w-full text-left px-2 py-2 rounded-sm my-1 ${
                trip.id === selectedTripId
                  ? "bg-stone-800 text-stone-200"
                  : "text-stone-400"
              }`}
              onClick={() => {
                onSelectTrip(trip.id);
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
    <nav className="h-10 border-t border-red-500 fixed bottom-0 left-0 w-full bg-stone-900 flex justify-around items-center py-3 z-40 md:hidden">
      <Button onClick={onStartAddTrip}>+ Add Trip</Button>
      <Button onClick={() => setShowDrawer(true)}>My Trip</Button>
    </nav>
  );

  return (
    <>
      {drawer}
      {appBar}
    </>
  );
};

export default AppBar;

AppBar.propTypes = {
  onStartAddTrip: PropTypes.func.isRequired,
  trips: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectTrip: PropTypes.func.isRequired,
  selectedTripId: PropTypes.number,
};

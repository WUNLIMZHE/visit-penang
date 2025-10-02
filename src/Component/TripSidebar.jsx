import Button from "./Button";
import PropTypes from "prop-types";

const TripSidebar = ({
  onStartAddTrip,
  trips,
  onSelectTrip,
  selectedTripId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Trips
      </h2>
      <div>
        <Button onClick={onStartAddTrip}>+ Add Trip</Button>
      </div>
      <ul className="mt-8">
        {trips.map((trip) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";

          if (trip.id === selectedTripId){
            cssClasses += 'bg-stone-800 text-stone-200';
          } else{
            cssClasses += 'text-stone-400';
          }

          return (
            <li key={trip.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectTrip(trip.id)}
              >
                {trip.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default TripSidebar;
TripSidebar.propTypes = {
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
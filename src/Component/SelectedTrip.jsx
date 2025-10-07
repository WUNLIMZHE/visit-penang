import Activities from "./Activities";
import { TripContext } from "../store/trip-context";
import {useContext} from "react";

const SelectedTrip = () => {
  const {selectedTrip, deleteTrip } = useContext(TripContext);
  const formattedDate = new Date(selectedTrip.startDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="ml-3 md:ml-0 mt-2 mr-5 md:mt-16 w-full">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {/* {trip.title} */}
            {selectedTrip.title}
          </h1>
          <button className="text-stone-600 hover:text-stone-950" onClick={deleteTrip}>
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {/* {trip.description} */}
          {selectedTrip.description}
        </p>
      </header>
      <Activities />
    </div>
  );
};

export default SelectedTrip;
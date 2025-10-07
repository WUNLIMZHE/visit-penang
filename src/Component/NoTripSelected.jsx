import {useContext} from "react";
import noProjectImage from "../assets/images/no-projects.png";
import Button from "./Button";
// import PropTypes from "prop-types";
import { TripContext } from "../store/trip-context";

// const NoTripSelected = ({onStartAddTrip}) => {
const NoTripSelected = () => {
  const {startAddTrip} = useContext(TripContext);
  return (
    <div className="mt-24 text-center w-full md:w-2/3">
      <img
        src={noProjectImage}
        alt="an empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Trip Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a trip or get started with a new one
      </p>
      <p className="mt-8">
        {/* <Button onClick={onStartAddTrip}>Create new trip</Button> */}
        <Button onClick={startAddTrip}>Create new trip</Button>
      </p>
    </div>
  );
};

export default NoTripSelected;

// NoTripSelected.propTypes = {
//   onStartAddTrip: PropTypes.func.isRequired,
// };
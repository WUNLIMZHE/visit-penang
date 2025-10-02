import Activities from "./Activities";
import PropTypes from "prop-types";

const SelectedTrip = ({ trip, onDelete, onAddActivity, onDeleteActivity, activities }) => {
  const formattedDate = new Date(trip.startDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {trip.title}
          </h1>
          <button className="text-stone-600 hover:text-stone-950" onClick={onDelete}>
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {trip.description}
        </p>
      </header>
      <Activities onAdd={onAddActivity} onDelete={onDeleteActivity} activities={activities}/>
    </div>
  );
};

export default SelectedTrip;

SelectedTrip.propTypes = {
  trip: PropTypes.shape({
    title: PropTypes.string.isRequired,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    description: PropTypes.string,
  }),
  onDelete: PropTypes.func.isRequired,
  onAddActivity: PropTypes.func.isRequired,
  onDeleteActivity: PropTypes.func.isRequired,
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
      endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
      location: PropTypes.string.isRequired,
      startTime: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
      endTime: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
      note: PropTypes.string.isRequired,
    })
  ).isRequired,
};
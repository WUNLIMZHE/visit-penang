import NewActivity from "./NewActivity";
import PropTypes from "prop-types";

const Activities = ({ activities, onAdd, onDelete }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Activities</h2>
      <NewActivity onAdd={onAdd} />
      {activities.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any activities
        </p>
      )}
      {activities.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {activities.map((activity) => (
            // <li key={activity.id} className="flex justify-between my-4">
            //   <span>{activity.location}</span>
            //   <span>{activity.startDate}</span>
            //   <span>{activity.endDate}</span>
            //   <span>{activity.startTime}</span>
            //   <span>{activity.endTime}</span>
            //   <span>{activity.note}</span>
            //   <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(activity.id)}>Clear</button>
            // </li>
            <li
              key={activity.id}
              className="flex flex-col md:flex-row md:items-center justify-between 
                 gap-4 p-4 rounded-xl shadow-sm bg-white border border-stone-200"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-stone-800">
                  {activity.location}
                </h3>
                <p className="text-sm text-stone-500">
                  {activity.startDate} {activity.startTime} → {activity.endDate}{" "}
                  {activity.endTime}
                </p>
                {activity.note && (
                  <p className="mt-2 text-sm text-stone-700">{activity.note}</p>
                )}
              </div>

              <div className="flex-shrink-0">
                <button
                  className="px-3 py-1 rounded-md text-sm font-medium 
                     text-red-600 hover:bg-red-50 hover:text-red-700"
                  onClick={() => onDelete(activity.id)}
                >
                  Clear
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Activities;

Activities.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      location: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      note: PropTypes.string.isRequired,
    })
  ),
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

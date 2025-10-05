import { useState, useRef } from "react";
import Button from "./Button";
import NewActivity from "./NewActivity";
import PropTypes from "prop-types";
import Forecast from "./Forecast";
import Modal from "./Modal";

const Activities = ({ activities, onAdd, onDelete, tripDate }) => {
  const [activity, setActivity] = useState(null);
  const modal = useRef();
  const showForecast = (activityId) => {
    const filteredActivity = activities.find((act) => act.id === activityId);
    if (filteredActivity && filteredActivity.forecast) {
      setActivity(filteredActivity);
      modal.current.open();
      return;
    }
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay" className="w-full max-w-lg ">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Weather Forecast
        </h2>
        {/* <p className="text-stone-600 mb-4">{errorMessage}</p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid activity details.
        </p> */}
        {activity && activity.forecast.details.length > 0 ? (
          activity.forecast.details.map(
            ({ time, condition, description, temp, humidity }) => {
              const dateObj = new Date(time);
              const formattedTime = dateObj.toLocaleString("en-US", {
                weekday: "short",
                hour: "2-digit",
                minute: "2-digit",
              });

              return (
                <Forecast
                  key={time}
                  formattedTime={formattedTime}
                  description={description}
                  temp={temp}
                  humidity={humidity}
                  condition={condition}
                  className="mb-2"
                />
              );
            }
          )
        ) : (
          <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-yellow-100 shadow-sm my-4">
            <p className="text-sm text-stone-700">
              No forecast data available for the selected time range.
            </p>
            <p className="text-xs text-stone-500">
              ⚠️ Forecast data is only available for up to 5 days from today.
            </p>
          </div>
        )}
      </Modal>
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Activities</h2>
        <NewActivity onAdd={onAdd} tripDate={tripDate} />
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
                    {activity.startDate} {activity.startTime} →{" "}
                    {activity.endDate} {activity.endTime}
                  </p>
                  {activity.note && (
                    <p className="mt-2 text-sm text-stone-700">
                      {activity.note}
                    </p>
                  )}
                  <Button
                    className="mt-2"
                    onClick={() => showForecast(activity.id)}
                  >
                    View forecast
                  </Button>
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
    </>
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
  tripDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
};

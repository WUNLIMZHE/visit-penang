import { useState, useRef } from "react";
import Button from "./Button";
import NewActivity from "./NewActivity";
import PropTypes from "prop-types";
import Forecast from "./Forecast";
import Modal from "./Modal";
import { forecastSpam } from "../services/utils/validation";
import {
  getForecast,
  buildForecastResponse,
} from "../services/api/weatherServices";
import { filterForecastByDateRange } from "../services/utils/filter";

const Activities = ({ activities, onAdd, onDelete, tripDate }) => {
  const [activity, setActivity] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageHeader, setErrorMessageHeader] = useState("");
  const [forecast, setForecast] = useState({ type: "none", details: [] });

  const warningModal = useRef();
  const modal = useRef();
  const showForecast = (activityId) => {
    const filteredActivity = activities.find((act) => act.id === activityId);
    if (filteredActivity && filteredActivity.forecast) {
      setActivity(filteredActivity);
      modal.current.open();
      return;
    }
  };

  const updateForecast = async (activityId) => {
    const filteredActivity = activities.find((act) => act.id === activityId);
    console.log(filteredActivity);
    if (!filteredActivity) {
      setErrorMessage("Technical error occurred. Please try again.");
      setErrorMessageHeader("Error");
      warningModal.current.open();
      return;
    }
    const activity = filteredActivity;
    // forecast spam check
    const { spam, status, message } = forecastSpam(
      activity.startDate,
      activity.endDate,
      activity.forecast?.details?.length
        ? activity.forecast.details[0].time.split(" ")[0]
        : null,
      activity.forecast?.details?.length
        ? activity.forecast.details[
            activity.forecast.details.length - 1
          ].time.split(" ")[0]
        : null
    );

    // block cases (spam = true)
    if (spam && status !== "trimForecast") {
      setErrorMessageHeader("Forecast Already Checked");
      setErrorMessage(message);
      warningModal.current.open();
      return;
    }

    // trim the forecast data if status = "trimForecast"
    if (status === "trimForecast") {
      // trim existing forecast data to fit new time range
      const filteredForecastData = filterForecastByDateRange(
        forecast.details,
        activity.startDate,
        activity.startTime,
        activity.endDate,
        activity.endTime
      );
      const forecastData = buildForecastResponse(
        activity.startDate,
        activity.endDate,
        filteredForecastData.details
      );
      console.log("Trimmed forecast data:", forecastData);
      // update state
      setForecast(forecastData);
      setErrorMessageHeader("Latest Forecast Data");
      setErrorMessage(
        "The existing forecast data is the latest available for the selected time range."
      );
      warningModal.current.open();
      return;
    }

    try {
      // const { lat, lon } = await getCoordinates(enteredLocation);
      const { lat, lon } = activity.coordinates;
      console.log(`Coordinates: lat=${lat}, lon=${lon}`);
      // 🔑 pass full time range to getForecast
      const forecastData = await getForecast(
        lat,
        lon,
        activity.startDate,
        activity.startTime,
        activity.endDate,
        activity.endTime
      );

      console.log("Forecast data:", forecastData);

      // store structured forecast object in state
      setForecast(forecastData);
      // formModal.current.close();
    } catch (err) {
      // fallback option: allow saving without weather
      setErrorMessage(err.message);
      warningModal.current.open();

      // OR: allow user to confirm saving anyway
      // onAdd({ location: enteredLocation, forecast: null, ... });
    }
  };

  return (
    <>
      <Modal ref={warningModal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          {errorMessageHeader}
        </h2>
        <p className="text-stone-600 mb-4">
          {errorMessage.split("\n").map((line, index) => (
            <span className="mb-4" key={index}>
              {line}
            </span>
          ))}
        </p>
        {/* <p className="text-stone-600 mb-4">
              Please make sure you provide a valid activity details.
            </p> */}
      </Modal>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3   gap-4 mt-8 rounded-md bg-stone-100">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex flex-col md:flex-row md:items-center justify-between 
                 gap-4 p-4 rounded-xl shadow-sm bg-white border border-stone-200"
              >
                <div className="flex-1 h-full flex flex-col justify-between">
                  <div>
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
                  </div>
                  <div>
                    <Button
                      className="mt-2 block"
                      onClick={() => showForecast(activity.id)}
                    >
                      View forecast
                    </Button>
                    <Button
                      className=" text-blue-400 hover:text-blue-200"
                      onClick={() => updateForecast(activity.id)}
                    >
                      Update forecast
                    </Button>
                  </div>
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
              </div>
            ))}
          </div>
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
  tripDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
};

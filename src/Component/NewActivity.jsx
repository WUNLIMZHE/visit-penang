import { useRef, useState } from "react";
import Modal from "./Modal";
import PropTypes from "prop-types";
import Input from "./Input";
import Form from "./Form";
import AutoComplete from "./AutoComplete";
import {
  getForecast,
  buildForecastResponse,
} from "../services/api/weatherServices";
import { validateActivity, forecastSpam } from "../services/utils/validation";
import { filterForecastByDateRange } from "../services/utils/filter";
import locations from "../data/locations";
import Forecast from "./Forecast";

const NewActivity = ({ onAdd, tripDate }) => {
  const warningModal = useRef();
  const formModal = useRef();

  const location = useRef();
  const startDate = useRef();
  const endDate = useRef();
  const startTime = useRef();
  const endTime = useRef();
  const [forecast, setForecast] = useState(null);
  const note = useRef();

  const [errorMessageHeader, setErrorMessageHeader] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const [enteredTask, setEnteredTask] = useState("");

  // function handleChange(event) {
  //   setEnteredTask(event.target.value);
  // }
  function validation() {
    const enteredLocation = location.current.value;
    const enteredStartDate = startDate.current.value;
    const enteredEndDate = endDate.current.value;
    const enteredStartTime = startTime.current.value;
    const enteredEndTime = endTime.current.value;

    console.log(`enteredLocation: ${enteredLocation}`);
    console.log(
      `enteredCoordinates: ${JSON.stringify(location.current.coordinates)}`
    );
    const validation = validateActivity({
      location: enteredLocation,
      startDate: enteredStartDate,
      endDate: enteredEndDate,
      startTime: enteredStartTime,
      endTime: enteredEndTime,
      tripDate: tripDate,
    });

    if (!validation.valid) {
      setErrorMessageHeader("Invalid Input");
      setErrorMessage(
        `${validation.message} \nPlease make sure you provide a valid activity details.`
      );
      warningModal.current.open();
      return false;
    }
    return true;
  }

  function handleSubmit() {
    const enteredLocation = location.current.value;
    const enteredStartDate = startDate.current.value;
    const enteredEndDate = endDate.current.value;
    const enteredStartTime = startTime.current.value;
    const enteredEndTime = endTime.current.value;
    const enteredNote = note.current.value;
    const enteredCoordinates = location.current.coordinates;
    const enteredForecast = forecast;

    console.log(`enteredLocation: ${enteredLocation}`);
    console.log(`enteredCoordinates: ${JSON.stringify(enteredCoordinates)}`);
    console.log(`enteredForecast: ${JSON.stringify(enteredForecast)}`);

    // validation
    if (!validation()) {
      return;
    }

    onAdd({
      location: enteredLocation,
      startDate: enteredStartDate,
      endDate: enteredEndDate,
      startTime: enteredStartTime,
      endTime: enteredEndTime,
      note: enteredNote,
      coordinates: enteredCoordinates,
      forecast: enteredForecast,
    });
    // setEnteredTask("");

    // reset form fields
    location.current.reset();
    startDate.current.value = "";
    startTime.current.value = "";
    endDate.current.value = "";
    endTime.current.value = "";
    note.current.value = "";
    setForecast(null);

    formModal.current.close();
  }

  function handleOpenFormSubmit(event) {
    event.preventDefault();
    formModal.current.open();
  }

  async function handleWeatherForecast() {
    console.log(`forecast state before fetch: ${JSON.stringify(forecast)}`);
    console.log(
      `Last forecast date: ${
        forecast?.details?.length
        ? forecast.details[forecast.details.length - 1].time.split(" ")[0]
        : null 
      }`
    );
    console.log("Checking weather forecast...");
    // validation
    if (!validation()) {
      return;
    }

    console.log("Validation passed. Fetching weather...");
    // fetch coordinates
    const enteredCoordinates = location.current.coordinates;
    const enteredStartDate = startDate.current.value;
    const enteredEndDate = endDate.current.value;
    const enteredStartTime = startTime.current.value;
    const enteredEndTime = endTime.current.value;

    // forecast spam check
    const { spam, status, message } = forecastSpam(
      enteredStartDate,
      enteredEndDate,
      forecast?.details?.length
        ? forecast.details[0].time.split(" ")[0]
        : null,
      forecast?.details?.length
        ? forecast.details[forecast.details.length - 1].time.split(" ")[0]
        : null,
      "form"
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
        enteredStartDate,
        enteredStartTime,
        enteredEndDate,
        enteredEndTime
      );
      const forecastData = buildForecastResponse(
        enteredStartDate,
        enteredEndDate,
        filteredForecastData.details
      );
      console.log("Trimmed forecast data:", forecastData);
      // update state
      setForecast(forecastData);
      // update the forecast.type
      // if (enteredEnd)
      // setForecast((prev) => ({ ...prev, type: "partial" }));
    }

    try {
      // const { lat, lon } = await getCoordinates(enteredLocation);
      const { lat, lon } = enteredCoordinates;
      console.log(`Coordinates: lat=${lat}, lon=${lon}`);
      // 🔑 pass full time range to getForecast
      const forecastData = await getForecast(
        lat,
        lon,
        enteredStartDate,
        enteredStartTime,
        enteredEndDate,
        enteredEndTime
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
  }
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
      <Form
        ref={formModal}
        buttonCaption="Add"
        className="w-screen md:w-2/4"
        cancelButton={true}
        handleSubmit={handleSubmit}
      >
        <div className="mt-4">
          <AutoComplete
            type="text"
            label="Location"
            ref={location}
            data={locations}
          />
          {/* <Input type="text" label="Location" ref={location} /> */}
          <p className="text-xs text-stone-500 mt-1">
            💡 Tip: Choose the nearest location / city like <em>Penang Hill</em> or{" "}
            <em>Bayan Lepas </em>
            for better weather forecast results.
          </p>
          <Input type="date" label="Start Date" ref={startDate} />
          <Input type="time" label="Start Time" ref={startTime} />
          <Input type="date" label="End Date" ref={endDate} />
          <Input type="time" label="End Time" ref={endTime} />
          {forecast && forecast.type === "none" && (
            <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-yellow-100 shadow-sm my-4">
              <p className="text-sm text-stone-700">
                No forecast data available for the selected time range.
              </p>
              <p className="text-xs text-stone-500">
                ⚠️ Forecast data is only available for up to 5 days from today.
              </p>
            </div>
          )}
          {forecast && forecast.type !== "none" && (
            <div className="flex flex-col gap-1 my-4">
              <label className="text-sm font-bold uppercase text-stone-500">
                Forecast
              </label>
              {forecast.details.map(
                ({ time, condition, description, temp, humidity }) => {
                  const dateObj = new Date(time);
                  const formattedTime = dateObj.toLocaleString("en-GB", {
                    weekday: "short", // e.g. "Sat"
                    day: "2-digit", // e.g. "04"
                    month: "2-digit", // e.g. "10"
                    year: "numeric", // e.g. "2025"
                    hour: "2-digit", // e.g. "05 PM"
                    minute: "2-digit", // e.g. "30"
                  });

                  return (
                    <Forecast
                      key={time}
                      formattedTime={formattedTime}
                      description={description}
                      temp={temp}
                      humidity={humidity}
                      condition={condition}
                    />
                  );
                }
              )}
              <p className="text-xs text-stone-500 mt-1">
                (Note: Forecast within ±90 mins of your activity time)
              </p>
              <p className="text-xs text-stone-500">
                ⚠️ Forecast data is only available for up to 5 days from today.
              </p>
            </div>
          )}
          <Input label="Note" textarea ref={note} />
          <button
            type="button"
            onClick={handleWeatherForecast}
            className="mt-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 
             text-white font-semibold text-sm rounded-lg shadow-md 
             hover:from-sky-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <span role="img" aria-label="weather">
              🌦️
            </span>
            Check Weather Forecast
          </button>
        </div>
      </Form>
      {/* <div className="flex-nowrap items-center gap-4">
        // {/* <input
        //   type="text"
        //   className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        //   value={enteredActivity}
        //   onChange={handleChange}
        // /> */}
      {/* <Input type="text" label="Location" ref={location} />
        <Input type="date" label="Start Date" ref={startDate} />
        <Input type="time" label="Start Time" ref={startTime} />
        <Input type="date" label="End Date" ref={endDate} />
        <Input type="time" label="End Time" ref={endTime} />
        <Input label="Note" textarea ref={note} />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleClick}
        >
          Add Activity
        </button>
      </div> */}
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleOpenFormSubmit}
      >
        Add Activity
      </button>
    </>
  );
};

export default NewActivity;

NewActivity.propTypes = {
  onAdd: PropTypes.func.isRequired,
  tripDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
};

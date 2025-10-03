import { useRef, useState } from "react";
import Modal from "./Modal";
import PropTypes from "prop-types";
import Input from "./Input";
import Form from "./Form";
import AutoComplete from "./AutoComplete";
import { getForecast } from "../services/api/weatherServices";
import { validateActivity } from "../services/utils/validation";
import locations from "../data/locations";
import Forecast from "./Forecast";

const NewActivity = ({ onAdd }) => {
  const warningModal = useRef();
  const formModal = useRef();

  const location = useRef();
  const startDate = useRef();
  const endDate = useRef();
  const startTime = useRef();
  const endTime = useRef();
  const [forecast, setForecast] = useState(null);
  const note = useRef();

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
    });

    if (!validation.valid) {
      setErrorMessage(validation.message);
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
    location.current.value = "";
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
      setErrorMessage("Location not found. Try a broader name like city/town.");
      warningModal.current.open();

      // OR: allow user to confirm saving anyway
      // onAdd({ location: enteredLocation, forecast: null, ... });
    }
  }
  return (
    <>
      <Modal ref={warningModal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">{errorMessage}</p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid activity details.
        </p>
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
            💡 Tip: Include a general location like <em>Bayan Lepas</em> or{" "}
            <em>Penang </em>
            for better weather forecast results.
          </p>
          <Input type="date" label="Start Date" ref={startDate} />
          <Input type="time" label="Start Time" ref={startTime} />
          <Input type="date" label="End Date" ref={endDate} />
          <Input type="time" label="End Time" ref={endTime} />
          {forecast && forecast.type === "none" && (
            <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-yellow-100 shadow-sm my-4">
              <p className="text-sm text-stone-700">No forecast data available for the selected time range.</p>   
              <p className="text-xs text-stone-500">
                ⚠️ Forecast data is only available for up to 5 days from today.
              </p>
            </div>
          )}
          {forecast && forecast.type !== "none" &&(
            <div className="flex flex-col gap-1 my-4">
              <label className="text-sm font-bold uppercase text-stone-500">
                Forecast
              </label>
              {forecast.details.map(
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
};

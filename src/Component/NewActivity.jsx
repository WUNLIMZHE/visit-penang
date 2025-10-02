import { useRef, useState } from "react";
import Modal from "./Modal";
import PropTypes from "prop-types";
import Input from "./Input";
import Form from "./Form";

const NewAcitvity = ({ onAdd }) => {
  const warningModal = useRef();
  const formModal = useRef();

  const location = useRef();
  const startDate = useRef();
  const endDate = useRef();
  const startTime = useRef();
  const endTime = useRef();
  const note = useRef();

  const [errorMessage, setErrorMessage] = useState("");

  // const [enteredTask, setEnteredTask] = useState("");

  // function handleChange(event) {
  //   setEnteredTask(event.target.value);
  // }

  function handleSubmit() {
    const enteredLocation = location.current.value;
    const enteredStartDate = startDate.current.value;
    const enteredEndDate = endDate.current.value;
    const enteredStartTime = startTime.current.value;
    const enteredEndTime = endTime.current.value;
    const enteredNote = note.current.value;

    if (
      enteredLocation.trim() === "" ||
      enteredStartDate.trim() === "" ||
      enteredEndDate.trim() === "" ||
      enteredStartTime.trim() === "" ||
      enteredEndTime.trim() === ""
    ) {
      // show the error modal
      setErrorMessage("Oops ... looks like you forgot to enter a value.");
      warningModal.current.open();
      return;
    }

    // date validation ...
    if (new Date(enteredStartDate) > new Date(enteredEndDate)) {
      setErrorMessage("Start date cannot be later than end date.");
      warningModal.current.open();
      return;
    }

    // time validation ...
    if (
      enteredStartDate === enteredEndDate &&
      enteredStartTime >= enteredEndTime
    ) {
      setErrorMessage(
        "For the same day, start time cannot be later than or equal to end time."
      );
      warningModal.current.open();
      return;
    }

    onAdd({
      location: enteredLocation,
      startDate: enteredStartDate,
      endDate: enteredEndDate,
      startTime: enteredStartTime,
      endTime: enteredEndTime,
      note: enteredNote,
    });
    // setEnteredTask("");
    formModal.current.close();
  }

  function handleOpenFormSubmit(event) {
    event.preventDefault();
    formModal.current.open();
  }

  function handleWeatherForecast() {
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
          <Input type="text" label="Location" ref={location} />
          <p className="text-xs text-stone-500 mt-1">
            💡 Tip: Include a general location like <em>Bayan Lepas</em> or{" "}
            <em>Penang </em>
            for better weather forecast results.
          </p>
          <Input type="date" label="Start Date" ref={startDate} />
          <Input type="time" label="Start Time" ref={startTime} />
          <Input type="date" label="End Date" ref={endDate} />
          <Input type="time" label="End Time" ref={endTime} />
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

export default NewAcitvity;

NewAcitvity.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

import { useState, useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import PropTypes from "prop-types";
import { validateTrip } from "../services/utils/validation";

const NewTrip = ({ onAdd, onCancel }) => {
  const [errorMessageHeader, setErrorMessageHeader] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const startDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredStartDate = startDate.current.value;

    // if (
    //   enteredTitle.trim() === "" ||
    //   enteredDescription.trim() === "" ||
    //   enteredStartDate.trim() === ""
    // ) {
    //   // show the error modal
    //   modal.current.open();
    //   return;
    // }
    const { valid, message } = validateTrip({
      title: enteredTitle,
      description: enteredDescription,
      startDate: enteredStartDate,
    });

    if (!valid) {
      // show the error modal
      setErrorMessageHeader("Invalid Input");
      setErrorMessage(message);
      modal.current.open();
      return;
    }

    // validation ...
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      startDate: enteredStartDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">{errorMessageHeader}</h2>
        <p className="text-stone-600 mb-4">{errorMessage}</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" label="Title" ref={title} />
          <Input label="Description" textarea ref={description} />
          <Input type="date" label="Start Date" ref={startDate} />
        </div>
      </div>
    </>
  );
};

export default NewTrip;

NewTrip.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
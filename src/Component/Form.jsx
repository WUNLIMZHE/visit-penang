import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

const Form = React.forwardRef(
  ({ children, buttonCaption, className = "", handleSubmit }, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
        close(){
          dialog.current.close();
        }
      };
    });

    return createPortal(
      // <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shodow-md ">
      <dialog
        ref={dialog}
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          p-4 rounded-md shadow-md backdrop:bg-stone-900/90 ${className}`}
      >
        {children}
        {/* <form method="dialog" className="mt-4 text-right">
        {cancelButton && <Button className="mr-5">Cancel</Button>}
        <Button onClick={handleSubmit}>{buttonCaption}</Button>
      </form> */}
        <form className="mt-4 text-right">
          <Button
            type="button"
            className="mr-5"
            onClick={() => dialog.current.close()} // manually close
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {buttonCaption}
          </Button>
        </form>
      </dialog>,
      document.getElementById("modal-root")
    );
  }
);

export default Form;
Form.displayName = "Form";

Form.propTypes = {
  children: PropTypes.node.isRequired,
  buttonCaption: PropTypes.string.isRequired,
  className: PropTypes.string,
  cancelButton: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

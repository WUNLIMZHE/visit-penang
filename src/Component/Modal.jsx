import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

const Modal = React.forwardRef(
  ({ children, buttonCaption, className = "" }, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
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
        <form method="dialog" className="mt-4 text-right">
          <Button>{buttonCaption}</Button>
        </form>
      </dialog>,
      document.getElementById("modal-root")
    );
  }
);

export default Modal;
Modal.displayName = "Modal";

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  buttonCaption: PropTypes.string.isRequired,
  className: PropTypes.string,
  cancelButton: PropTypes.bool,
};

import React from "react";

const Dialog = ({ message, closeDialog }) => {
  return (
    <div className="Dialog">
      <span className="Dialog__message">{message}</span>
      <span onClick={closeDialog} className="Dialog__confirm">
        OK
      </span>
    </div>
  );
};

export default Dialog;

import React from "react";

const Checkbox = ({ name, value, error }) => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        name={name}
        id={name}
      />
      <label
        className="form-check-label"
        htmlFor="checkbox"
        aria-describedby="help"
      >
        <small id="help" className="form-text text-muted">
          I CONFIRM THAT I UNDERSTAND THE PRIVACY POLICY AND CONSENT TO THE
          COLLECTION OF MY INFORMATION.
        </small>
      </label>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Checkbox;

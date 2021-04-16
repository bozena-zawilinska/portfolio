import React from "react";

const Textarea = ({ name, value, onChange, error, placeholder }) => {
  return (
    <div className="md-form">
      <label>Message</label>
      <textarea
        type="text"
        name={name}
        value={value}
        id={name}
        onChange={onChange}
        rows="5"
        placeholder={placeholder}
        className="form-control md-textarea"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Textarea;

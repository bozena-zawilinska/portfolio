import React from "react";

const Input = ({ name, label, value, onChange, error, placeholder, style }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
        style={style}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

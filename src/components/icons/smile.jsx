import React, { Component } from "react";
import { FaSmile } from "react-icons/fa";
import "./smile.css";

class Smile extends Component {
  render() {
    return (
      <div className="bouncy-smile">
        <FaSmile />
      </div>
    );
  }
}

export default Smile;

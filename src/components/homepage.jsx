import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import typing from "../typing.mp4";
import TypingAnimation from "./typingAnimation";
import "../sass/style.scss";

class Homepage extends Component {
  render() {
    return (
      <div id="home-page" className="hero home page">
        <div className="hero-overlay"></div>
        <div className="hero hero-video">
          <video autoPlay loop muted preload data-origin-x="20" data-origin-y="40">
            <source src={typing} type="video/mp4"></source>
          </video>
        </div>
        <div className="hero-video-text">
        
          <h1 className='m-4'>
            <TypingAnimation />
          </h1>
        </div>
          <br />
        <div className="hero-video-btn">
        <NavLink className="btn btn-outline-light m-4" to="/portfolio/about">
          ABOUT ME
        </NavLink>
        <NavLink className="btn btn-outline-light m-4" to="/portfolio/my-work">
          MY WORK
        </NavLink>
        </div>
      </div>
    );
  }
}

export default Homepage;

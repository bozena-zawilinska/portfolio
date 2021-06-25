import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Skills from "./skills";
import LinkedinBackground from "../img/LinkedinBackground.png";
import "../sass/style.scss";

class About extends Component {
  render() {
    return (
      <div className="hero-page page">
          <div id="about-page" className="hero">
            <div className="hero hero-image">
              <img src={LinkedinBackground} alt="" />
            </div>
        </div>
        <div id="about-page" className="container">
          <div id="about-page" className="page">
            <div className="box">
              <div className="row">
                <div className="col align-self-start">
                  <h3 className="h3 mt-3">About me</h3>
                  <hr />
                  <p>
                    I&nbsp;believe that nothing will come of nothing.
                    I&nbsp;love to learn and to challenge myself. I'm
                    a&nbsp;passionate, enthusiastic and multi-talented
                    personality with a desire to&nbsp;help others.
                    <br />
                    Since the beginning of&nbsp;my&nbsp;journey with
                    programming, I&nbsp;knew this is something I&nbsp;want to do
                    until the rest of my life. I've started my business and
                    really enjoyed the time spent on creating my own website.
                    I&nbsp;wanted to&nbsp; know more and&nbsp;learn&nbsp;more.
                    My&nbsp;curiosity grew and led me to the&nbsp;point where
                    I've decided I&nbsp;want to become a&nbsp;professional web
                    developer. Currently I&nbsp;have successfully completed 
                    the Level 6 Diploma in Information Technology and Telecommunications.
                  </p>
                </div>
                <hr />
                <div className="row">
                  <Skills />
                </div>
                <div className="row">
                  <div className="col align-self-start">
                    <h3 className="h3 mt-3">Sounds like a good match?</h3>
                    <hr />
                    <p>
                      Now that you know me a little, feel free to reach out. I
                      look forward to hearing from you.
                    </p>
                    <a
                      className="btn btn-outline-dark"
                      href="/contact"
                      role="button"
                    >
                      <NavLink className="nav-link" to="/portfolio/contact">
                        CONTACT ME
                      </NavLink>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

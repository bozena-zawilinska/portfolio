import React, { Component } from "react";
import ContactForm from "./contactForm";
import linkedin from "./icons/linkedin.svg";
import github from "./icons/github.svg";
import facebook from "./icons/facebook.svg";
import meContactPage from "../img/meContactPage.png";
import "../sass/style.scss";

class ContactMe extends Component {
  render() {
    return (
      <div className="page">
        <div>
          <div id="contact-page" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero hero-image">
              <img src={meContactPage} alt="" />
            </div>
            <div className="hero-image-text">
              <h3>
                Want to get in touch?
                <br />
                I'd love to hear from you.
              </h3>
            </div>
          </div>
        </div>
        <div id="contact-page" className="container">
          <div id="contact-page" className="page">
            
            <div id="contact-page" className="box">
              <div className="row">
                <h3>
                  Send me a message and I will reply to you as soon as possible.
                  <hr />
                </h3>
                <div className="col-sm-8">
                  <ContactForm />
                </div>
                <div className="col-sm-4">
                  <h4>
                    <br />
                    Bozena&nbsp;Zawilinska{" "}
                  </h4>
                  <p>
                    <a
                      href="mailto:zawilinska86@gmail.com?Subject=Hello%20again"
                      target="_top"
                    >
                      zawilinska86@gmail.com
                    </a>
                  </p>
                  <h5>
                    Connect&nbsp;with&nbsp;me
                    on&nbsp;my&nbsp;social&nbsp;profiles
                  </h5>
                  <figure className="icon">
                    <a
                      href="https://www.linkedin.com/in/zawilinska/"
                      target="_blank"
                    >
                      <img
                        className="is-skill-icon"
                        src={linkedin}
                        alt="linkedin"
                        id="contact-me-icon"
                      />
                    </a>
                    <a
                      href="https://github.com/bozena-zawilinska"
                      target="_blank"
                    >
                      <img
                        className="is-skill-icon"
                        src={github}
                        alt="github"
                        id="contact-me-icon"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100005059635472"
                      target="_blank"
                    >
                      <img
                        className="is-skill-icon"
                        src={facebook}
                        alt="facebook"
                        id="contact-me-icon"
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;

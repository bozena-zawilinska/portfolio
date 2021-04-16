import React, { Component } from "react";
import KamilGroblewskiBanner from "../img/KamilGroblewskiBanner.png";
import BozenkaArtBanner from "../img/BozenkaArtBanner.png";
import IndelleDTBanner from "../img/IndelleDTBanner.png";

class LogoDesign extends Component {
  render() {
    return (
      <div id="logo-design" >
        <div className="row">
          <div className="col align-self-start">
            <p className="subtitle">
              First impressions matter, that's why a logo and a business name is
              an absolutely critical part of a company's brand. I love to come
              up with business name ideas and design logos for my clients.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="flex-container">
            <div className="col">
              <a
                href={KamilGroblewskiBanner}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="img">
                  <img
                    src={KamilGroblewskiBanner}
                    alt=""
                    className="img-thumbnail"
                  />
                </div>
                    <h4 className="w-title">Kamil Groblewski</h4>
                    <p>Building and Renovation Services</p>
              </a>
            </div>
            <div className="col">
              <a
                href={BozenkaArtBanner}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="img">
                  <img
                    src={BozenkaArtBanner}
                    alt=""
                    className="img-thumbnail"
                  />
                </div>

                    <h4 className="w-title">Bozenka Art</h4>
                    <p>Decoupage&nbsp;Artist</p>
              </a>
            </div>
            <div className="col">
              <a
                href={IndelleDTBanner}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="img">
                  <img src={IndelleDTBanner} alt="" className="img-thumbnail" />
                </div>
                    <h4 className="w-title">Indelle</h4>
                    <p>Design&nbsp;Team</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogoDesign;

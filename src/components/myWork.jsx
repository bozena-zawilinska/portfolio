import React, { Component } from "react";
import myIndelle from "../img/myIndelle.png";
import BoshenaPortfolio from "../img/BoshenaPortfolio.png";
import LogoDesign from "./logoDesign";
import GraphicDesign from "./graphicDesign";
import "../sass/style.scss";
// import "./js/collapsible";
// import $ from 'jquery';

class MyWork extends Component {
  componentDidMount() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div id="work-page" className="page">
          <div className="box">
            <div id="work-box" className="col align-self-start">
              <h3 className="h3 mt-3">My work</h3>
              <hr />
              <p>
                I'm currently working as a WordPress Developer for a marketing agency, where I had a chance to build awesome websites for Scottish organisations. Here are some of them:
                <ul>
                  <li><a href="https://cerebralpalsyscotland.org.uk/" target="_blank">Cerebral Palsy Scotland</a></li>
                  <li><a href="https://dwsc-research.org" target="_blank">Decent Work in Social Care</a></li>
                  <li><a href="https://environmentalkeyfund.com" target="_blank">Environmental Key Fund</a></li>
                  <li><a href="https://justenterprise.org/landing-page/" target="_blank">Just Enterprise</a></li>
                  <li><a href="https://children.nhslothian.scot" target="_blank">NHS Lothian</a></li>
                  <li><a href="https://knowledgeequity.org" target="_blank">The Centre for Knowledge Equity</a></li>
                </ul>
              </p>
            </div>
            <div className="col align-self-start">
              <div className="row">
                <button className="collapsible">
                  <h3 className="h3 mt-3">Web Development</h3>
                </button>
                <div class="coll-content">
                  <img
                    src={BoshenaPortfolio}
                    id="work"
                    className="img-fluid z-depth-1-half"
                    alt=""
                  />
                  <p className="subtitle">
                    This website was built with React. <br />Browse it throughout or see
                    my repository on GitHub to explore some of my skills.{" "}
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/bozena-zawilinska/portfolio.git"
                    className="btn btn-outline-dark"
                    role="button"
                  >
                    View GitHub
                    <i className="far fa-image ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="col align-self-start">
              <div className="row">
                <button className="collapsible">
                  <h3 className="h3 mt-3">Web Design</h3>
                </button>
                <div class="coll-content">
                  {/* <h3 className="h3 mt-3">Web Design</h3> */}
                  <p>
                    <img
                      src={myIndelle}
                      id="work"
                      className="img-fluid z-depth-1-half"
                      alt=""
                    />
                  </p>
                  <p className="subtitle">
                    I've created and maintained this WordPress website since 2015.
                    The website features Multi-Channel eCommerce Platform, which
                    is linked to eBay, Amazon and Facebook stores.
                  </p>
                  <p className="subtitle">
                    Product pictures and banners are of my authorship.
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.indelle.com/"
                    className="btn btn-outline-dark"
                    role="button"
                  >
                    Live Demo
                    <i className="far fa-image ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="col align-self-start">
              <div className="row">
                <button className="collapsible">
                  <h3 className="h3 mt-3">Logo Design</h3>
                </button>
                <div class="coll-content"><LogoDesign /></div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="col align-self-start">
              <div className="row">
                <button className="collapsible">
                  <h3 className="h3 mt-3">Graphic Design</h3>
                </button>
                <div class="coll-content"><GraphicDesign /></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default MyWork;

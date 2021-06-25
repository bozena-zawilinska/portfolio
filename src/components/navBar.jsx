import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";
import "../sass/style.scss";
import "./js/scroll";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentDidMount() {
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        // document.getElementById("logo").style.display = 'flex';
      } else {
        document.getElementById("navbar").style.top = '-60px';
        // document.getElementById("logo").style.display = 'none';
      }
      prevScrollpos = currentScrollPos;
    } 
  }

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <div className="site-header">
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="site-title">
            <a id="logo" className="navbar-brand" href="https://bozena-zawilinska.github.io/portfolio/">
              <img src={logo} alt="" />
            </a>
          </div>

          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${classOne}`} id="navbarResponsive">
            <div className="header-main">
              <ul className="navbar-nav">
                {/* <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/portfolio"
                    onClick={this.toggleNavbar}
                  >
                    HOME
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/portfolio/about"
                    onClick={this.toggleNavbar}
                  >
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/portfolio/accessibility"
                    onClick={this.toggleNavbar}
                  >
                    ACCESSIBILITY
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={"/portfolio/contact"}
                    onClick={this.toggleNavbar}
                  >
                    CONTACT&nbsp;ME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/portfolio/my-work"
                    onClick={this.toggleNavbar}
                  >
                    MY&nbsp;WORK
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
         
        </nav>
      </div>
    );
  }
}

export default NavBar;

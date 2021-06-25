import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import NavBar from "./components/navBar";
import FooterPage from "./components/footer";
import Homepage from "./components/homepage";
import About from "./components/about.jsx";
import MyWork from "./components/myWork";
import ContactMe from "./components/contactMe";
import Accessibility from "./components/accessibility";
import NotFound from "./components/notFound";
import "./sass/style.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div class="site-container">
          <NavBar />
          <Switch>
            <Route path="/portfolio/about" component={About} />
            <Route path="/portfolio/my-work" component={MyWork} />
            <Route path="/portfolio/contact" component={ContactMe} />
            <Route path="/portfolio/accessibility" component={Accessibility} />
            <Route path="/portfolio/not-found" component={NotFound} />
            <Route path="" component={Homepage} />
            <Redirect from="/portfolio/" exact to="" />
            <Redirect to="/portfolio/not-found" />
          </Switch>
          <FooterPage />
        </div>
      </Router>
    );
  }
}

export default App;

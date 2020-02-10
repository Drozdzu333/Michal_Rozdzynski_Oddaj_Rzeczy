import React, { Component } from "react";
// import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class TopMenu extends Component {
  render() {
    return (
      <div className="topMenu container">
        <div className="loginBox">
          <Link to="/login" className="loginBtn">
            Zaloguj
          </Link>
          <Link to="/register" className="registerBtn">
            Załóż konto
          </Link>
        </div>
        <nav>
          <Link to="/">Start</Link>
          <Link to="info" smooth={true} offset={-70} duration={500}>
            O co chodzi?
          </Link>
          <Link to="/about-us">O nas</Link>
          <Link to="/fundation">Fundacja i organizacje</Link>
          <Link to="/contact">Kontakt</Link>
        </nav>
      </div>
    );
  }
}
export default TopMenu;

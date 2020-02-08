import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <Link to="/info">O co chodzi?</Link>
          <Link to="/about-us">O nas</Link>
          <Link to="/fundation">Fundacja i organizacje</Link>
          <Link to="/contact">Kontakt</Link>
        </nav>
      </div>
    );
  }
}
export default TopMenu;

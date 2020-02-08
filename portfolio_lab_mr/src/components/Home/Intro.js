import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import decoration_svg from "../variables";

class Intro extends Component {
  render() {
    return (
      <header>
        <div className="headerImg"></div>
        <div className="intro">
          <div className="title">
            <h1>Zacznij pomagać!</h1>
            <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
            <img src={decoration_svg} />
          </div>
          <div className="title-btns">
            <div>
              <Link to="/login">
                <h2>ODDAJ</h2>
                <h2>RZECZY</h2>
              </Link>
            </div>
            <div>
              <h2>ZORGANIZUJ</h2>
              <h2>ZBIURKĘ</h2>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Intro;

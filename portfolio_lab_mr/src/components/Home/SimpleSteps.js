import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import decoration_svg from "../variables";
import Icon1 from "./../../assets/Icon-1.svg";
import Icon2 from "./../../assets/Icon-2.svg";
import Icon3 from "./../../assets/Icon-3.svg";
import Icon4 from "./../../assets/Icon-4.svg";

class SimpleSteps extends Component {
  render() {
    return (
      <section className="simpleSteps">
        <div className="simpleSteps_title">
          <h2>Wystarczą 4 proste kroki</h2>
          <img src={decoration_svg} />
        </div>
        <div className="simpleSteps_list">
          <div className="container">
            <div>
              <img src={Icon1}></img>
              <h3>Wybierz rzeczy</h3>
              <p>ubrania, zabawki, sprzęty i inne</p>
            </div>
            <div>
              <img src={Icon2}></img>
              <h3>Spakuj je</h3>
              <p>skorzystaj z worków na śmieci</p>
            </div>
            <div>
              <img src={Icon3}></img>
              <h3>Zdecyduj komu chcesz pomóc</h3>
              <p>wybierz zaufane miejsce</p>
            </div>
            <div>
              <img src={Icon4}></img>
              <h3>Zamów kuriera</h3>
              <p>kurier podjedzie w dogodnym terminie</p>
            </div>
          </div>
        </div>
        <div className="simpleSteps_giveBtn">
          <button>Oddaj rzeczy</button>
        </div>
      </section>
    );
  }
}
export default SimpleSteps;

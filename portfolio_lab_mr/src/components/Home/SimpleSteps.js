import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { decoration_svg, Icon1, Icon2, Icon3, Icon4 } from "../variables";

class SimpleSteps extends Component {
  render() {
    return (
      <section className="simpleSteps">
        <div className="simpleSteps_title">
          <h2>Wystarczą 4 proste kroki</h2>
          <img src={decoration_svg} alt="DecorationBar.svg" />
        </div>
        <div className="simpleSteps_list">
          <div className="container">
            <div>
              <img src={Icon1} alt="Icon1 T-shirt"></img>
              <h3>Wybierz rzeczy</h3>
              <p>ubrania, zabawki, sprzęty i inne</p>
            </div>
            <div>
              <img src={Icon2} alt="Icon2 Bag"></img>
              <h3>Spakuj je</h3>
              <p>skorzystaj z worków na śmieci</p>
            </div>
            <div>
              <img src={Icon3} alt="Icon3 Loupe"></img>
              <h3>Zdecyduj komu chcesz pomóc</h3>
              <p>wybierz zaufane miejsce</p>
            </div>
            <div>
              <img src={Icon4} alt="Icon4 loadingArrows"></img>
              <h3>Zamów kuriera</h3>
              <p>kurier podjedzie w dogodnym terminie</p>
            </div>
          </div>
        </div>
        <div className="simpleSteps_giveBtn defBtns">
          <Link to="/login">
            <h2>Oddaj</h2>
            <h2>rzeczy</h2>
          </Link>
        </div>
      </section>
    );
  }
}
export default SimpleSteps;

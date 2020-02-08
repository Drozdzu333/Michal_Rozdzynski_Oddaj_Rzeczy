import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

class ThreeColums extends Component {
  state = {
    devotedCast: 10,
    supportedOrganization: 5,
    quantityCollection: 7
  };
  render() {
    const {
      devotedCast,
      supportedOrganization,
      quantityCollection
    } = this.state;
    return (
      <section className="threeColums">
        <div className="container">
          <div className="threeColumn_column">
            <h2>{devotedCast}</h2>
            <h3>ODDANYCH WORKÓW</h3>
            <p>
              Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś
              człowieka rodu, obyczajów! Dość, że on znowu fajt w drobne
              strączki białe dziwnie ozdabiał.
            </p>
          </div>
          <div className="threeColumn_column">
            <h2>{supportedOrganization}</h2>
            <h3>WSPARTYCH ORGANIZACJI</h3>
            <p>
              Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś
              człowieka rodu, obyczajów! Dość, że on znowu fajt w drobne
              strączki białe dziwnie ozdabiał.
            </p>
          </div>
          <div className="threeColumn_column">
            <h2>{quantityCollection}</h2>
            <h3>ZORGANIZOWANYCH ZBIÓREK</h3>
            <p>
              Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś
              człowieka rodu, obyczajów! Dość, że on znowu fajt w drobne
              strączki białe dziwnie ozdabiał.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default ThreeColums;

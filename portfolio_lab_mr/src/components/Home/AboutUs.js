import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { decoration_svg, signature } from "../variables";

class AboutUs extends Component {
  render() {
    return (
      <section className="aboutUs">
        <div className="container">
          <h2>O nas</h2>
          <img src={decoration_svg} />
          <p>
            Lorem ipsum dolor sit amet augue eu scelerisque eu, semper lobortis.
            In hac habitasse platea dictumst. Quisque at libero. Aenean ut pede.
            Integer metus convallis aliquam ut, pulvinar ut, porta.
          </p>
          <div className="signature">
            <img src={signature} />
          </div>
        </div>

        <div className="aboutUs-img" />
      </section>
    );
  }
}
export default AboutUs;

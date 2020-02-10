import React, { Component } from "react";
import * as Scroll from "react-scroll";
import {
  LinkScroll,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import Intro from "./Intro";
import ThreeColums from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Intro />
        <ThreeColums />
        <SimpleSteps name="info" id="info" />
        <AboutUs />
      </div>
    );
  }
}

export default Home;

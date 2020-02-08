import React, { Component } from "react";
import Intro from "./Intro";
import ThreeColums from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Intro />
        <ThreeColums />
        <SimpleSteps />
      </div>
    );
  }
}

export default Home;

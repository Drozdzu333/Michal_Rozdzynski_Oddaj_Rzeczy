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
import Local from "./Local";
import Organizations from "./Organizations";
import Fundations from "./Fundations";

class WhoWeHelp extends Component {
  render() {
    return (
      <div className="whoWeHelp">
        <Organizations />
        <Local />
        <Fundations />
      </div>
    );
  }
}

export default WhoWeHelp;

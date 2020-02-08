import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

class Form extends Component {
  render() {
    return (
      <>
        <h2>Furmularz</h2>
        <Link to="/">
          <h3>Main</h3>
        </Link>
      </>
    );
  }
}
export default Form;

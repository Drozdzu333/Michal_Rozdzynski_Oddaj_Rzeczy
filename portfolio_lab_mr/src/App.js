import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import TopMenu from "./components/Header";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      <TopMenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </Switch>
    </Router>
  );
}

import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { decoration_svg } from "../variables";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  onChanhe = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <section className="login">
        <div className="container loginMenu">
          <h2>Zaloguj się</h2>
          <span></span>
          <img src={decoration_svg} />
          <form>
            Email
            <input name="email" value={this.email} onChange={this.onChanhe} />
            Hasło
            <input
              name="password"
              value={this.password}
              onChange={this.onChanhe}
            />
          </form>

          <div className="loginBtns">
            <button name="CreateAccont">Załóż konto</button>
            <button name="logon">Zaloguj</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;

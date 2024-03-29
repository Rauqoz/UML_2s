import React from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./Form";

class Nav extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">Bienvenido !</a>
            </div>
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <a className="nav-link" href="/form">
                  Form
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/form" component={Form} />
        </Switch>
      </Router>
    );
  }
}

export default Nav;

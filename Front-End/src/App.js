import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Nav from "./Components/Admin/Nav";
import Register from "./Components/Register";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/navAdmin" component={Nav} />
        </Switch>
      </Router>
    );
  }
}

export default App;

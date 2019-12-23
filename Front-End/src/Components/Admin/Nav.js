import React from "react";
import "../../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bienvenida from "./Bienvenida";
import Perfil from "../Perfil";

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
                <a className="nav-link" href="/navAdmin/perfil">
                  Perfil
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="">
                  Usuarios
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="">
                  Inventario
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="">
                  Contactos
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="">
                  Cursos
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="">
                  Pagos
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="">
                  Presupuesto
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="">
                  Noticias
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="">
                  Actividades
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Cerrar Session
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/navAdmin" exact component={Bienvenida} />
          <Route path="/navAdmin/perfil" component={Perfil} />
        </Switch>
      </Router>
    );
  }
}

export default Nav;

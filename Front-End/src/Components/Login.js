import React from "react";
import "../App.css";
import axios from "axios";

class Login extends React.Component {
  state = {
    datos: {}
  };
  entrar = () => {
    axios
      .post("http://localhost:4000/login", {
        nick: this.refs.nick.value,
        pass: this.refs.pass.value,
        tipo: this.refs.tipo.value
      })
      .then(res => {
        this.refs.nick.value = "";
        this.refs.pass.value = "";
        if (res.data === false) {
          alert("Usuario no Existe");
        } else {
          this.state.datos = res.data;
          alert("Bienvenido " + res.data.name);
          if (res.data.tipo === "admin") {
            window.location = "/navAdmin";
          } else if (res.data.tipo === "estudiante") {
          } else if (res.data.tipo === "catedratico") {
          } else if (res.data.tipo === "colaborador") {
          }
        }
      });
  };

  registrar = () => {
    window.location = "/register";
  };

  render() {
    return (
      <div className=" App-header">
        <div className=" App-titulo">
          <label>Bienvenido</label>
        </div>
        <div className="text-center">
          <label>Usuario</label>
          <input
            className="form-control"
            type="text"
            ref="nick"
            placeholder="Ingresa Usuario"
          />
          <label>Contraseña</label>
          <input
            className="form-control"
            type="password"
            ref="pass"
            placeholder="Ingresa Contraseña"
          />
          <label>Tipo Usuario</label>
          <select className="form-control" ref="tipo">
            <option value="estudiante">Estudiante</option>
            <option value="catedratico">Catedratico</option>
            <option value="colaborador">Colaborador</option>
          </select>
        </div>
        <br />
        <div>
          <button className=" btn-lg btn-danger" onClick={this.registrar}>
            Registrar
          </button>
          <button className=" btn-lg btn-success" onClick={this.entrar}>
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

export default Login;

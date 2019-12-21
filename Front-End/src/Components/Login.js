import React from "react";
import "../App.css";

class Login extends React.Component {
  entrar = () => {
    if (this.refs.user.value === "" || this.refs.pass.value === "") {
      alert("Faltan Datos ");
    } else {
      if (
        this.refs.user.value === "admin" ||
        this.refs.pass.value === "admin"
      ) {
        alert("Si");
        window.location = "/navAdmin";
      } else {
      }
    }
  };

  state = {
    h: "hola data"
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
            ref="user"
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
          <br />
          <select className="form-control" ref="tipo">
            <option value="estudiante">Estudiante</option>
            <option value="catedratico">Catedratico</option>
            <option value="colaborador">Colaborador</option>
          </select>
        </div>
        <br />
        <div>
          <button className=" btn-lg btn-danger">Registrar</button>
          <button className=" btn-lg btn-success" onClick={this.entrar}>
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

export default Login;

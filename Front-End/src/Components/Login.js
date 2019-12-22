import React from "react";
import "../App.css";
import axios from "axios";

class Login extends React.Component {
  entrar = () => {
    if (this.refs.user.value === "" || this.refs.pass.value === "") {
      alert("Faltan Datos");
    } else {
      /*  axios
        .get("http://localhost:4400/")
        .then(res => {
          console.log(
            "En la Base: " + res.data.root.user + " pass " + res.data.root.pass
          );
          if (
            this.refs.user.value === res.data.root.user &&
            this.refs.pass.value === res.data.root.pass
          ) {
            alert("Bienvenido");
            window.location = "/navAdmin";
          } else {
            alert("Datos Erroneos");
          }
        })
        .catch(console.log); */
    }
  };

  registrar = () => {
    if (this.refs.user.value === "" || this.refs.pass.value === "") {
      alert("Faltan Datos");
    } else {
      axios
        .post("http://localhost:4400/", {
          user: this.refs.user.value,
          pass: this.refs.pass.value
        })
        .then(res => {
          console.log("Todo Bien");
        });
    }
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

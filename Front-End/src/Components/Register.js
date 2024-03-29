import React from "react";
import "../App.css";
import axios from "axios";

class Register extends React.Component {
  paraDias = [];
  paraMes = [];
  paraAño = [];

  login = () => {
    window.location = "/";
  };

  registrar = () => {
    if (
      this.refs.name.value === "" ||
      this.refs.telefono.value === "" ||
      this.refs.correo.value === "" ||
      this.refs.universidad.value === "" ||
      this.refs.nick.value === "" ||
      this.refs.pass.value === "" ||
      this.refs.nacionalidad.value === ""
    ) {
      alert("Campos Vacios");
    } else {
      axios
        .post("http://localhost:4000/register", {
          name: this.refs.name.value,
          dia: this.refs.dia.value,
          mes: this.refs.mes.value,
          año: this.refs.año.value,
          telefono: this.refs.telefono.value,
          correo: this.refs.correo.value,
          universidad: this.refs.universidad.value,
          nick: this.refs.nick.value,
          pass: this.refs.pass.value,
          nacionalidad: this.refs.nacionalidad.value,
          tipo: this.refs.tipo.value
        })
        .then(res => {
          alert("Registrado");
          window.location = "/";
        });
    }
  };

  cargaFechas = () => {
    for (let index = 0; index < 31; index++) {
      this.paraDias.push(<option value={index + 1}>{index + 1}</option>);
    }
    for (let index = 0; index < 12; index++) {
      this.paraMes.push(<option value={index + 1}>{index + 1}</option>);
    }
    for (let index = 2000; index < 2019; index++) {
      this.paraAño.push(<option value={index + 1}>{index + 1}</option>);
    }
  };

  render() {
    this.cargaFechas();
    return (
      <div className=" App-header">
        <div className=" App-titulo">
          <label>Registrate</label>
        </div>
        <div className="text-center">
          <label>Nombre</label>
          <input
            className="form-control"
            type="text"
            ref="name"
            placeholder="Ingresa Nombre"
          />
          <label>Fecha Nacimiento</label>
          <div className="container">
            <label className="form-control-lg">Dia</label>
            <select className="form-control-sm" ref="dia">
              {this.paraDias}
            </select>
            <label className="form-control-lg">Mes</label>
            <select className="form-control-sm" ref="mes">
              {this.paraMes}
            </select>
            <label className="form-control-lg">Año</label>
            <select className="form-control-sm" ref="año">
              {this.paraAño}
            </select>
          </div>
          <label>Telefono</label>
          <input
            className="form-control"
            type="text"
            ref="telefono"
            placeholder="Ingresa Telefono"
          />
          <label>Correo</label>
          <input
            className="form-control"
            type="text"
            ref="correo"
            placeholder="Ingresa Correo"
          />
          <label>Universidad</label>
          <input
            className="form-control"
            type="text"
            ref="universidad"
            placeholder="Ingresa universidad"
          />
          <label>Nickname</label>
          <input
            className="form-control"
            type="text"
            ref="nick"
            placeholder="Ingresa Nickname"
          />
          <label>Contraseña</label>
          <input
            className="form-control"
            type="text"
            ref="pass"
            placeholder="Ingresa Contraseña"
          />
          <label>Nacionalidad</label>
          <input
            className="form-control"
            type="text"
            ref="nacionalidad"
            placeholder="Ingresa Nacionalidad"
          />
          <label>Tipo Usuario</label>
          <select className="form-control" ref="tipo">
            <option value="estudiante">Estudiante</option>
            <option value="catedratico">Catedratico</option>
          </select>
        </div>
        <br />
        <div>
          <button className=" btn-lg btn-danger" onClick={this.login}>
            Poseo una Cuenta!
          </button>
          <button className=" btn-lg btn-success" onClick={this.registrar}>
            Registrar
          </button>
        </div>
      </div>
    );
  }
}

export default Register;

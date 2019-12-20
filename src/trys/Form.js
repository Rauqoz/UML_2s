import React from "react";
import "../App.css";
require("react-bootstrap");

class Form extends React.Component {
  mostrar = () => {
    alert(this.refs.name.value);
    this.refs.name.value = "";
  };

  render() {
    return (
      <div className=" App-header">
        <div>
          <label>Ingresa tu Name o Puto</label>
        </div>
        <input type="text" ref="name" />
        <button className=" btn btn-danger" onClick={this.mostrar}>
          Mostrar
        </button>
      </div>
    );
  }
}

export default Form;

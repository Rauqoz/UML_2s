const express = require("express");
const server = express();
const cors = require("cors");
var vid_user = 0;
var dinamic = {
  usuarios: [
    {
      id_user: "0",
      name: "admin",
      fecha: {
        dia: "0",
        mes: "0",
        año: "0"
      },
      telefono: "0",
      correo: "0",
      universidad: "0",
      tipo: "admin",
      nick: "admin",
      pass: "nick",
      nacionalidad: "0"
    }
  ]
};

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send(dinamic.usuarios);
});

server.post("/login", (req, res) => {
  ingreso = false;

  if (req.body.nick === "admin" && req.body.pass === "admin") {
    res.send(dinamic.usuarios[0]);
  } else {
    for (let index = 0; index < dinamic.usuarios.length; index++) {
      const element = dinamic.usuarios[index];
      if (
        req.body.nick === element.nick &&
        req.body.pass === element.pass &&
        req.body.tipo === element.tipo
      ) {
        ingreso = true;
        res.send(element);
        break;
      }
    }
    if (ingreso === false) {
      res.send(false);
    }
  }
});

server.post("/register", (req, res) => {
  vid_user + 1;
  dinamic.usuarios.push({
    id_user: vid_user,
    name: req.body.name,
    fecha: { dia: req.body.dia, mes: req.body.mes, año: req.body.año },
    telefono: req.body.telefono,
    correo: req.body.correo,
    universidad: req.body.universidad,
    nick: req.body.nick,
    pass: req.body.pass,
    nacionalidad: req.body.nacionalidad,
    tipo: req.body.tipo
  });
  res.json("Recibido");
});

/* entrar = () => {
  if (this.refs.user.value === "" || this.refs.pass.value === "") {
    alert("Faltan Datos");
  } else {
    axios
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
      .catch(console.log);
  }
};
 */

server.listen(4000, () => {
  console.log("Back-End Activo");
});

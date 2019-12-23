const express = require("express");
const server = express();
const cors = require("cors");
var contadorId_user = 0;
var dinamic = {
  usuarios: [
    {
      id_user: "0",
      name: "admin",
      fecha: {
        dia: "1",
        mes: "1",
        año: "2019"
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
var perfil;

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send(dinamic.usuarios);
});

server.get("/perfil", (req, res) => {
  res.send(perfil);
});

server.post("/login", (req, res) => {
  ingreso = false;

  if (req.body.nick === "admin" && req.body.pass === "admin") {
    res.send(dinamic.usuarios[0]);
    perfil = dinamic.usuarios[0];
  } else {
    for (let index = 0; index < dinamic.usuarios.length; index++) {
      const element = dinamic.usuarios[index];
      if (
        req.body.nick === element.nick &&
        req.body.pass === element.pass &&
        req.body.tipo === element.tipo
      ) {
        ingreso = true;
        perfil = dinamic.usuarios[index];
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
  contadorId_user++;
  dinamic.usuarios.push({
    id_user: contadorId_user,
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

server.post("/modificar", (req, res) => {
  for (let index = 0; index < dinamic.usuarios.length; index++) {
    const element = dinamic.usuarios[index];
    if (req.body.nick === element.nick) {
      dinamic.usuarios[index].correo = req.body.correo;
      dinamic.usuarios[index].fecha.dia = req.body.dia;
      dinamic.usuarios[index].fecha.mes = req.body.mes;
      dinamic.usuarios[index].fecha.año = req.body.año;
      dinamic.usuarios[index].nacionalidad = req.body.nacionalidad;
      dinamic.usuarios[index].name = req.body.name;
      dinamic.usuarios[index].pass = req.body.pass;
      dinamic.usuarios[index].telefono = req.body.telefono;
      dinamic.usuarios[index].universidad = req.body.universidad;
      res.send(true);
      break;
    }
  }
});

server.listen(4000, () => {
  console.log("Back-End Activo");
});

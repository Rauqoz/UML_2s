const express = require("express");
const server = express();
const cors = require("cors");
var dinamic = {
  usuarios: [{ user: "admin", pass: "admin" }]
};

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  console.log(dinamic.usuarios.length);
  res.send(dinamic);
});

server.post("/", (req, res) => {
  dinamic.usuarios.push({
    user: req.body.user,
    pass: req.body.pass
  });
  res.json("Recibido");
});

server.listen(4400, () => {
  console.log("Back-End Activo");
});

const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

const PUERTO = 3000;

const conexion = mysql.createConnection({
  host: "localhost",
  database: "",
  user: "root",
  password: "",
});

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});

conexion.connect((error) => {
  if (error) throw error;
  console.log("Conexión exitosa a la base de datos");
});

app.get("/", (req, res) => {
  res.send("Prueba tecnica API");
});

//Regresa todas las cosas
app.get("/stuffs", (req, res) => {
  const query = `SELECT * FROM stuffs;`;
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.json(`No hay registros`);
    }
  });
});

//Regresa todas las cosas por un ID
app.get("/stuffs/:id", (req, res) => {
  const { id } = req.params;

  const query = `SELECT * FROM stuffs WHERE id=${id};`;
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.json(`No hay registros`);
    }
  });
});

//Metodo POST para agregar  cosas
app.post("/stuffs/agregar", (req, res) => {
  const usuario = {
    name: req.body.name,
    state: req.body.state,
    quantity: req.body.quantity,
  };

  const query = `INSERT INTO stuffs SET ?`;
  conexion.query(query, usuario, (error) => {
    if (error) return console.error(error.message);

    res.json(`Se insertó correctamente el registro`);
  });
});

//Metodo PUT para actulizar

app.put("/stuffs/editar/:id", (req, res) => {
  const { id } = req.params;
  const { name, state, quantity } = req.body;

  const query = `UPDATE stuffs SET name='${name}', state='${state}', quantity='${quantity}'  WHERE id='${id}';`;
  conexion.query(query, (error) => {
    if (error) return console.error(error.message);

    res.json(`Se actualizó correctamente la cosa`);
  });
});

//Metodo delete para borrar cosas
app.delete("/stuffs/borrar/:id", (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM stuffs WHERE id=${id};`;
  conexion.query(query, (error) => {
    if (error) console.error(error.message);

    res.json(`Se eliminó correctamente el la cosa :)`);
  });
});

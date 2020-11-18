const { Router } = require("express");
const router = Router();
const mysqlConnection = require("../db/mysql");

router.get("/usuarios", (req, res) => {
  mysqlConnection.query("SELECT * FROM usuarios", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err)
    }
  });
});

router.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM usuarios WHERE id =? ",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err) 
      }
    }
  );
});

router.post("/nuevo-usuario", (req, res) => {
  const { nombre_completo, ocupacion, numero, usuario, correo, contrasena } = req.body;

  let datosUsuario = [nombre_completo, ocupacion, numero, usuario, correo, contrasena];

  let nuevoUsuario = `INSERT INTO usuarios(nombre_completo, ocupacion, numero, usuario, correo, contrasena)
                      VALUES(?,?,?,?,?,?)`;
  mysqlConnection.query(nuevoUsuario, datosUsuario, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Usuario creado` });
  });
});

router.put("/usuarios/:id", (req, res) => {
  const { nombre_completo, ocupacion, numero, usuario, correo, contrasena } = req.body;
  const { id } = req.params;
  mysqlConnection.query(
    `UPDATE usuarios SET nombre_completo =?, ocupacion =?, numero =?, usuario =?, correo =?, contrasena =? WHERE id =?`,
    [nombre_completo, ocupacion, numero, usuario, correo, contrasena, id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Usuario actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});

router.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "DELETE FROM usuarios WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Usuario eliminado" });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
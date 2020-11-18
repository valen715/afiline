const { Router } = require("express");
const router = Router();
const mysqlConnection = require("../db/mysql");

router.get("/egresos", (req, res) => {
  mysqlConnection.query("SELECT * FROM egresos", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err) && res.send(err);
    }
  });
});

router.get("/egresos/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM egresos WHERE id =? ",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err) && res.send("Qué hubo");
      }
    }
  );
});

router.post("/nuevo-egreso", (req, res) => {
  const { id_usuario, valor, fecha } = req.body;

  let datosEgreso = [id_usuario, valor, fecha];

  let nuevoEgreso = `INSERT INTO egresos(id_usuario, valor, fecha)
                      VALUES(?,?,?)`;
  mysqlConnection.query(nuevoEgreso, datosEgreso, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Egreso creado` });
  });
});

router.put("/egresos/:id", (req, res) => {
  const { id_usuario, valor, fecha } = req.body;
  const { id } = req.params;
  mysqlConnection.query(
    `UPDATE egresos SET id_usuario =?, valor=?, fecha =? WHERE id = ?`,
    [id_usuario, valor, fecha, id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Egreso actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});

router.delete("/egresos/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "DELETE FROM egresos WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Egreso eliminado" });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;

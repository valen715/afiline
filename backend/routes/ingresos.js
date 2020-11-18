const { Router } = require("express");
const router = Router();
const mysqlConnection = require("../db/mysql");

router.get("/ingresos", (req, res) => {
  mysqlConnection.query("SELECT * FROM ingresos", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err) 
    }
  });
});

router.get("/ingresos/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM ingresos WHERE id =? ",
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

router.post("/nuevo-ingreso", (req, res) => {
  const { id_usuario, valor, fecha } = req.body;

  let datosIngreso = [id_usuario, valor, fecha];

  let nuevoIngreso = `INSERT INTO ingresos(id_usuario, valor, fecha)
                      VALUES(?,?,?)`;
  mysqlConnection.query(nuevoIngreso, datosIngreso, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Ingreso creado` });
  });
});

router.put("/ingresos/:id", (req, res) => {
  const { id_usuario, valor, fecha } = req.body;
  const { id } = req.params;
  mysqlConnection.query(
    `UPDATE ingresos SET id_usuario =?, valor=?, fecha =? WHERE id = ?`,
    [id_usuario, valor, fecha, id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Ingreso actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});

router.delete("/ingresos/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "DELETE FROM ingresos WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Ingreso eliminado" });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
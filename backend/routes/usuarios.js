const { Router }= require('express')
const router = Router()
const fs = require('fs')
const FileUsuarios = fs.readFileSync('./usuarios.json', 'utf-8')
const JSONUsuarios = JSON.parse(FileUsuarios)

console.log(JSONUsuarios)

router.get("/", (req, res) => {
  res.send("API Afiline usuarios")
})
router.get("/usuarios", (req, res)=>{
  res.json(JSONUsuarios)
})
router.post("/usuarios", (req, res) =>{
  console.log("El tamaño es " + JSONUsuarios.length)
  let id = JSONUsuarios.length + 1;

  res.send("Recibido")
});
module.exports = router;
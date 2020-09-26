const express = require('express')
const app = express()

app.get('/Afiline', function(req, res) {

    res.send(`Afiline (Administracón financiera en linea)`);
});
app.listen(5057, function(){
    console.log("Servidor corriendo en el puerto 5057")
});  
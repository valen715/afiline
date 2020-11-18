if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === undefined)
    require('dotenv').config();
    
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()

//Middlewares
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use("/api", require('./routes/egresos'))


app.get('/', (req, res) => {
    res.send('Api CRUD')
})

app.set("ABSOLUTE_PATH", `${__dirname}/`)
app.set('PORT', 8081)

app.listen(app.get("PORT"), () => {
    console.log(`Servidor corriendo en el puerto ${app.get("PORT")}`)
  })
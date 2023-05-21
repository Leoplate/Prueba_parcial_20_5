const express = require('express')
const rutas = require('./demo.routers/router')


const app = express()

const PORT = process.env.PORT | 3000

app.use(express.json())

app.listen(PORT, () => {console.log("WE ARE USING PORT "+PORT)})

app.use('/tareas',rutas)
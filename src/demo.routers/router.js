const express = require('express')

const base = require('../../datos/data.json')
const { tareasAll, tareasID, tareasDelete, tareasIngresar, tareaModificar } = require('../demo.controllers/controllers')


const rutas = express.Router()

rutas.get('/', tareasAll)


rutas.get('/:id', tareasID)


rutas.delete('/:id', tareasDelete)


rutas.post('/', tareasIngresar)


rutas.put('/:id', tareaModificar)



module.exports = rutas
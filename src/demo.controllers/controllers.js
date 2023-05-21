const express = require('express')

const base = require('../../datos/data.json')


const tareasAll = (req, res) => {
    res.status(200).json(base)
}




const tareasID = (req, res) => {
    const idx = req.params.id
        const respu = base.findIndex(dato => dato.id == idx)
        if(respu>=0){
            res.status(200).json(base[respu])
        }else{
            res.status(404).json({"Mensaje": "No existe codigo " + idx})
        }
}


const tareasDelete = (req, res) => {
    const idx = req.params.id
    const respu = base.findIndex(data => data.id == idx)
       if(respu>=0){
          base.splice(respu,1)
          res.status(200).json({"Mensaje":"Se elimino tarea "+idx})
       }else{
          res.status(404).json({"Mensaje":"No existe codigo "+idx})
       }
}


const tareasIngresar = (req, res) => {
    const cuerpo = req.body
    const idx = cuerpo.id
    const tabla = base.map(data => data.id)
    const max = Math.max(...tabla) + 1
         if(cuerpo.nombre.length > 2){
             const dato = {"id": max, "nombre": cuerpo.nombre}
             base.push(dato)
             res.status(201).json({"Mensaje":"Dato ingresado"})
         }else{
           res.status(400).json({"Mensaje":"Nombre demasiado pequeño"})
         }
}


const tareaModificar = (req, res) => {
    const idx = req.params.id
    const cuerpo = req.body
    const respu = base.findIndex(data => data.id == idx) 
       if(respu>=0){
          base[respu].nombre = cuerpo.nombre
          res.status(201).json({"Mensaje":"Se modifico la tarea "+idx})
       }else{
          res.status(404).json({"Mensaje":"No existe codigo "+idx})
       }
}

module.exports = { tareasAll, tareasID, tareasDelete, tareasIngresar, tareaModificar }
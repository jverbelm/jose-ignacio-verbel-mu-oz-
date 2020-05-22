
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tareaSchema = new Schema({
   
    fech_entrega: data,
    prioridad: String,
    nombre: String,
    descripcion: String,
    idUsuario: _id

})
var tarea = mongoose.model("tarea", tareaSchema);
module.exports =  tarea;

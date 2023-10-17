//*File System para modificar el archivo de persistencia
//*requerimos la clase para usar sus métodos
const {Pacientes} = require('../models/pacientesFileSystem.js')
const PacientesFS = new Pacientes();

const {buscarTurnosPaciente} = require('./turnos.js')

const verTodosPac = async()=>{
    const todos = await PacientesFS.getAll()
    return todos
}
const verTurnosPac = async(idMedico, idPac)=>{
    const turnos = await buscarTurnosPaciente(idMedico, idPac)
    return turnos
}

const crearPac = async(nombre, apellido, edad, telefono, email, cobertura, profesionalID)=>{
    const nuevoPac = {nombre, apellido, edad, telefono, email, cobertura, profesionalID}
    const guardado = await PacientesFS.saveNew(nuevoPac)
    return guardado
}

const modificarPac = async()=>{
    
}

const eliminarPac = async()=>{
    
}




module.exports = {verTodosPac, verTurnosPac, crearPac, modificarPac,  eliminarPac}
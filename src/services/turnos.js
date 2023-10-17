
//*File System para modificar el archivo de persistencia
//*requerimos la clase para usar sus métodos
const {Medicos} = require('../models/medicosFileSystem.js')
const MedicosFS = new Medicos();


//*CRUD Turnos
const crearTurno = async(id, fecha, dia, horario, paciente)=>{
const crear = await  MedicosFS.createAppointent(id, fecha, dia, horario, paciente)
}
//crearTurno(3, 25, "miércoles", 16, "Juan");


const buscarTurnoFyH = async(id, fecha, horario)=>{
const turno = await MedicosFS.findAppointment(id, fecha, horario)
console.log(turno)
return turno
}

const buscarTurnosPaciente = async(idMed, idPac)=>{
    const turnosPaciente = await MedicosFS.findAppointmentByPatient(idMed, idPac)
    console.log(turnosPaciente) 
    return turnosPaciente
}
//buscarTurnosPaciente(3, "Juan" )


const modificarTurnoPaciente = async(id, fecha, horario, paciente)=>{
    const modificado = await MedicosFS.updateAppointment(id, fecha, horario, paciente)
    console.log(modificado)
}
//modificarTurnoPaciente(1, 25, 12, "Josefina")

const eliminarTurno = async(id, fecha, horario)=>{
    const eliminado = await MedicosFS.deleteAppointment(id, fecha, horario)
    console.log(eliminado)
}
//eliminarTurno(2, 25, 18)

module.exports = { buscarTurnosPaciente}
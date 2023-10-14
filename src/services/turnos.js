



//*CRUD Turnos
const crearTurno = async(id, fecha, dia, horario, paciente)=>{
const crear = await  medicosFS.createAppointent(id, fecha, dia, horario, paciente)
}
crearTurno(3, 25, "miércoles", 16, "Juan");


const buscarTurnoFyH = async(id, fecha, horario)=>{
const turno = await medicosFS.findAppointment(id, fecha, horario)
console.log(turno)
return turno
}

const buscarTurnosPaciente = async(id, paciente)=>{
    const turnosPaciente = await medicosFS.findAppointmentByPatient(id, paciente)
    console.log(turnosPaciente) 
    return turnosPaciente
}
//buscarTurnosPaciente(3, "Juan" )


const modificarTurnoPaciente = async(id, fecha, horario, paciente)=>{
    const modificado = await medicosFS.updateAppointment(id, fecha, horario, paciente)
    console.log(modificado)
}
//modificarTurnoPaciente(1, 25, 12, "Josefina")

const eliminarTurno = async(id, fecha, horario)=>{
    const eliminado = await medicosFS.deleteAppointment(id, fecha, horario)
    console.log(eliminado)
}
//eliminarTurno(2, 25, 18)

module.exports = {crearMedico}
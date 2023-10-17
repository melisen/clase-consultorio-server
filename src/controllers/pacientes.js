

const {verTodosPac, verTurnosPac, crearPac, modificarPac,  eliminarPac } = require('../services/pacientes.js')

const verTodosPacientesController = async(req, res)=>{
    let todos = await verTodosPac()
  if(!todos){
    res.status(404).json("No se pudo buscar el recurso")
  }
  res.status(200).json({success:true, message:todos})
}

const verTurnosPacienteController = async(req, res)=>{
    const {idMedico, idPac} = req.body; //con esos nombres de clave tienen que llegar por bodyS
    const turnos = await verTurnosPac(idMedico, idPac);
    if(!turnos){
        res.status(404).json("No se pudo buscar el recurso")
      }else{
        res.status(200).json({success:true, message:turnos})
      }
}

const crearPacienteController = async(req, res)=>{
    const {nombre, apellido, edad, telefono, email, cobertura, profesionalID} = req.body;
    const creado = await crearPac(nombre, apellido, edad, telefono, email, cobertura, profesionalID)
    if(!creado){
        res.status(404).json({success:true, message:"No se pudo guardar"})
      }else{
        res.status(200).json({success:true, message:"Paciente guardado con éxito", creado})
      }
}
const modificarPacienteController = async(req, res)=>{
    //modificarPac
}
const eliminarPacienteController = async(req, res)=>{
    //eliminarPac
}

module.exports = {verTodosPacientesController, crearPacienteController, verTurnosPacienteController, modificarPacienteController, eliminarPacienteController}
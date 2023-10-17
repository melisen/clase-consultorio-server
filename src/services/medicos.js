//*File System para modificar el archivo de persistencia
//*requerimos la clase para usar sus métodos
const {Medicos} = require('../models/medicosFileSystem.js')
const MedicosFS = new Medicos();

//*CRUD Medicos
const crearMedico = async(nombre, apellido, especialidad, consultorio)=>{
    const medico = { nombre, apellido, especialidad, consultorio };
    const creado = await MedicosFS.saveNew(medico)
    return creado;
}
//crearMedico("Gabriela", "Fernández", "Traumatología", 4)

const verTodos = async()=>{
    const todos = await MedicosFS.getAll()
    return todos
}


const buscarMedico = async(id)=>{
const medico = await MedicosFS.findById(id)
return medico
}
//const medicoBuscado = buscarMedico(3)
//console.log(medicoBuscado)

const modificarConsultorioMedico = async(id, consultorio)=>{
    const modificado = await MedicosFS.updateOffice(id, consultorio)
    return modificado 

}
//modificarConsultorioMedico(3, 6)

const eliminarMedico = async(id)=>{
const eliminado = await MedicosFS.deleteById(id)
return eliminado
}
//eliminarMedico(3)


const verAgendaMedico = async (id)=>{
    try{
        const medico = await MedicosFS.findById(id)
        const agendaMedico = medico.agenda
        return agendaMedico
    } catch(err){
        console.error("No se pudo leer la agenda")
    }
    
}


/*
const verTodosServices = async () =>{
    const arrMedicos = await adminModel.verTodos() 
    console.log(arrMedicos)
    return arrMedicos
}
*/

    module.exports = {verTodos, crearMedico, verAgendaMedico, modificarConsultorioMedico, eliminarMedico};







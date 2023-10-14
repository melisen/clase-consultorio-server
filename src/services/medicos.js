//*File System para modificar el archivo de persistencia
//*requerimos la clase para usar sus métodos
const {Medicos} = require('../models/medicosFileSystem.js')
const medicosFS = new Medicos();

//*CRUD Medicos
const crearMedico = async(nuevo)=>{
    const { nombre, apellido, especialidad, consultorio } = nuevo;
    const medico = { nombre, apellido, especialidad, consultorio };
    //medico llega bien
    const creado = await medicosFS.saveNew(medico)
    return creado;
}
//crearMedico("Gabriela", "Fernández", "Traumatología", 4)

const verTodosLosMedicos = async()=>{
    const todos = await medicosFS.getAll()
    console.log(todos)
}


const buscarMedico = async(id)=>{
const medico = await medicosFS.findById(id)
return medico
}
//const medicoBuscado = buscarMedico(3)
//console.log(medicoBuscado)

const modificarConsultorioMedico = async(id, consultorio)=>{
    const modificado = await medicosFS.updateOffice(id, consultorio)
    if(modificado){
        console.log("consultorio modificado con éxito")
    }else{
        console.log("No se pudo modificar")
    }

}
//modificarConsultorioMedico(3, 6)

const eliminarMedico = async(id)=>{
const eliminado = await medicosFS.deleteById(id)
console.log(eliminado)
}
//eliminarMedico(3)

/*
const buscarAgendaMedicoServices = async (id)=>{
    try{
        const medico = await adminModel.verSegunId(id)

        const agendaMedico = medico.agenda        
        return agendaMedico
    } catch(err){
        console.error("No se encontró un médico con ese nombre y apellido")
    }
    
}
*/

/*
const verTodosServices = async () =>{
    const arrMedicos = await adminModel.verTodos() 
    console.log(arrMedicos)
    return arrMedicos
}
*/

    module.exports = {crearMedico};







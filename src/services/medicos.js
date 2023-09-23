// no vamos a usar fetch porque no hacemos request http, ni import statement de Node para leer json. Vamos a usar file system para poder modificar el json y hacer el CRUD

const Administracion = require("../models/administracion");
const adminModel = new Administracion("./public/medicos.json")


const verTodosServices = async () =>{
    const arrMedicos = await adminModel.verTodos() 
    console.log(arrMedicos)
    return arrMedicos
}




const buscarAgendaMedicoServices = async (id)=>{
    try{
        const medico = await adminModel.verSegunId(id)

        const agendaMedico = medico.agenda        
        return agendaMedico
    } catch(err){
        console.error("No se encontró un médico con ese nombre y apellido")
    }
    
}

    module.exports = {buscarAgendaMedicoServices, verTodosServices};







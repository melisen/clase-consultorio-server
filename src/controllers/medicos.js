
const  { verTodos, crearMedico, verAgendaMedico, modificarConsultorioMedico, eliminarMedico } = require("../services/medicos")


const verTodosMedicosController = async (req, res)=>{
  let arrMed = await verTodos()
  if(!arrMed){
    res.status(404).json("No se pudo buscar el recurso")
  }
  res.status(200).json({success:true, message:arrMed})
}


const verAgendaMedicoController = async (req, res) => {
    const { id } = req.body;  
    const agenda = await verAgendaMedico(id);
    if(!agenda){
      res.status(404).json("No se encontró la agenda de este médico")
    }else{
      res.status(200).json({success:true, message:agenda})
    }
    
  
  };

  const crearMedicoController = async(req, res)=>{
    const {nombre, apellido, especialidad, consultorio} = req.body;
    const nuevo = await crearMedico(nombre, apellido, especialidad, consultorio)
    
    if(!nuevo){
      res.status(404).json("No se pudo crear")
    }else{
      res.status(200).json({success:true, message:`Nuevo médico ingresado: ${nuevo}`})
    }

  }

  const modificarMedicoController= async (req, res)=>{
    const {id, consultorio} = req.body;
    const updated = await modificarConsultorioMedico(id, consultorio)
    if(!updated){
      res.status(404).json({success: false, message: "Could not update, try again"})
    }else{
      res.status(200).json({success:"true", message: "Updated successfully"})

    }

  }

  const eliminarMedicoController = async (req, res)=>{
    const {id} = req.body;
    const eliminado = await eliminarMedico(id)
    if(!eliminado){
      res.status(404).json({success: false, message: "Could not delete, try again"})
    }else{
      res.status(200).json({success:"true", message: "Deleted successfully"})

    }
  }




  module.exports = {
    verAgendaMedicoController,
    crearMedicoController,
    verTodosMedicosController,
    modificarMedicoController,
    eliminarMedicoController
  }

const  { crearMedico } = require("../services/medicos")


const verTodosController = async (req, res)=>{
  //let arrMed = await verTodosServices()
  //se ejecuta el controller y se ejecuta verTodosServices()  pero da undefined el array
  res.json(arrMed)
}

const agendaMedicoController = async (req, res) => {
    //const { idMedico } = req.params;  
    const idMedico = 1
    //const agenda = await buscarAgendaMedicoServices(idMedico);
    //res.status(200).json(agenda);
  };

  const crearMedicoController = async(req, res)=>{
    const {nombre, apellido, especialidad, consultorio} = req.body;
    const nuevo = await crearMedico({nombre, apellido, especialidad, consultorio})
    /*
    if(!nuevo){
      res.json("No se pudo crear")
    }
    res.json({success:true, message:`Nuevo médico ingresado: ${nuevo}`})*/
  }

  const modificarPaciente = async (req, res)=>{

  }




  module.exports = {
    agendaMedicoController,
    crearMedicoController,
    verTodosController,
    modificarPaciente
  }
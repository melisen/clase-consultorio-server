
const  {verTodosServices, buscarAgendaMedicoServices } = require("../services/medicos")


const verTodosController = async (req, res)=>{
  let arrMed = await verTodosServices()
  //se ejecuta el controller y se ejecuta verTodosServices()  pero da undefined el array
  res.json(arrMed)
}

const agendaMedicoController = async (req, res) => {
    //const { idMedico } = req.params;  
    const idMedico = 1
    const agenda = await buscarAgendaMedicoServices(idMedico);
    res.status(200).json(agenda);
  };




  module.exports = {
    agendaMedicoController,
    verTodosController
  }
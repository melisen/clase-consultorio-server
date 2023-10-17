const express = require("express");
const { Router } = express;
const router = Router();

const {verTodosPacientesController, crearPacienteController, verTurnosPacienteController, modificarPacienteController, eliminarPacienteController} = require("../controllers/pacientes.js");

router.get("/", verTodosPacientesController)
//router.get("/agenda", verTurnosPacienteController)

router.post("/crear", crearPacienteController)

//router.put("/modificar", modificarPacienteController);

//router.delete("/", eliminarPacienteController)




module.exports = router;
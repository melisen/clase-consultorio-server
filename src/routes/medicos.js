const express = require("express");
const { Router } = express;
const medicosRouter = Router();


const {agendaMedicoController, crearMedicoController, verTodosController, modificarPaciente} = require("../controllers/medicos");



medicosRouter.get("/", verTodosController);


medicosRouter.get("/1", agendaMedicoController)
medicosRouter.post("/crear", crearMedicoController)
medicosRouter.post("/jimena/modificar", modificarPaciente);


module.exports = medicosRouter;
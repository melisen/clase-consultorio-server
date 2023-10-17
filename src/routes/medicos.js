const express = require("express");
const { Router } = express;
const medicosRouter = Router();


const {verTodosMedicosController, verAgendaMedicoController, crearMedicoController, modificarMedicoController, eliminarMedicoController} = require("../controllers/medicos");






medicosRouter.get("/", verTodosMedicosController)
medicosRouter.get("/agenda", verAgendaMedicoController)

medicosRouter.post("/crear", crearMedicoController)

medicosRouter.put("/modificar", modificarMedicoController);

medicosRouter.delete("/", eliminarMedicoController)




module.exports = medicosRouter;
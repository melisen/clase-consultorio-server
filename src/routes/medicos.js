const express = require("express");
const { Router } = express;
const medicosRouter = Router();


const {agendaMedicoController, verTodosController} = require("../controllers/medicos");



medicosRouter.get("/", verTodosController);

medicosRouter.get("/jimena", agendaMedicoController)


module.exports = medicosRouter;
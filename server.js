const config = require("./src/config/config");
const express = require("express")
const medicosRouter = require("./src/routes/medicos");
const pacientesRouter = require("./src/routes/pacientes");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const {middlewareCORS} =require("./src/middlewares/middlewares.js")
app.use(middlewareCORS)


app.use("/api/medicos", medicosRouter);

app.use("/api/pacientes", pacientesRouter);



app.listen(config.PORT, () => {
    console.log(`server listening on port ${config.PORT}`);
  });
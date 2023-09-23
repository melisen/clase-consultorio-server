const config = require("./src/config/config");
const express = require("express")
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const {middlewareCORS} =require("./src/middlewares/middlewares.js")
app.use(middlewareCORS)

const medicosRouter = require("./src/routes/medicos");
app.use("/api/medicos", medicosRouter);



app.listen(config.PORT, () => {
    console.log(`server listening on port ${config.PORT}`);
  });
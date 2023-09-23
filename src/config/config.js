const dotenv = require("dotenv");
if (process.env.NODE_ENV != "production") {
  dotenv.config();
}

const PORT = process.env.PORT;

module.exports = {
    PORT
}
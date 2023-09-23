const middlewareCORS = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5501"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}

module.exports = {middlewareCORS}
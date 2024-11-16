const Log = require("../models/Log")

const get = async (req, res) => {
  const logs = await Log.findAll()

  res.render("logs", {
    flash : req.flash(),
    logs
  })
}

module.exports = {
  get
}
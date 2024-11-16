const Log = require("../../models/Log")

const get = async (req, res) => {
  const logs = await Log.findAll({order : [['id', 'DESC']]})

  res.render("logs/logs", {
    flash : req.flash(),
    logs
  })
}

module.exports = {
  get
}
const Log = require("../../models/Log")

const get = async (req, res) => {
  const findLog = await Log.findByPk(req.params.id)

  res.render("logs/singleLog", {
    flash : req.flash(),
    log : findLog
  })
}

module.exports = {
  get
}
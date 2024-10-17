const Check = require("../../models/Check")

const get = async (req, res) => {
  const checks = await Check.findAll()

  res.render("checks/checks", {
    checks
  })
}

const post = async (req, res) => {

}

module.exports = {
  get,
  post
}
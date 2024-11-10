const Check = require("../../models/Check")
const convert = require("../../utils/convert")

const get = async (req, res) => {
  const checks = await Check.findAll()

  res.render("checks/checks", {
    checks,
    convert
  })
}

const post = async (req, res) => {

}

module.exports = {
  get,
  post
}
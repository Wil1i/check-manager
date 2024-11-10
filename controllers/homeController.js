const Check = require("../models/Check")
const convert = require("../utils/convert")

const get = async (req, res) => {
  const checks = await Check.findAll()

  res.render("homePage", {
    checks,
    convert
  })
}

const post = (req, res) => {

}

module.exports = {
  get,
  post
}
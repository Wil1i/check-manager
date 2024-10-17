const Check = require("../models/Check")

const get = async (req, res) => {
  const checks = await Check.findAll()

  res.render("homePage", {
    checks
  })
}

const post = (req, res) => {

}

module.exports = {
  get,
  post
}
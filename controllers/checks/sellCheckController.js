const Check = require("../../models/Check")
const convert = require("../../utils/convert")

const get = async (req, res) => {
  const checks = await Check.findAll({where : {buyerId : null}})
  res.render("checks/sell", {
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
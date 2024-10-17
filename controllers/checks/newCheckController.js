const Check = require("../../models/Check")

const get = async (req, res) => {
  res.render("checks/new")
}

const post = async (req, res) => {
  await Check.create({
    checkValue : req.body.checkValue,
    checkNumber : req.body.checkNumber,
    checkDate : req.body.checkDate,
    customerName : req.body.customerName,
    customerNumber : req.body.customerNumber
  })

  res.redirect("/checks")
}

module.exports = {
  get,
  post
}
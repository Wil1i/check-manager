const Check = require("../../models/Check")
const log = require("../../utils/log")

const get = async (req, res) => {
  res.render("checks/new")
}

const post = async (req, res) => {
  const newCheck = await Check.create({
    checkValue : req.body.checkValue,
    checkNumber : req.body.checkNumber,
    checkDate : req.body.checkDate,
    customerName : req.body.customerName,
    customerNumber : req.body.customerNumber
  })

  log.submit("create-check", req.user.id, `چک ${newCheck.customerName} ثبت شد.`, `چک ${newCheck.customerName} با شماره تماس ${newCheck.customerNumber} به مبلغ ${newCheck.checkValue} به شماره چک ${newCheck.checkNumber} توسط ${req.user.username} ثبت شد.`)

  res.redirect("/checks")
}

module.exports = {
  get,
  post
}
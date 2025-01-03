const Check = require("../../models/Check")
const Buyer = require("../../models/Buyer")
const log = require("../../utils/log")

const get = async (req, res) => {
  const check = await Check.findByPk(req.params.id)
  const buyers = await Buyer.findAll()

  res.render("checks/sellTo", {
    check,
    buyers
  })
}

const post = async (req, res) => {
  const findCheck = await Check.findByPk(req.params.id)

  if(!findCheck) return req.flash("danger", "چک مورد نظر یافت نشد.")

  const findBuyer = await Buyer.findByPk(req.body.buyer)

  if(!findBuyer) return req.flash("danger", "خریدار مورد نظر یافت نشد.")

  await findCheck.update({
    buyerId : req.body.buyer,
    soledPrice : req.body.soledPrice,
    soledPercent : req.body.soledPercent
  })

  log.submit("sell-check", req.user.id, `چک ${findCheck.customerName} فروخته شد.`, `چک ${findCheck.customerName} با شماره چک ${findCheck.checkNumber} به ${req.body.buyer} با درصد ${req.body.soledPercent} به مبلغ ${req.body.soledPrice} توسط ${req.user.username} فروخته شد.`)

  req.flash("success", "چک مورد نظر با موفقیت فروخته شد.")
  return res.redirect("/checks")
}

module.exports = {
  get,
  post
}
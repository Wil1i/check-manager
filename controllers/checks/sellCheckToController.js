const Check = require("../../models/Check")
const Buyer = require("../../models/Buyer")

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

  await findCheck.update({buyerId : req.body.buyer})

  req.flash("success", "چک مورد نظر با موفقیت فروخته شد.")
  return res.redirect("/checks")
}

module.exports = {
  get,
  post
}
const Buyer = require("../../models/Buyer")
const log = require("../../utils/log")

const post = async (req, res) => {
  const findBuyer = await Buyer.findByPk(req.query.id)

  if(!findBuyer) return res.flash("danger", "خریدار مورد نظر یافت نشد.");

  log.submit("delete-buyer", req.user.id, `خریدار ${findBuyer.name} حذف شد.`, `خریدار ${findBuyer.name} با شماره ${findBuyer.number} توسط ${req.user.username} حذف شد.`)

  await findBuyer.destroy()

  res.redirect("/buyers")
}

module.exports = {
  post
}
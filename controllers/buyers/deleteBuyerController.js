const Buyer = require("../../models/Buyer")

const post = async (req, res) => {
  const findBuyer = await Buyer.findByPk(req.query.id)

  if(!findBuyer) return res.flash("danger", "خریدار مورد نظر یافت نشد.");

  await findBuyer.destroy()

  res.redirect("/buyers")
}

module.exports = {
  post
}
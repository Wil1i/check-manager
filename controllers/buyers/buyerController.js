const Buyer = require("../../models/Buyer")
const convert = require("../../utils/convert")

const get = async (req, res) => {
  const findBuyer = await Buyer.findByPk(req.params.id, {include : ['checks', 'receipts']})

  if(!findBuyer) {req.flash("danger", "خریدار مورد نظر یافت نشد."); return res.redirect("/buyers")}

  res.render("buyers/buyer", {
    buyer : findBuyer,
    convert
  })
}

module.exports = {
  get
}
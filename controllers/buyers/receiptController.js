const Buyer = require("../../models/Buyer")
const Receipt = require("../../models/Receipt")
const log = require("../../utils/log")

const get = async (req, res) => {
  let value = await Receipt.findAll({where : {buyerId : req.params.id}})

  res.render("buyers/receipt", {
    value : value.map(a => a.value).reduce((a, b) => a.value + b.value, 0),
    buyerId : req.params.id
  })
}

const post = async (req, res) => {
  await Receipt.create({
    value : req.body.value,
    buyerId : req.params.id
  })

  log.submit("receipt", req.user.id, `مبلغ ${req.body.value} از ${req.params.id}`, `مبلغ ${req.body.value} از خریدار با ID ${req.params.id} توسط ${req.user.username} دریافت شد.`)

  req.flash("success", "دریافتی با موفقیت ثبت شد.")

  res.redirect(`/buyers/${req.params.id}`)
}

module.exports = {
  get,
  post
}
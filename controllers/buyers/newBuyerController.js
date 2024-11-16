const Buyer = require("../../models/Buyer")
const log = require("../../utils/log")

const get = (req, res) => {
  res.render("buyers/new")
}

const post = async (req, res) => {
  await Buyer.create({
    name : req.body.name,
    number : req.body.number
  })

  log.submit("new-buyer", req.user.id, `خریدار ${req.body.name} اضافه شد.`, `خریدار ${req.body.name} با شماره ${req.body.number} توسط ${req.user.username} اضافه شد.`)

  res.redirect("/buyers")
}

module.exports = {
  get,
  post
}
const Buyer = require("../../models/Buyer")

const get = (req, res) => {
  res.render("buyers/new")
}

const post = async (req, res) => {
  await Buyer.create({
    name : req.body.name,
    number : req.body.number
  })

  res.redirect("/buyers")
}

module.exports = {
  get,
  post
}
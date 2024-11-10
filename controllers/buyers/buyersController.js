const Buyer = require("../../models/Buyer")
const convert = require("../../utils/convert")

const get = async (req, res) => {
  const buyers = await Buyer.findAll({include : ['checks', 'receipts']})

  res.render("buyers/buyers", {
    buyers,
    convert
  })
}

const post = async (req, res) => {

}

module.exports = {
  get,
  post
}
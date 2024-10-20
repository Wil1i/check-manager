const Buyer = require("../../models/Buyer")

const get = async (req, res) => {
  const buyers = await Buyer.findAll({include : ['checks']})

  console.log(buyers)

  res.render("buyers/buyers", {
    buyers
  })
}

const post = async (req, res) => {

}

module.exports = {
  get,
  post
}